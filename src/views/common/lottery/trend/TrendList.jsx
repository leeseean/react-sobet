import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table } from 'antd';
import './trendList.styl';

@inject(stores => (
    {
        trendListHeight: stores.lotteryStore.trendListHeight,
        method: stores.lotteryStore.method,
    }
))
@observer
class TrendList extends React.Component {
    state = {
        trendData: this.props.trendData,
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.trendData.slice()) !== JSON.stringify(prevState.trendData.slice())) {
            return {
                trendData: nextProps.trendData
            };
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { lotteryType, trendConfig, method } = nextProps;
        if (trendConfig[lotteryType][method]) {
            return true;
        }
       /*  if ((JSON.stringify(nextProps.trendData.slice()) !== JSON.stringify(this.props.trendData.slice())) && (nextProps.method !== this.props.method)) {//只更新奖号时更新
            return true;
        } */
        if (nextProps.trendListHeight !== this.props.trendListHeight) {
            return true;
        }
        return false;
    }
    render() {
        const TableTitle = () => {
            return (
                <div className="clearfix history-trend-title">
                    <span className="fl history-trend-title-left">近期开奖结果</span>
                    <a className="fr history-trend-title-right"><i className="icon-trend"></i>走势图</a>
                </div>
            );
        };
        const { className, method } = this.props;
        const trendData = this.state.trendData;
        const { lotteryType, trendConfig, trendListHeight } = this.props;
        if (!trendConfig[lotteryType][method]) {
            return null;
        }
        const Colorcode = ({ code, method }) => {
            const codeArr = code.split(',');
            return (
                <div className="trend-codes" lottery-type={lotteryType}>
                    {
                        codeArr.map((val, idx) => {
                            return <span key={idx} className={trendConfig[lotteryType][method]['area'].includes(idx) ? 'trend-code active' : 'trend-code'}>{val}</span>;
                        })
                    }
                </div>
            );
        };
        const Shape = ({ value }) => {
            return <div className="trend-shape" lottery-type={lotteryType} dangerouslySetInnerHTML={{ __html: value }}></div>;
        };
        let columns = [{
            title: <span className="trend-head-col">期号</span>,
            dataIndex: 'issue',
            width: trendConfig[lotteryType][method]['widthConfig']['col1']
        }, {
            title: <span className="trend-head-col col2" lottery-type={lotteryType}>开奖号码</span>,
            dataIndex: 'openCode',
            width: trendConfig[lotteryType][method]['widthConfig']['col2']
        }];
        if (trendConfig[lotteryType][method]['shapeName']) {
            const Title = () => <span className="trend-head-col" dangerouslySetInnerHTML={{ __html: trendConfig[lotteryType][method]['shapeName'] }}></span>;
            columns = [...columns, {
                title: <Title />,
                dataIndex: 'shape',
            }];
        }
        const dataSource = trendData.map((item, index) => {
            const { issueNo, code } = item;
            let obj = {
                key: index,
                issue: <div className="trend-issue">{issueNo.split('-').pop() ? issueNo.split('-').pop() : '-'}</div>,
                openCode: <Colorcode code={code} method={method} />,
            };
            if (trendConfig[lotteryType][method]['shapeName']) {
                obj = {
                    ...obj,
                    shape: <Shape value={trendConfig[lotteryType][method]['calcShape'](code)} />,
                };
            }
            return obj;
        });
        return (
            <div className={`trend-wrapper ${className ? className : ''}`}>
                <Table columns={columns} dataSource={dataSource.slice()} title={TableTitle} pagination={false} rowClassName="trend-item" locale={{ emptyText: '尚无开奖结果' }} scroll={{ y: trendListHeight && trendListHeight - 37 * 2 }} />
            </div>
        );
    }
}

export default TrendList;