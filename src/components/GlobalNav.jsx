import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './globalNav.styl';

@withRouter
class GlobalNav extends React.Component {
    render() {
        const { history } = this.props;
        if (['/login', '/', '/lottery'].indexOf(history.location.pathname) !== -1) {
            return null;
        }
        if (/^\/lottery\//.test(history.location.pathname)) {
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
                <div className="menu-wrap clearfix">
                    <div className="menu-icon fl">
                        <img src={require("../images/logo.png")} alt="logo" height="40" className="menu-icon-logo" />
                    </div>
                    <nav className="menu-nav fr">
                        <ul className="menu-ul clearfix">

                            <li className="menu-li fl">
                                <NavLink exact to="/index" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-index-icon"></i>
                                    <span className="menu-index-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/lottery" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-lottery-icon"></i>
                                    <span className="menu-lottery-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/live" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-live-icon"></i>
                                    <span className="menu-live-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/fish" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-fish-icon"></i>
                                    <span className="menu-fish-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/slot" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-slots-icon"></i>
                                    <span className="menu-slots-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/sport" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-sport-icon"></i>
                                    <span className="menu-sport-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/poker" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-poker-icon"></i>
                                    <span className="menu-poker-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/lhc" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-xglhc-icon"></i>
                                    <span className="menu-xglhc-title"></span>
                                </NavLink>
                            </li>

                            <li className="menu-li fl">
                                <NavLink exact to="/vipEvent" isActive={active} activeClassName="global-nav-on">
                                    <i className="menu-entertain-icon"></i>
                                    <span className="menu-entertain-title"></span>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default GlobalNav;