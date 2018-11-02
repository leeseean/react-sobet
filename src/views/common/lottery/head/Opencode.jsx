/**
 * Created by Orange on 2018-11-01 18:17:19.
 **/

import React from 'react';

class Opencode extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.opencodeArr !== this.props.opencodeArr) {//只更新奖号时更新
            return true;
        }
        return false;
    }
    render() {
        const { opencodeArr, lotteryType, lotteryCode } = this.props;
        return opencodeArr.map((v, i) => {
            switch (lotteryType) {
                case 'ssc':
                case '3d':
                case '11x5':
                    return <span key={Date.now() + i} className="opencode bounceInDown">{v}</span>;
                case 'k3':
                    return <span key={Date.now() + i} className="opencode bounceInDown" code={v} lottery-type={lotteryType} lottery-code={lotteryCode}></span>;
                case 'pk10':
                    return <span key={Date.now() + i} className="opencode bounceInRight" code={v} lottery-type={lotteryType} lottery-code={lotteryCode}></span>;
                case 'lhc':
                    return <span key={Date.now() + i} className={`opencode bounceInRight ${i === opencodeArr.length - 1 ? 'tm' : ''}`} code={v} lottery-type={lotteryType}></span>;
                default:
                    return <span key={Date.now() + i} className="opencode bounceInDown" lottery-type={lotteryType} lottery-code={lotteryCode}>{v}</span>;
            }
        });
    }
}

export default Opencode;