import React from 'react';
import {Tabs} from 'antd';
import config from './lhcConfig';

const TabPane = Tabs.TabPane;

const tabObj = config['XGLHC']['ltTab'];
const keysOfTabObj = Object.keys(tabObj);
const methodObj = config['XGLHC']['ltMethod'];

class SubTabs extends React.Component {
    subTabChange = (key) => {
        console.log(key);
    }
    render() {
        const subObj = methodObj[this.props.field];
        const subKeys =  Object.keys(subObj);
        return (
            <div className="sub-tabs">
                {
                    subKeys.map(key => {
                        const InnerMethodObj = subObj[key];
                        const methodFields = Object.keys(InnerMethodObj['method']);
                        return (
                            <div className="clearfix sub-tab-wrapper">
                                <div className="fl sub-tab-title">{InnerMethodObj['title']}</div>
                                <div className="fl">
                                    <Tabs defaultActiveKey={methodFields[0]} onChange={this.subTabChange}>
                                        {methodFields.map(fld => {
                                            return (
                                                <TabPane tab={InnerMethodObj['method'][fld]['name']} field={fld} key={fld}>{InnerMethodObj['method'][fld]['name']}</TabPane>
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
            <Tabs defaultActiveKey={keysOfTabObj[0]} onChange={this.tabChange}>
                {keysOfTabObj.map(key => {
                    return (
                        <TabPane tab={tabObj[key]} field={key} key={key}>
                            <SubTabs field={key}/>
                            {/* <TabContent field={key}/> */}
                        </TabPane>
                    );
                })}
            </Tabs>
        );
    }
};

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