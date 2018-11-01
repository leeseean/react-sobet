/**
 * Created by Orange on 2018-11-01 18:17:19.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore')
@observer
class Opencode extends React.Component {
    render() {
        console.log(this.props)
        const { codeArr, lotteryType, lotteryCode } = this.props.lotteryStore;
        return codeArr.map((v, i) => {
            switch (lotteryType) {
                case 'ssc':
                case '3d':
                case '11x5':
                    return <span key={i} className="opencode bounceInDown">{v}</span>;
                case 'k3':
                case 'pk10':
                    return <span key={i} className="opencode bounceInRight" code={v} lottery-type={lotteryType}></span>;
                case 'lhc':
                    return <span key={i} className={`opencode bounceInRight ${i === codeArr.length - 1 ? 'tm' : ''}`} code={v} lottery-type={lotteryType}></span>;
                default:
                    return <span key={i} className="opencode bounceInDown" lottery-type={lotteryType} lottery-code={lotteryCode}>{v}</span>;
            }
        });
    }
}

export default Opencode;