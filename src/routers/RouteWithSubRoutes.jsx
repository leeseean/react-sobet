import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

class RouteWithSubRoutes extends React.Component{
    render() {
        const SubRoutes = () => {
            let routePage = this.props.routes.map((route,index)=>{
                return (
                    <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                )
            })
            return (
                <Switch>
                    {routePage}
                    <Redirect to="/page404" />
                </Switch>
            )
        }
        return (
            <SubRoutes />
        )
    }
}

export default RouteWithSubRoutes;