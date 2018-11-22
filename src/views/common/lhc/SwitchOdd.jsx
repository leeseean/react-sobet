import React from 'react';
import { inject, observer } from 'mobx-react';
import { Icon, Radio } from 'antd';
import tipConfig from './lhcTip.js';
import SwitchOddDetail from './SwitchOddDetail.jsx';

@inject('lhcStore')
@observer
class SwitchOdd extends React.Component {
    render() {
        const { switchOddType, method, lotteryType } = this.props.lhcStore;
        return (
            <div className="switch-odd-wrapper">
                <Icon
                    type="question-circle"
                    title={tipConfig[lotteryType][method]['title']}
                    theme="filled"
                    style={{
                        color: 'orange',
                        cursor: 'pointer'
                    }} />
                <span className="switch-odd-title">玩法说明</span>
                <Radio.Group
                    className="switch-odd-tabs"
                    defaultValue="A"
                    buttonStyle="solid"
                    onChange={switchOddType}>
                    <Radio.Button value="A">A面</Radio.Button>
                    <Radio.Button value="B">B面</Radio.Button>
                </Radio.Group>
                <SwitchOddDetail />
            </div>
        );
    }
}

export default SwitchOdd;