/**
 * Created by Orange on 2018-11-05 11:21:25.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Table, Icon, Button, Checkbox, message } from 'antd';
import './mmcModal.styl';
import IconDetail from '../../../images/lottery/mmc-1.svg';
import IconPiece from '../../../images/lottery/mmc-2.svg';
import IconPrice from '../../../images/lottery/mmc-3.svg';
import IconAmount from '../../../images/lottery/mmc-4.svg';

@inject(stores => ({
    refreshBalance: stores.globalStore.refreshBalance,
    lotteryStore: stores.lotteryStore
}))
@observer
class MmcModal extends React.Component {
    render() {
        const { mmcModalFlag } = this.props.lotteryStore;
        const recordColumns = [{
            key: 'detail',
            title: <div style={{ width: '255px' }}><Icon component={() => <IconDetail width="30" height="20" />} />玩法及投注内容</div>,
            dataIndex: 'detail',
            width: 280,
            render: (text, record) => {
                return (
                    <div className="ellipsis" style={{ width: '255px' }}>{text}</div>
                );
            }
        }, {
            key: 'piece',
            title: <div><Icon component={() => <IconPiece width="30" height="14" />} />倍数</div>,
            dataIndex: 'piece',
            width: 130,
            render: text => <div>{text}</div>
        }, {
            key: 'price',
            title: <div><Icon component={() => <IconPrice width="20" height="14" />} />模式</div>,
            dataIndex: 'price',
            width: 130,
            render: text => <div>{text}</div>
        }, {
            key: 'amount',
            title: <div><Icon component={() => <IconAmount width="20" height="14" />} />投注金额</div>,
            dataIndex: 'amount',
            width: 130,
            render: text => <div>{text}</div>
        }];
        const recordData = [{
            key: 1,
            detail: '后二直选复式 ssss',
            piece: 1,
            price: 2,
            amount: 130
        }];
        const openColumns = [{
            key: 'index',
            title: <div>连投次序</div>,
            dataIndex: 'index',
            width: 80,
        }, {
            key: 'opencode',
            title: <div>开奖号码</div>,
            dataIndex: 'opencode',
            width: 150,
            render: text => <div style={{ fontWeight: 700 }}>{text}</div>
        }, {
            key: 'bonus',
            title: <div>中奖金额</div>,
            dataIndex: 'bonus',
            width: 100,
            render: text => {
                if (text === '未中奖') {
                    return <div>{text}</div>;
                }
                return <div><em style={{ fontWeight: 700, color: '#d24454' }}>{text}</em></div>;
            }
        }];
        const openData = [{
            key: 1,
            index: 1,
            opencode: '1,2,3,4,5',
            bonus: '100.22'
        }]
        return mmcModalFlag ? (
            <React.Fragment>
                <div className="ant-modal-mask"></div>
                <div className="mmc-modal-wrapper">
                    <div className="modal-top">
                        <Table
                            columns={recordColumns}
                            dataSource={recordData.slice()}
                            pagination={false}
                            size="small"
                            locale={{
                                emptyText: ''
                            }}
                            scroll={{
                                y: 120
                            }}
                        />
                    </div>
                    <div className="clearfix modal-bottom">
                        <div className="fl modal-bottom-left">
                            <Table
                                columns={openColumns}
                                dataSource={openData.slice()}
                                pagination={false}
                                size="small"
                                locale={{
                                    emptyText: ''
                                }}
                                scroll={{
                                    y: 170
                                }}
                            />
                        </div>
                        <div className="fr modal-bottom-right">
                            <p className="total-title">第1次开奖</p>
                            <ul className="total-list">
                                <li className="clearfix">
                                    <span className="fl">累计开奖次数：</span>
                                    <span className="fr"><em style={{ color: '#d24454' }}>5</em>次</span>
                                </li>
                                <li className="clearfix">
                                    <span className="fl">累计开奖次数：</span>
                                    <span className="fr"><em style={{ color: '#d24454' }}>5</em>次</span>
                                </li>
                                <li className="clearfix">
                                    <span className="fl">累计中奖金额：</span>
                                    <span className="fr"><em style={{ color: '#d24454' }}>2</em>元</span>
                                </li>
                            </ul>
                            <div className="total-buttons">
                                <Button style={{ width: '88px', margin: '0 6px' }} type="primary">再玩一次</Button>
                                <Button style={{ width: '88px', margin: '0 6px' }}>取消</Button>
                            </div>
                            <ul className="total-list" style={{ display: 'none' }}>
                                <li className="clearfix">
                                    <span className="fl">计划开奖次数：</span>
                                    <span className="fr"><em style={{ color: '#d24454' }}>5</em>次</span>
                                </li>
                                <li className="clearfix">
                                    <span className="fl">已开奖次数：</span>
                                    <span className="fr"><em style={{ color: '#d24454' }}>5</em>次</span>
                                </li>
                                <li className="clearfix">
                                    <span className="fl">已中奖金额：</span>
                                    <span className="fr"><em style={{ color: '#d24454' }}>2</em>元</span>
                                </li>
                            </ul>
                            <div className="total-buttons" style={{ display: 'none' }}>
                                <Button style={{ width: '100px' }} type="primary">停止开奖</Button>
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment>
        ) : null;
    }
}

export default MmcModal;