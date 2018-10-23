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
        // 没有super(props), 后面使用回报错 定义state bind方法 其他初始化工作
        this.props.routerStore.history = this.props.history;
       
    }

    componentWillMount() {
        // 服务器渲染的唯一hook
    }

    componentDidMount() {
        // 可以调用setState， render Component
    }
    render() {
        const platformId = this.props.globalStore.platformId;
        const platComponet = ['','views_mc1','views_mc2'];
        const match = this.props.match;
        const RouteConfig = [
            {
                name: '团队报表',
                path: `${match.url}/teamReport`,
                component: Loadable({
                    loader: () => import('../views_common/agent/teamReport'),
                    loading: GlobalLoading,
                    delay: 500
                }),
                routes:[
                    {
                        name:'彩票',
                        path:`${match.url}/teamReport/lotteryReport`,
                        component:Loadable({
                            loader: () => import('../views_common/agent/teamReport/lotteryReport'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    },
                    {
                        name:'AG游戏',
                        path:`${match.url}/teamReport/agGame`,
                        component:Loadable({
                            loader: () => import('../views_common/agent/teamReport/agGame'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    },
                    {
                        name:'PT游戏',
                        path:`${match.url}/teamReport/ptGame`,
                        component:Loadable({
                            loader: () => import('../views_common/agent/teamReport/ptGame'),
                            loading: GlobalLoading,
                            delay: 500
                        })
                    }
                ],
                
            },
            {
                name: '日度报表',
                path: `${match.url}/dayReport`,
                component: Loadable({
                    loader: () => import('../views_common/agent/dayReport'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '游戏记录',
                path: `${match.url}/gameRecord`,
                component: Loadable({
                    loader: () => import('../views_common/agent/gameRecord'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '彩票分红',
                path: `${match.url}/bouns`,
                component: Loadable({
                    loader: () => import('../'+platComponet[platformId]+'/agent/bouns'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '私返协议',
                path: `${match.url}/private`,
                component: Loadable({
                    loader: () => import('../'+platComponet[platformId]+'/agent/private'),
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