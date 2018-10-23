import React from 'react';
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router-dom'
import Loadable from 'react-loadable'

const platComponet = ['','views_mc1','views_mc2'];
@withRouter
@inject('globalStore')
@observer

class Nav extends React.Component {
    // state={
    //     nav:this.props.globalStore.platformId
    // }
    // componentWillUpdate(){
    //     this.setState({nav:this.props.globalStore.platformId})
    //    console.log('update:',this.state.nav)
    // }
    render() {
        let NavComponet =Loadable({
            loader:()=>import('../'+platComponet[this.props.globalStore.platformId]+'/nav'),
            loading:()=>''
        })
        const { history } = this.props;
        const noNavReg = /(^\/$)|(^\/(lottery|login|withdraw|charge|transfer)\/{0,1})/;//不显示导航栏的地址
        // if (['/login', '/', '/lottery'].indexOf(history.location.pathname) !== -1) {
        //     return null;
        // }
        if (noNavReg.test(history.location.pathname)) {
            return null;
        }
        // only consider an event active if its event id is an odd number
        const active = (match, location) => {
            if (!match) {
                return false;
            }
            return match.url === location.pathname;
        };
        return (
            <div className="nav global-nav">
                <NavComponet active={active}/>
            </div>
        );
    }
}

export default Nav;