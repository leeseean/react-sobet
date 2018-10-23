import React from 'react';
import { observer, inject } from 'mobx-react';
import Loadable from 'react-loadable';
import GlobalLoading from '../components/GlobalLoading';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

@withRouter
@inject(store => ({
    routerStore: store.routerStore,
    globalStore: store.globalStore
}))
@observer
class Index extends React.Component {
    constructor(props) {
        super(props);
        // 没有super(props), 后面使用回报错 定义state bind方法 其他初始化工作
        this.props.routerStore.history = this.props.history;
        this.initTitle(this.props.history.location.pathname);
        this
            .props
            .history
            .listen((location) => {
                this.initTitle(location.pathname);
            });
    }

    initTitle(path) {
        if (path === '/' || path === '/login') {
            document.title = '摩臣 - 登陆';
        } else if (path === '/index') {
            document.title = '摩臣 - 首页';
        } else if (/^(\/lottery)/.test(path)) {
            document.title = '摩臣 - 彩票';
        } else if (/^(\/vipEvent)/.test(path)) {
            document.title = '摩臣 - Vip活动';
        } else if (/^(\/activity)/.test(path)) {
            document.title = '摩臣 - 最新活动';
        } else if (/^(\/agent)/.test(path)) {
            document.title = '摩臣 - 代理中心';
        } else if (/^(\/fish)/.test(path)) {
            document.title = '摩臣 - 捕鱼王';
        } else if (/^(\/slot)/.test(path)) {
            document.title = '摩臣 - 老虎机';
        } else if (/^(\/lhc)/.test(path)) {
            document.title = '摩臣 - 六合彩';
        } else if (/^(\/live)/.test(path)) {
            document.title = '摩臣 - 真人娱乐';
        } else if (/^(\/personal)/.test(path)) {
            document.title = '摩臣 - 个人中心';
        } else if (/^(\/poker)/.test(path)) {
            document.title = '摩臣 - 棋牌';
        } else if (/^(\/sport)/.test(path)) {
            document.title = '摩臣 - 体育';
        } else if (/^(\/register)/.test(path)) {
            document.title = '摩臣 - 注册';
        } else if (/^(\/forget)/.test(path)) {
            document.title = '摩臣 - 找回密码';
        } else {
            document.title = '摩臣';
        }
        return false;

    }

    componentWillMount() {
        // 服务器渲染的唯一hook
    }

    componentDidMount() {
        // 可以调用setState， render Component
    }

    render() {
        let platformId = this.props.globalStore.platformId;
        let platComponet = ['', 'views_mc1', 'views_mc2'];
        const RouteConfig = [
            {
                name: '登陆',
                path: '/',
                component: Loadable({
                    loader: () => import('../login'),
                    loading: GlobalLoading,
                    delay: 500
                }),
                exact: true
            },
            {
                name: '登陆',
                path: '/login',
                component: Loadable({
                    loader: () => import('../login'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '注册',
                path: '/register',
                component: Loadable({
                    loader: () => import('../views_common/register'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '忘记密码',
                path: '/forget',
                component: Loadable({
                    loader: () => import('../login/forget'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '首页',
                path: '/index',
                component: Loadable({
                    loader: () => import('../' + platComponet[platformId] + '/index'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '彩票',
                path: '/lottery',
                component: Loadable({
                    loader: () => import('../' + platComponet[platformId] + '/lottery'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '代理中心',
                path: '/agent',
                component: Loadable({
                    loader: () => import('../' + platComponet[platformId] + '/agent'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: 'Vip招待',
                path: '/vipEvent',
                component: Loadable({
                    loader: () => import('../views_common/vipEvent'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '活动页',
                path: '/activity',
                component: Loadable({
                    loader: () => import('../views_common/activity'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '捕鱼王',
                path: '/fish',
                component: Loadable({
                    loader: () => import('../views_common/fish'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '老虎机',
                path: '/slot',
                component: Loadable({
                    loader: () => import('../views_common/slot'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '六合彩',
                path: '/lhc',
                component: Loadable({
                    loader: () => import('../views_common/lhc'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '真人娱乐',
                path: '/live',
                component: Loadable({
                    loader: () => import('../views_common/live'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '个人中心',
                path: '/personal',
                component: Loadable({
                    loader: () => import('../views_common/personal'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '棋牌',
                path: '/poker',
                component: Loadable({
                    loader: () => import('../views_common/poker'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '体育',
                path: '/sport',
                component: Loadable({
                    loader: () => import('../views_common/sport'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
            {
                name: '充值',
                path: '/voucher',
                component: Loadable({
                    loader: () => import('../views_common/voucher'),
                    loading: GlobalLoading,
                    delay: 500
                })
            },
        ];

        const Routes = () => {
            //路由权限拦截
            let { location, globalStore } = this.props;
            if (location.pathname.replace('/', ',').indexOf(globalStore.agentMenu.slice()[0]) !== -1) {
                return <Redirect to={"/"} />
            }
            return RouteConfig.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact} />)
            });
        };
        return (
            <div
                className="home-wrapper"
                style={{
                    minHeight: '800px'
                }}>
                <Switch>
                    <Routes />
                    <Redirect to={"/"} />
                </Switch>
            </div>
        );
    }
}

export default Index;