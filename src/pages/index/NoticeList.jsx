import React from 'react';
import { Modal, Tabs, Icon } from 'antd';
import $http from '../../utils/ajax';
import './noticeList.styl';

class NoticeList extends React.Component {
    state = {
        data: [],
        showedData: [],
        pageData: [],
        startNum: 1,
        endNum: 8,
        showPagePrev: false,
        showPageNext: false,
        showModalFlag: false,
        defaultActiveKey: null,
    }
    perPageTabsCount = 8 //弹窗每页显示的tab数量
    listRef = null
    componentDidMount() {
        this.getData();
    }
    getData() {
        $http({
            url: '/notice.json',
            method: 'GET',
        }).then(res => {
            const endNum = res.data.items.length > this.perPageTabsCount ? this.perPageTabsCount : res.data.items.length;
            this.setState({
                data: res.data.items,
                pageData: res.data.items.slice(0, this.perPageTabsCount),
                defaultActiveKey: String(res.data.items[0].id),
                endNum: endNum,
                showPageNext: endNum < res.data.items.length
            });

            const arr = [];
            for (let item of res.data.items) {
                if (this.listRef.offsetWidth > 800) {//限制显示条目
                    break;
                }
                arr.push(item);
                this.setState({
                    showedData: arr
                });
            }
        });
    }
    showNoticeModal = id => {
        this.setState({
            defaultActiveKey: String(id || this.state.data[0].id),
            showModalFlag: true
        });
    }
    closeModal = () => {
        this.setState({
            defaultActiveKey: String(this.state.data[0].id),
            showModalFlag: false,
            pageData: this.state.data.slice(0, this.perPageTabsCount),
            startNum: 1,
            endNum: this.state.data.length < 8 ? this.state.data.length : this.perPageTabsCount
        });
    }
    pagePrev = () => {
        this.setState((prevState) => {
            const startNum = prevState.startNum - this.perPageTabsCount;
            const endNum = prevState.startNum - 1;
            return {
                showPageNext: endNum < prevState.data.length,
                showPagePrev: startNum > this.perPageTabsCount,
                startNum,
                endNum,
                pageData: prevState.data.slice(startNum - 1, endNum)
            }
        });
    }
    pageNext = () => {
        this.setState((prevState) => {
            const startNum = prevState.startNum + this.perPageTabsCount;
            let endNum = prevState.endNum + this.perPageTabsCount;
            endNum = endNum > prevState.data.length ? prevState.data.length : endNum
            return {
                showPageNext: endNum < prevState.data.length,
                showPagePrev: startNum > this.perPageTabsCount,
                startNum,
                endNum,
                pageData: prevState.data.slice(startNum - 1, endNum)
            };
        });
    }
    render() {
        const TabPane = Tabs.TabPane;
        const TabBarExtraContent = () => {
            return (
                <div>
                    {
                        this.state.showPagePrev ? <Icon type="left" theme="outlined" className="page-prev" onClick={this.pagePrev} /> : null
                    }
                    <em className="page-detail">第{this.state.startNum}-{this.state.endNum}条,共{this.state.data.length}条</em>
                    {
                        this.state.showPageNext ? <Icon type="right" theme="outlined" className="page-next" onClick={this.pageNext} /> : null
                    }
                </div>
            );
        };
        const ModalTitle = () => <div className="notice-title"><i className="notice-title-icon"></i><span>最新公告</span></div>;
        return (
            <div className="index-main-announcement clearfix">
                <span className="main-announcement-title"></span>
                <span className="main-announcement-wrap" ref={ref => this.listRef = ref}>
                    {
                        this.state.showedData.map(item => {
                            const { id, title } = item;
                            return <span className="main-announcement-item" key={id} id={id} onClick={() => this.showNoticeModal(id)}>{title}</span>;
                        })
                    }
                </span>
                <span className="main-announcement-more fr" onClick={() => this.showNoticeModal()}>更多 <i className="icon-more">&gt;</i></span>
                <Modal width={950} className="notice-modal-wrapper" footer={null} title={<ModalTitle />} centered destroyOnClose visible={this.state.showModalFlag} onCancel={this.closeModal}>
                    <Tabs defaultActiveKey={this.state.defaultActiveKey} tabPosition="left" tabBarExtraContent={<TabBarExtraContent />}>
                        {
                            this.state.pageData.map(item => {
                                const { id, title, content, createTime } = item;
                                const TabTitle = () => {
                                    return (
                                        <div className="clearfix">
                                            <span className="fl">{title}</span>
                                            <span className="fr">{createTime.split(' ')[0].slice(-5)}</span>
                                        </div>
                                    );
                                };
                                return (
                                    <TabPane className="notice-item-content" tab={<TabTitle />} key={id}>
                                        <div>
                                            <h3>{title}</h3>
                                            <p className="con-type">
                                                <span className="create-time">{createTime}</span>
                                                <span className="type">系统公告</span>
                                            </p>
                                            <div className="news-content" dangerouslySetInnerHTML={{ __html: content }}>
                                            </div>
                                        </div>
                                    </TabPane>
                                );
                            })
                        }
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export default NoticeList;