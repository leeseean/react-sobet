/**
 * Created by Orange on 2018-10-04 15:29:03.
 */

import React from 'react';
import './activity.styl';
import ActivityDetail from './ActivityDetail';
import ActivityList from './ActivityList';
import { Route } from 'react-router-dom';

class Activity extends React.Component {
    
    render() {
        const { match } = this.props;
        return (
            <div className="activity-wrapper">
                <Route
                    exact
                    path={`${match.url}/list`}
                    component={ActivityList}
                />
                <Route
                    exact
                    path={`${match.url}/:id`}
                    component={ActivityDetail}
                />
            </div>
        );
    }
}

export default Activity;