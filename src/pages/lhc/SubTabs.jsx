import React from 'react';
import { inject, observer } from 'mobx-react';
import { Tabs } from 'antd';
import SwitchOdd from './SwitchOdd';
import PlateContent from './PlateContent';
import PlateBottom from './PlateBottom';

const TabPane = Tabs.TabPane;

@inject('xglhcStore')
@observer
class SubTabs extends React.Component {
    render() {
        const { changeMethod } = this.props.xglhcStore;
        const subConfig = this.props.subConfig;
        return (
            <div className="sub-tabs">
                {subConfig.map((subItem, index) => {
                    const list = subItem.list;
                    const ExtraContent = <div className="sub-tab-title">{subItem['title']}</div>;
                    return (
                        <div className="sub-tab-wrapper" key={index}>
                            <Tabs
                                defaultActiveKey={list[0]['method']}
                                animated={false}
                                onChange={changeMethod}
                                tabBarExtraContent={ExtraContent}>
                                {list.map(item => {
                                    return (
                                        <TabPane tab={item['cnMethod']} key={item['method']}>
                                            <SwitchOdd />
                                            <PlateContent />
                                            <PlateBottom />
                                        </TabPane>
                                    );
                                })}
                            </Tabs>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SubTabs;