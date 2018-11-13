/**
 * Created by Conrad on 2018-10-24.
 */
import React from 'react';
import { observer, inject } from 'mobx-react';
import Loadable from 'react-loadable';
import GlobalLoading from '../components/GlobalLoading';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

@withRouter
@inject(store=>({
    routerStore:store.routerStore,
}))
@observer
class PersonalRouter extends React.Component {
    constructor(props) {
        super(props);
        // 没有super(props), 后面使用回报错 定义state bind方法 其他初始化工作
        this.props.routerStore.history = this.props.history;
    }
    render() {
        const match = this.props.match;
        const RouteConfig = [
            {
                name: '游戏记录',
                path: `${match.url}/game/:type`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Game'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '交易记录',
                path: `${match.url}/trade/:type`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Trade'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '消息管理',
                path: `${match.url}/letter`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Letter'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '账号管理',
                path: `${match.url}/account/:type`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Account'),
                    loading: GlobalLoading,
                    delay: 500
                })
            }
        ];
        const Routes = () => {
            return RouteConfig.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact} 
                    />
                )
            });
        };
        return (
            <Switch>
                <Routes />
                <Redirect to={"/"} />
            </Switch>
        );
    }
}

export default PersonalRouter;