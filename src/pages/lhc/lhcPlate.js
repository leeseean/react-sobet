import React from 'react';
import {Tabs, Icon, Radio} from 'antd';
import config from './lhcConfig';

const TabPane = Tabs.TabPane;


class SwitchOdd extends React.Component {
    changeOdd = (event) => {
        console.log(event);
    }
    render() {
        return (
            <div className="switch-odd-wrapper">
                <Icon type="question-circle" theme="filled" style={{color: 'orange'}} />
                <span className="switch-odd-title">玩法说明</span>
                <Radio.Group className="switch-odd-tabs" defaultValue="A" buttonStyle="solid" onChange={this.changeOdd}>
                    <Radio.Button value="A">A面</Radio.Button>
                    <Radio.Button value="B">B面</Radio.Button>
                </Radio.Group>
                <span className="switch-odd-detail">（A面：高奖金，投注返点0%；B面：正常奖金，投注返点4%）</span>
            </div>
        );
    }
}

class SubTabs extends React.Component {
    subTabChange = (key) => {
        console.log(key);
    }
    render() {
        const subConfig = this.props.subConfig;
        return (
            <div className="sub-tabs">
                {
                    subConfig.map((subItem, index) => {
                        const list = subItem.list;
                        return (
                            <div className="clearfix sub-tab-wrapper" key={index}>
                                <div className="fl sub-tab-title">{subItem['title']}</div>
                                <div className="fl">
                                    <Tabs defaultActiveKey={list[0]['method']} animated={false} onChange={this.subTabChange}>
                                        {list.map(item => {
                                            return (
                                                <TabPane tab={item['cnMethod']} field={item['method']} key={item['method']}>
                                                    <SwitchOdd/>
                                                </TabPane>
                                            );
                                        })}
                                    </Tabs>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

class PlateTabs extends React.Component {
    tabChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <Tabs defaultActiveKey="0" animated={false} onChange={this.tabChange}>
                {config.map((item, index) => {
                    return (
                        <TabPane tab={item.tab} key={index}>
                            <SubTabs subConfig={item.sub}/>
                        </TabPane>
                    );
                })}
            </Tabs>
        );
    }
}

class LhcPlate extends React.Component {
    render() {
        return (
            <div className="lhc-plate-wrapper">
                <div className="lhc-plate-tabs">
                    <PlateTabs/>
                </div>
            </div>
        );
    }
}

export default LhcPlate;