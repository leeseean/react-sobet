/**
 * Created by Orange on 2018-10-30 14:15:45.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Checkbox, Tabs, Table } from 'antd';
import InputNumber from '../InputNumberUpDown';
import '../inputNumberUpDown.styl';

@inject('lotteryStore')
@observer
class Trace extends React.Component {
    render() {
        const { defaultActiveTraceType, setActiveTraceType, defaultStartPiece, defaultTraceGap, defaultTracePiece, defaultTraceCount, defaultTraceMinRate, changeStartPiece, changeTraceGap, changeTracePiece, changeTraceCount, changeTraceMinRate } = this.props.lotteryStore;
        const columns = [{
            title: '期数',
            dataIndex: 'issue',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '倍数',
            dataIndex: 'piece',
        }, {
            title: '日期',
            dataIndex: 'date',
        }, {
            title: '追号金额',
            dataIndex: 'money',
        }];
        const dataSource = [];
        const rowSelection = {
            columnTitle: '全选',
            onChange: (selectedRowKeys, selectedRows) => { },
            onSelect: (record, selected, selectedRows, nativeEvent) => { },
            onSelectAll: (selected, selectedRows, changeRows) => { }
        };

        return (
            <div className="trace-wrapper">
                <Tabs hideAdd defaultActiveKey="3" type="editable-card" onChange={key => setActiveTraceType(key)} >
                    <Tabs.TabPane tab="翻倍追号" key={defaultActiveTraceType} closable={false}>
                        起始倍数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultStartPiece} size="small" onChange={(value) => changeStartPiece(value)} />&nbsp;
                        隔&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceGap} size="small" onChange={(value) => changeTraceGap(value)} />&nbsp;期&nbsp;&nbsp;
                        倍x&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTracePiece} size="small" onChange={(value) => changeTracePiece(value)} />&nbsp;&nbsp;
                        追号期数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceCount} size="small" onChange={(value) => changeTraceCount(value)} />
                        <Table rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="同倍追号" key="2" closable={false}>
                        起始倍数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultStartPiece} size="small" onChange={(value) => changeStartPiece(value)} />&nbsp;&nbsp;
                        追号期数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceCount} size="small" onChange={(value) => changeTraceCount(value)} />
                        <Table rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false} />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="利润率追号" disabled key="1" closable={false}>
                        最低收益率&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceMinRate} size="small" onChange={(value) => changeTraceMinRate(value)} />&nbsp;%&nbsp;
                        起始倍数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultStartPiece} size="small" onChange={(value) => changeStartPiece(value)} />&nbsp;&nbsp;
                        追号期数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceCount} size="small" onChange={(value) => changeTraceCount(value)} />
                        <Table rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false} />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Trace;