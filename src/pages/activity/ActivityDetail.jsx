/**
 * Created by Orange on 2018-10-04 16:37:24.
 */

import React from 'react';
import Countdown from '../../components/Countdown';
import { queryActivityById } from '../../utils/ajax';
import './activityDetail.styl';

class ActivityDetail extends React.Component {
    state = {
        detailObj: {
            "id": 106,
            "activityTitle": "投注送性吧VIP",
            "activityTitleSecond": "流水兑换性吧VIP资格，名额有限先到先得",
            "startTime": "2017-09-05 23:46:28",
            "endTime": "2018-12-31 23:59:59",
            "imagePath": "/static/image/preadmin/upload/362/1518728247548.jpg",
            "activityType": 2,
            "diffTime": "7626048640",
            "frontImagePath": "/static/image/preadmin/upload/362/1518728361979.jpg",
            "isjoined": "1",
            "limitRebate": 0,
            "gamename": "彩票",
            "availableApply": 0,
            "activityConfigs": null,
            "applyBonusMaxTimes": 0,
            "applyBonusInterVal": 0,
            "isdel": null,
            "toThumbnail": 1,
            "thumbnailPath": "/static/image/preadmin/upload/362/1504626329433.jpg"
        }
    }
    queryActivityById = () => {
        const { id } = this.props.match.param;
        queryActivityById({ id }).then(res => {
            if (res.data.code === 0) {
                this.setState({
                    detailObj: res.data.result
                });
            }
        });
    }
    componentDidMount() {
        this.queryActivityById();
    }
    render() {
        const { activityTitle, startTime, endTime, gamename, frontImagePath, diffTime } = this.state.detailObj;
        const day = Math.floor(Number(diffTime) / 1000 / 60 / 60 / 24);
        const countTime = Number(diffTime) - day * 24 * 60 * 60;
        return (
            <div className="activity-detail-wrapper">
                <div className="activity-detail-header">
                    <a className="recent-activity" href="">最新优惠</a>正文
                </div>
                <div className="activity-detail-content">
                    <h3>{activityTitle}</h3>
                    <p>
                        <span>开始时间：<em>{startTime}</em></span>
                        <span>结束时间：<em>{endTime}</em></span>
                        <span>活动类型：<em>日返水</em></span>
                        <span>游戏类型：<em>{gamename}</em></span>
                    </p>
                    <div>
                        <img src={frontImagePath} alt="" width="1134" height="1329" />
                    </div>
                    <div className="count-down-wrapper">
                        <p>活动倒计时：</p>
                        <p>
                            <em className="count-down-day">{day}天</em>
                            <Countdown className="count-down-time" count={countTime} />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityDetail;