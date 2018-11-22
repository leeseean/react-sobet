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
    globalStore:store.globalStore
}))
@observer
class VoucherRouter extends React.Component {
    constructor(props) {
        super(props);
        // 没有super(props), 后面使用回报错 定义state bind方法 其他初始化工作
        this.props.routerStore.history = this.props.history;
       
    }
    render() {
        const match = this.props.match;
        const RouteConfig = [
            {
                name: '充值',
                path: `${match.url}/charge`,
                component: Loadable({
                    loader: () => import('../views/common/voucher/charge'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '转账',
                path: `${match.url}/transfer`,
                component: Loadable({
                    loader: () => import('../views/common/voucher/transfer'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '提现',
                path: `${match.url}/withdraw`,
                component: Loadable({
                    loader: () => import('../views/common/voucher/withdraw'),
                    loading: GlobalLoading,
                    delay: 500
                })
            }
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
                    <Redirect to={"/page404"} />
                </Switch>
            )
        };
        return (
            <Routes />
        );
    }
}

export default VoucherRouter;