import React from 'react';
import {Switch,Route} from 'react-router-dom';

class RouteWithSubRoutes extends React.Component{
    render() {
        const SubRoutes = () => {
            return this.props.routes.map((route,index)=>{
                return (
                    <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                )
            })  
        }
        return (
            <Switch>
                <SubRoutes />
            </Switch>
        )
    }
}

export default RouteWithSubRoutes;