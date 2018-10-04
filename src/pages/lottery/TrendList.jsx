import React from 'react';
import { Table } from 'antd';

const columns = [{
    title: '期号',
    dataIndex: 'issue',
    width: 150,
}, {
    title: '开奖号码',
    dataIndex: 'openCode',
    width: 150,
}, {
    title: '五星组态',
    dataIndex: 'shape',
}];

class TrendList extends React.Component {
    render() {
        const tableTitle = () => {
            <div className="clearfix">
                <span className="fl">近期开奖结果</span>
                <span className="fr"><i></i>走势图</span>
            </div>
        };
        const { data, method, colorConfig } = this.props;
        const Colorcode = ({ code, method }) => {
            codeArr = code.split(',');
            return (
                <div className="trend-codes">
                    {
                        codeArr.map((val, idx) => {
                            return <span key={idx} className={colorConfig[method].includes(idx) ? 'trend-code active' : 'trend-code'}>{val}</span>;
                        })
                    }
                </div>
            );
        };
        const dataSource = data.map((item, index) => {
            const { issueNo, code } = item;
            return {
                key: index,
                issue: () => <div className="trend-issue">{issueNo}</div>,
                openCode: <Colorcode code={code} method={method} />,
                shape: <Shape code={code} method={method} />,
            }
        });
        return (
            <div>
                <Table columns={columns} dataSource={dataSource} title={tableTitle} pagination={false} rowClassName="trend-item" locale={{ emptyText: '尚无开奖结果' }} scroll={{ y: 240 }} />
            </div>
        );
    }
}

export default TrendList;