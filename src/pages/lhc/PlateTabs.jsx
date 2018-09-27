import React from 'react';
import { inject, observer } from 'mobx-react';
import { Tabs } from 'antd';
import SubTabs from './SubTabs';

const TabPane = Tabs.TabPane;

@inject('xglhcStore')
@observer
class PlateTabs extends React.Component {
    render() {
        const { tabChange, config } = this.props.xglhcStore;
        return (
            <Tabs defaultActiveKey="0" animated={false} onChange={tabChange}>
                {config.map((item, index) => {
                    return (
                        <TabPane tab={item.tab} key={index}>
                            <SubTabs subConfig={item.sub} />
                        </TabPane>
                    );
                })}
            </Tabs>
        );
    }
}

export default PlateTabs;