/**
 * Created by Orange on 2018-10-30 14:15:45.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Tabs, Table } from 'antd';
import './trace.styl';
import InputNumber from '../InputNumberUpDown';
import '../inputNumberUpDown.styl';

@inject('lotteryStore')
@observer
class Trace extends React.Component {
    render() {
        const { currentIssue, defaultActiveTraceType, setActiveTraceType, defaultStartPiece, defaultTraceGap, defaultTracePiece, defaultTraceCount, defaultTraceMinRate, changeStartPiece, changeTraceGap, changeTracePiece, changeTraceCount, changeTraceMinRate, traceDataSource } = this.props.lotteryStore;
        const columns = [{
            title: '全选',
            dataIndex: 'index',
            width: 60
        }, {
            title: '期数',
            dataIndex: 'issue',
            render: text => {
                if (text.detail === currentIssue) {
                    return (
                        <React.Fragment>
                            {text.detail}<span className="trace-current-issue">当前期</span>
                        </React.Fragment>
                    );
                }
                if (text.isTomorrow) {
                    return (
                        <React.Fragment>
                            {text.detail}<span className="trace-tomorrow-issue">隔天期</span>
                        </React.Fragment>
                    );
                }
                return text.detail;
            },
            width: 200,
        }, {
            title: '倍数',
            dataIndex: 'piece',
            width: 120
        }, {
            title: '日期',
            dataIndex: 'date',
            width: 150
        }, {
            title:  <div style={{width: '100px'}}>追号金额</div>,
            dataIndex: 'money',
            width: 100,
            render: text => <div style={{width: '100px'}} className="ellipsis">{text}</div>
        }];
        const dataSource = traceDataSource;
        const rowSelection = {
            width: 20,
            onChange: (selectedRowKeys, selectedRows) => { },
            onSelect: (record, selected, selectedRows, nativeEvent) => { },
            onSelectAll: (selected, selectedRows, changeRows) => { }
        };

        return (
            <div className="trace-wrapper">
                <Tabs hideAdd defaultActiveKey="3" type="editable-card" onChange={key => setActiveTraceType(key)} >
                    <Tabs.TabPane size="small" tab="翻倍追号" key={defaultActiveTraceType} closable={false}>
                        <div className="clearfix trace-top">
                            <span className="fl fl-item">
                                起始倍数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultStartPiece} size="small" onChange={(value) => changeStartPiece(value)} />
                            </span>
                            <span className="fl fl-item">
                                隔&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceGap} size="small" onChange={(value) => changeTraceGap(value)} />&nbsp;期
                            </span>
                            <span className="fl fl-item">
                                倍x&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTracePiece} size="small" onChange={(value) => changeTracePiece(value)} />
                            </span>
                            <span className="fl fl-item">
                                追号期数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceCount} size="small" onChange={(value) => changeTraceCount(value)} />
                            </span>
                            <span className="fr gen-trace">生成追号计划</span>
                        </div>
                        <Table
                            size="small"
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false}
                            scroll={{ y: 240 }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane size="small" tab="同倍追号" key="2" closable={false}>
                        <div className="clearfix trace-top">
                            <span className="fl fl-item">
                                起始倍数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultStartPiece} size="small" onChange={(value) => changeStartPiece(value)} />
                            </span>
                            <span className="fl fl-item">
                                追号期数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceCount} size="small" onChange={(value) => changeTraceCount(value)} />
                            </span>
                            <span className="fr gen-trace">生成追号计划</span>
                        </div>
                        <Table
                            size="small"
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false}
                            scroll={{ y: 240 }} />
                    </Tabs.TabPane>
                    <Tabs.TabPane size="small" tab="利润率追号" disabled key="1" closable={false}>
                        <div className="clearfix trace-top">
                            <span className="fl fl-item">
                                最低收益率&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceMinRate} size="small" onChange={(value) => changeTraceMinRate(value)} />&nbsp;%
                            </span>
                            <span className="fl fl-item">
                                起始倍数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultStartPiece} size="small" onChange={(value) => changeStartPiece(value)} />
                            </span>
                            <span className="fl fl-item">
                                追号期数&nbsp;<InputNumber min="1" max="1000" defaultValue={defaultTraceCount} size="small" onChange={(value) => changeTraceCount(value)} />
                            </span>
                            <span className="fr gen-trace">生成追号计划</span>
                        </div>
                        <Table
                            size="small"
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={dataSource}
                            pagination={false}
                            scroll={{ y: 240 }} />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Trace;