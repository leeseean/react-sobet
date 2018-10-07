import React from 'react';
import { Table } from 'antd';
import './trendList.styl';

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
        const { data, method, trendConfig, className } = this.props;
        const Colorcode = ({ code, method }) => {
            const codeArr = code.split(',');
            return (
                <div className="trend-codes">
                    {
                        codeArr.map((val, idx) => {
                            return <span key={idx} className={trendConfig[method]['area'].includes(idx) ? 'trend-code active' : 'trend-code'}>{val}</span>;
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
            width: 100,
        }, {
            title: <span className="trend-head-col">开奖号码</span>,
            dataIndex: 'openCode',
            width: 100,
        }];
        if (trendConfig[method]['shapeName']) {
            const Title = () => <span className="trend-head-col">{trendConfig[method]['shapeName']}</span>;
            columns = [...columns, {
                title: <Title />,
                dataIndex: 'shape',
                width: 100,
            }];
        }
        const dataSource = data.map((item, index) => {
            const { issueNo, code } = item;
            let obj = {
                key: index,
                issue: <div className="trend-issue">{issueNo.split('-').slice(-1)}</div>,
                openCode: <Colorcode code={code} method={method} />,
            };
            if (trendConfig[method]['shapeName']) {
                obj = {
                    ...obj,
                    shape: <Shape value={trendConfig[method]['calcShape'](code)} />,
                };
            }
            return obj;
        });
        return (
            <div className={`trend-wrapper ${className}`}>
                <Table columns={columns} dataSource={dataSource} title={TableTitle} pagination={false} rowClassName="trend-item" locale={{ emptyText: '尚无开奖结果' }} scroll={{ y: 240 }} />
            </div>
        );
    }
}

export default TrendList;