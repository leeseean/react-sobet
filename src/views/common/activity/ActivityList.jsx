/**
 * Created by Orange on 2018-10-04 17:32:28.
 */

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import Countdown from '../../../components/Countdown';
import { queryCurrentActivity } from '../../../utils/ajax';

@inject(stores => ({
    platformId: stores.globalStore.platformId
}))
@observer
class ActivityList extends React.Component {
    state = {
        data: []
    }
    queryCurrentActivity = () => {
        const { platformId } = this.props;
        queryCurrentActivity({ platformId }).then(res => {
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
            const countTime = Number(diffTime) - day * 24 * 60 * 60 * 1000;
            return (
                <div key={id} className="fl activity-item">
                    <Link to={`/activity/list/${id}`}>
                        <img src={`http://www.mc188.com${frontImagePath}`} width="392" height="236" alt="" />
                        {
                            isjoined === '1' ? <img className="activity-ycj" width="38" height="62" src={require('../../../images/activity/ycj.png')} alt="" /> : null
                        }
                    </Link>
                    <div className="activity-title">{activityTitle}</div>
                    <div className="clearfix activity-countdown">
                        <div className="fl">
                            活动倒计时：
                            <em className="count-down-day">{day}天</em>
                            <Countdown className="count-down-time" count={Date.now() + countTime} />
                        </div>
                        <div className="fr">
                            <Link to={`/activity/list/${id}`} className="activity-view-detail">查看详情</Link>
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