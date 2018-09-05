import React from 'react';
import {inject, observer} from 'mobx-react';

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
            </div>
        );
    }
}

export default GlobalHead;