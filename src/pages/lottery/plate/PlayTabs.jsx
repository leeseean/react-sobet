/**
 * Created by Orange on 2018-10-16 10:02:28.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('plateStore')
@observer
class PlayTabs extends React.Component {
    render() {
        const { currentTabConfig, unlimitedFlag, switchMoreTab, activeTab, setActiveTab, method, setMethod } = this.props.plateStore;
        const config = currentTabConfig;
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
                                playWay.map(({ en, cn, ...rest }) => <div key={en} method={en} className={`fl subTab-item-way ${method === en ? 'active' : ''}`} onClick={() => setMethod(en, rest)}>{cn}</div>)
                            }
                        </div>
                    </div>
                );
            });
        };
        let MoreTab = null;
        if (unlimitedFlag) {
            MoreTab = ({text, onClick}) => {
                return <div className="fr tab-more" onClick={onClick}><i className="more-icon"></i>更多</div>;
            };
        }
        return (
            <React.Fragment>
                <div className="clearfix tab-wrapper">
                    <Tab config={config} />
                    <MoreTab onClick={switchMoreTab} />
                </div>
                <div className="subTab-wrapper">
                    <SubTab subTabConfig={activeTab['subTabConfig']} />
                </div>
            </React.Fragment>
        );
    }
}

export default PlayTabs;