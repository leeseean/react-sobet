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
class AgentRouter extends React.Component {
    constructor(props) {
        super(props);
        this.props.routerStore.history = this.props.history;
    }
    render() {
        const platformId = this.props.globalStore.platformId;
        const platComponet = ['','mc1','mc2'];
        const match = this.props.match;
        const RouteConfig = [
            {
                name: '团队报表',
                path: `${match.url}/teamReport/:type`,
                component: Loadable({
                    loader: () => import('../views/common/agent/teamReport'),
                    loading: GlobalLoading,
                    delay: 500
                }),
                routes:[
                    {
                        name:'彩票',
                        path:`${match.url}/teamReport/lottery`,
                        component:Loadable({
                            loader: () => import('../views/common/agent/teamReport/Lottery'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    },
                    {
                        name:'AG游戏',
                        path:`${match.url}/teamReport/agGame`,
                        component:Loadable({
                            loader: () => import('../views/common/agent/teamReport/AgGame'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    },
                    {
                        name:'PT游戏',
                        path:`${match.url}/teamReport/ptGame`,
                        component:Loadable({
                            loader: () => import('../views/common/agent/teamReport/PtGame'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    }
                ],
            },
            {
                name: '日度报表',
                path: `${match.url}/dailyReport`,
                component: Loadable({
                    loader: () => import('../views/common/agent/dailyReport'),
                    loading: GlobalLoading,
                    delay: 500
                }),
                routes:[
                    {
                        name:'彩票',
                        path:`${match.url}/dailyReport/lottery`,
                        component:Loadable({
                            loader: () => import('../views/common/agent/dailyReport/Lottery'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    },
                    {
                        name:'AG游戏',
                        path:`${match.url}/dailyReport/agGame`,
                        component:Loadable({
                            loader: () => import('../views/common/agent/dailyReport/AgGame'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    },
                    {
                        name:'PT游戏',
                        path:`${match.url}/dailyReport/ptGame`,
                        component:Loadable({
                            loader: () => import('../views/common/agent/dailyReport/PtGame'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    }
                ],
            },
            {
                name: '游戏记录',
                path: `${match.url}/gameRecord`,
                component: Loadable({
                    loader: () => import('../views/common/agent/gameRecord'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '彩票分红',
                path: `${match.url}/lotteryBonus`,
                component: Loadable({
                    loader: () => import('../views/'+platComponet[platformId]+'/agent/lotteryBonus'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '日工资管理',
                path: `${match.url}/dailySalary`,
                component: Loadable({
                    loader: () => import('../views/'+platComponet[platformId]+'/agent/dailySalary'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '私返管理',
                path: `${match.url}/privateMgr`,
                component: Loadable({
                    loader: () => import('../views/'+platComponet[platformId]+'/agent/private'),
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
                        render={(props)=>{
                                return <route.component {...props} routes={route.routes}/>
                            }
                        }
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

export default AgentRouter;