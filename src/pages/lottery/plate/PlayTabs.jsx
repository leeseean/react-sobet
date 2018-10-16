/**
 * Created by Orange on 2018-10-16 10:02:28.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore', 'plateStore')
@observer
class PlayTabs extends React.Component {
    render() {
        const { tabConfig, activeTab, setActiveTab, method, setMethod } = this.props.plateStore;
        const config = tabConfig;
        const Tab = ({ config }) => {
            return config.map(item => {
                const { tab } = item;
                return <div key={tab} className={`fl tab ${activeTab.tab === tab ? 'active' : ''}`} onClick={() => setActiveTab(item)}>{tab}</div>
            });
        };
        const SubTab = ({ subTabConfig }) => {
            return subTabConfig.map(item => {
                const { title, playWay } = item;
                return (
                    <div key={title} className="clearfix subTab-item">
                        <div className="fl subTab-item-title">{title}</div>
                        <div className="fl clearfix subTab-item-ways">
                            {
                                playWay.map(({ en, cn }) => <div key={en} method={en} className={`fl subTab-item-way ${method === en ? 'active' : ''}`} onClick={() => setMethod(en)}>{cn}</div>)
                            }
                        </div>
                    </div>
                );
            });
        };
        return (
            <React.Fragment>
                <div className="tab-wrapper">
                    <Tab config={config} />
                </div>
                <div className="subTab-wrapper">
                    <SubTab subTabConfig={activeTab['subTabConfig']} />
                </div>
            </React.Fragment>
        );
    }
}

export default PlayTabs;