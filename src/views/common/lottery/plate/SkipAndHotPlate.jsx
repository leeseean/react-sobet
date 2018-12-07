/**
 * Created by Orange on 2018-11-30 10:48:31.
 **/

import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('lotteryStore')
@observer
class SkipAndHotPlate extends React.Component {
  render() {
    const { hotShowFlag, missShowFlag, hitFrequency, skipFrequency } = this.props.lotteryStore;
    const { pos, idx } = this.props;
    const hitToPos = pos.length - hitFrequency.length;
    const skipToPos = pos.length - skipFrequency.length;
    const HitSkipNums = ({ arr, type }) => {
      return arr.map((n, i) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr);
        if (n === max) {
          return <div key={i} className="fl hot-skip-num max" type={type}>{n}</div>;
        }
        if (n === min) {
          return <div key={i} className="fl hot-skip-num min" type={type}>{n}</div>;
        }
        return <div key={i} className="fl hot-skip-num" type={type}>{n}</div>;
      });
    };
    return (
      <React.Fragment>
        {(missShowFlag && skipFrequency && skipFrequency.length > 0) ? (<div className="clearfix hot-skip-item">
          <div className="fl hot-skip-title"><span className="title">遗漏</span></div>
          <div className="fl clearfix hot-skip-nums">
            <HitSkipNums arr={skipFrequency[skipToPos + idx]} type="skip" />
          </div>
        </div>) : null}
        {(hotShowFlag && hitFrequency && hitFrequency.length > 0) ? (
          <div className="clearfix hot-skip-item">
            <div className="fl hot-skip-title"><span className="title">冷热</span></div>
            <div className="fl clearfix hot-skip-nums">
              <HitSkipNums arr={hitFrequency[hitToPos + idx]} type="hot" />
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default SkipAndHotPlate;