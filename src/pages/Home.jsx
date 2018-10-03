import React from 'react';
import { observer, inject } from 'mobx-react';
import Loadable from 'react-loadable';
import GlobalLoading from '../components/GlobalLoading';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const RouteConfig = [
    {
        path: '/',
        component: Loadable({
            loader: () => import('./login/Login'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '登陆页',
        exact: true
    }, {
        path: '/index',
        component: Loadable({
            loader: () => import('./index/Index'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '首页'
    }, {
        path: '/lottery',
        component: Loadable({
            loader: () => import('./lottery/Lottery'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '彩票'
    }, {
        path: '/activity',
        component: Loadable({
            loader: () => import('./activity/Activity'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '活动页'
    }, {
        path: '/agent',
        component: Loadable({
            loader: () => import('./agent/Agent'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '代理中心'
    }, {
        path: '/fish',
        component: Loadable({
            loader: () => import('./fish/Fish'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '捕鱼王'
    }, {
        path: '/slot',
        component: Loadable({
            loader: () => import('./slot/Slot'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '老虎机'
    }, {
        path: '/lhc',
        component: Loadable({
            loader: () => import('./lhc/Lhc'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '六合彩'
    }, {
        path: '/live',
        component: Loadable({
            loader: () => import('./live/Live'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '真人娱乐'
    }, {
        path: '/personal',
        component: Loadable({
            loader: () => import('./personal/Personal'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '个人中心'
    }, {
        path: '/poker',
        component: Loadable({
            loader: () => import('./poker/Poker'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '棋牌'
    }, {
        path: '/sport',
        component: Loadable({
            loader: () => import('./sport/Sport'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '体育'
    }, {
        path: '/login',
        component: Loadable({
            loader: () => import('./login/Login'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '登陆'
    }, {
        path: '/register',
        component: Loadable({
            loader: () => import('./register/Register'),
            loading: GlobalLoading,
            delay: 500
        }),
        name: '注册'
    }
];

@withRouter
@inject("routerStore")
@observer
class Home extends React.Component {
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
        switch (path) {
            case '/':
            case '/login':
                document.title = '登陆';
                break;
            case '/index':
                document.title = '首页';
                break;
            case '/lottery':
                document.title = '彩票';
                break;
            case '/activity':
                document.title = 'Vip活动';
                break;
            case '/agent':
                document.title = '代理中心';
                break;
            case '/fish':
                document.title = '捕鱼王';
                break;
            case '/slot':
                document.title = '老虎机';
                break;
            case '/lhc':
                document.title = '六合彩';
                break;
            case '/live':
                document.title = '真人娱乐';
                break;
            case '/personal':
                document.title = '个人中心';
                break;
            case '/poker':
                document.title = '棋牌';
                break;
            case '/sport':
                document.title = '体育';
                break;
            case '/login':
                document.title = '登陆';
                break;
            case '/register':
                document.title = '注册';
                break;
            default:
                break;
        }
    }

    componentWillMount() {
        // 服务器渲染的唯一hook
    }

    componentDidMount() {
        // 可以调用setState， render Component
    }

    render() {
        const Routes = () => {
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

export default Home;