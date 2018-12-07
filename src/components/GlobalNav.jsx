import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

const platComponet = ['', 'mc1', 'mc2'];
@withRouter
@inject('globalStore')
@observer

class Nav extends React.Component {

    render() {
        console.log(this.props.globalStore.platformId)
        let NavComponet = Loadable({
            loader: () => import('../views/' + platComponet[this.props.globalStore.platformId] + '/nav'),
            loading: () => ''
        })
        // const { history } = this.props;
        // const noNavReg = /(^\/$)|(^\/(lottery|login|withdraw|charge|transfer|agent|voucher|personal)\/{0,1})/;//不显示导航栏的地址

        // if (noNavReg.test(history.location.pathname)) {
        //     return null;
        // }
        // only consider an event active if its event id is an odd number
        const active = (match, location) => {
            if (!match) {
                return false;
            }
            return match.url === location.pathname;
        };
        return (
            <div className="nav global-nav">
                <NavComponet active={active} />
            </div>
        );
    }
}

export default Nav;