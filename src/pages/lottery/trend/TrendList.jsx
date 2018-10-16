import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table } from 'antd';
import './trendList.styl';

@inject('lotteryStore')
@observer
class TrendList extends React.Component {
    render() {
        const TableTitle = () => {
            return (
                <div className="clearfix history-trend-title">
                    <span className="fl history-trend-title-left">近期开奖结果</span>
                    <a className="fr history-trend-title-right"><i className="icon-trend"></i>走势图</a>
                </div>
            );
        };
        const { className, mainLeftRef } = this.props;
        const { trendData, lotteryType, method, trendConfig } = this.props.lotteryStore;
        const Colorcode = ({ code, method }) => {
            const codeArr = code.split(',');
            return (
                <div className="trend-codes">
                    {
                        codeArr.map((val, idx) => {
                            return <span key={idx} className={trendConfig[lotteryType][method]['area'].includes(idx) ? 'trend-code active' : 'trend-code'}>{val}</span>;
                        })
                    }
                </div>
            );
        };
        const Shape = ({ value }) => {
            return <div className="trend-shape" dangerouslySetInnerHTML={{ __html: value }}></div>;
        };
        let columns = [{
            title: <span className="trend-head-col">期号</span>,
            dataIndex: 'issue',
            width: trendConfig[lotteryType][method]['widthConfig']['col1']
        }, {
            title: <span className="trend-head-col">开奖号码</span>,
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
                issue: <div className="trend-issue">{issueNo.split('-').slice(-1)}</div>,
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
                <Table columns={columns} dataSource={dataSource} title={TableTitle} pagination={false} rowClassName="trend-item" locale={{ emptyText: '尚无开奖结果' }} scroll={{ y: mainLeftRef.offsetHeight - 37*2 }} />
            </div>
        );
    }
}

export default TrendList;