import React from 'react';
import { Modal, Tabs, Icon } from 'antd';
import { getNoticeList } from '../../../utils/ajax';
import { addClass, removeClass } from '../../../utils/cssClass';

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
        defaultActiveKey: '',
        modalWidth: 950
    }
    _mounted = false
    perPageTabsCount = 8 //弹窗每页显示的tab数量
    listRef = null
    alertId = null
    componentDidMount() {
        this._mounted = true;
        this.getData();
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    async getData() {
        const res = await getNoticeList({
            pageNumber: -1,
            scroll: 2,
            noticeType: 1
        });
        const items = res.data.items;
        const endNum = items.length > this.perPageTabsCount ? this.perPageTabsCount : items.length;
        this._mounted && this.setState({
            data: items,
            pageData: items.slice(0, this.perPageTabsCount),
            defaultActiveKey: String(items[0].id),
            endNum: endNum,
            showPageNext: endNum < items.length
        });

        this.alertId = items.some(v => v.isJumpView === "1") && items.filter(v => v.isJumpView === "1").sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime())[0]['id'];
        const firstLoginAlerted = localStorage.getItem(`firstLoginAlerted-${this.alertId}`);
        if (this.alertId && firstLoginAlerted !== 'done') {
            this.firstLoginAlert();
        }

        setTimeout(() => {
            if (!this._mounted) return;
            const arr = [];
            for (let item of items) {
                if (this.listRef.offsetWidth > 850) {//限制显示条目
                    arr.pop();
                    this.setState({
                        showedData: arr
                    });
                    break;
                }
                arr.push(item);
                this.setState({
                    showedData: arr
                });
            }
        }, 800);
    }

    firstLoginAlert = () => {//首次登陆是否弹窗
        this.setState({ showModalFlag: true, modalWidth: 630, defaultActiveKey: String(this.alertId) });
        setTimeout(() => {
            addClass(document.querySelector('.ant-tabs-bar'), 'hide');
        }, 250);
        localStorage.setItem(`firstLoginAlerted-${this.alertId}`, 'done');
    }
    showNoticeModal = id => {
        this.setState({
            defaultActiveKey: String(id || this.state.data[0].id),
            modalWidth: 950,
            showModalFlag: true
        });
        setTimeout(() => {
            removeClass(document.querySelector('.ant-tabs-bar'), 'hide');
        }, 250);
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
                <Modal width={this.state.modalWidth} className="notice-modal-wrapper" footer={null} title={<ModalTitle />} centered destroyOnClose visible={this.state.showModalFlag} onCancel={this.closeModal}>
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