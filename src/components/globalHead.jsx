import React from 'react';
import {inject, observer} from 'mobx-react';
import Countdown from './Countdown';

@inject('loginStore')
@observer
class GlobalHead extends React.Component {
    render() {
        const {loginStore} = this.props;
        if (!loginStore.logined) {
            return (
                <div></div>
            );
        }
        return (
            <div
                className="center"
                style={{
                backgroundColor: '#252525',
                color: 'white'
            }}>
                公共头部
                <Countdown count="10" callback={() => console.log('countdown')} />
            </div>
        );
    }
}

export default GlobalHead;