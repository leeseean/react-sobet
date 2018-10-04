/**
 * Created by Orange on 2018-10-04 17:32:28.
 */

import React from 'react';
import Countdown from '../../components/Countdown';
import { queryCurrentActivity } from '../../utils/ajax';

class ActivityList extends React.Component {
    state = {
        data: [{
            "id": 111,
            "activityTitle": "注册送大礼包",
            "activityTitleSecond": "新开户即送8元注册金",
            "startTime": "2018-08-15 23:49:09",
            "endTime": "2018-11-30 23:59:59",
            "imagePath": "",
            "activityType": 2,
            "diffTime": "4955970622",
            "frontImagePath": "/static/image/preadmin/upload/362/1534345851814.jpg",
            "isjoined": "1",
            "limitRebate": 0,
            "gamename": "全部",
            "availableApply": 0,
            "activityConfigs": null,
            "applyBonusMaxTimes": 0,
            "applyBonusInterVal": 0,
            "isdel": null,
            "toThumbnail": 1,
            "thumbnailPath": "/static/image/preadmin/upload/362/1534345864613.jpg"
        }, {
            "id": 106,
            "activityTitle": "投注送性吧VIP",
            "activityTitleSecond": "流水兑换性吧VIP资格，名额有限先到先得",
            "startTime": "2017-09-05 23:46:28",
            "endTime": "2018-12-31 23:59:59",
            "imagePath": "/static/image/preadmin/upload/362/1518728247548.jpg",
            "activityType": 2,
            "diffTime": "7634370622",
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
        }]
    }
    queryCurrentActivity = () => {
        queryCurrentActivity().then(res => {
            if (res.data.code === 0) {
                this.setState({
                    data: res.data.result.entities
                });
            }
        });
    }
    componentDidMount() {
        this.queryCurrentActivity();
    }
    render() {
        const Item = ({ item }) => {
            const { id, activityTitle, frontImagePath, diffTime, isjoined } = item;
            const day = Math.floor(Number(diffTime) / 1000 / 60 / 60 / 24);
            const countTime = Number(diffTime) - day * 24 * 60 * 60;
            return (
                <div key={id} className="fl activity-item">
                    <a href={`/activity/list/${id}`}>
                        <img src={`http://www.mc188.com${frontImagePath}`} width="392" height="236" alt="" />
                        {
                            isjoined === '1' ? <img className="activity-ycj" width="38" height="62" src={require('../../images/activity/ycj.png')} alt="" /> : null
                        }
                    </a>
                    <div className="activity-title">{activityTitle}</div>
                    <div className="clearfix activity-countdown">
                        <div className="fl">
                            活动倒计时：
                            <em className="count-down-day">{day}天</em>
                            <Countdown className="count-down-time" count={countTime} />
                        </div>
                        <div className="fr">
                            <a href={`/activity/list/${id}`} className="activity-view-detail">查看详情</a>
                        </div>
                    </div>
                </div>
            );
        };
        const List = ({ data }) => {
            return data.map(item => {
                return <Item key={item.id} item={item} />
            });
        };
        return (
            <div className="activity-main">
                <List data={this.state.data} />
            </div>
        );
    }
}

export default ActivityList;