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
                name: '资金管理',
                path: `${match.url}/voucher/:type`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Voucher'),
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
                name: '投注记录',
                path: `${match.url}/game/:type`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Game'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '盈亏统计',
                path: `${match.url}/profit`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Profit'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '账号设置',
                path: `${match.url}/account/:type`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Account'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '银行卡管理',
                path: `${match.url}/setbank`,
                component: Loadable({
                    loader: () => import('../views/common/personal/SetBank'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '系统消息',
                path: `${match.url}/letter`,
                component: Loadable({
                    loader: () => import('../views/common/personal/Letter'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
        ];
        const Routes = () => {
            let routePage = RouteConfig.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact} 
                    />
                )
            });
            return (
                <Switch>
                    {routePage}
                    <Redirect to="/page404" />
                </Switch>
            )
        };
        return (
            <Routes />
        );
    }
}

export default PersonalRouter;