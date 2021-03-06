/**
 * Created by Orange on 2018-10-04 15:29:03.
 */

import React from 'react';
import './index.styl';
import ActivityDetail from './ActivityDetail';
import ActivityList from './ActivityList';
import { Route } from 'react-router-dom';
import GlobalFootLogo from '../../../components/GlobalFootLogo'

class Activity extends React.Component {
    
    render() {
        const { match } = this.props;
        return (
            <div className="activity-wrapper">
                <Route
                    exact={true}
                    path={`${match.url}/list`}
                    component={ActivityList}
                />
                <Route
                    exact={true}
                    path={`${match.url}/list/:id`}
                    component={ActivityDetail}
                />
                <GlobalFootLogo/>
            </div>
        );
    }
}

export default Activity;