import React from 'react';
import './activity.styl';

const Activity = () => {
    return (
        <div id="event">
            <div className="event-banner">
                <div className="inner"><img alt="" src={require("../../images/vipEvent/logo.png")}/></div>
            </div>
            <ul className="event-content">
                <li className="event-new">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="detail fr">
                                <a href="javascript:;" target="_blank"><img alt="" width="893" src={require("../../images/vipEvent/event-new.png")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="event-6">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="title fl">
                                <a href="/thailand/EVENT_6.html" target="_blank">
                                    <h2>
                                        <i></i>周年庆VIP宝岛游</h2>
                                </a>
                                <p>第Ⅵ期</p>
                            </div>
                            <div className="detail fr">r
                                <a href="/thailand/EVENT_6.html" target="_blank"><img alt="" width="558" src={require("../../images/vipEvent/event6-banner.jpg")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="event-5">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="title fl">
                                <a href="/thailand/activity_vietnam.html" target="_blank">
                                    <h2>
                                        <i></i>越南豪华四日游</h2>
                                </a>
                                <p>第Ⅴ期</p>
                            </div>
                            <div className="detail fr">
                                <a href="/thailand/activity_vietnam.html" target="_blank"><img alt="" width="558" src={require("../../images/vipEvent/event5-banne.jpg")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="event-4">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="title fl">
                                <a href="/thailand/activity_maylaysia.html" target="_blank">
                                    <h2>
                                        <i></i>魅力大马嘉年华</h2>
                                </a>
                                <p>第Ⅳ期</p>
                            </div>
                            <div className="detail fr">
                                <a href="/thailand/activity_maylaysia.html" target="_blank"><img alt="" width="558" src={require("../../images/vipEvent/event4-banne.png")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="event-3">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="title fl">
                                <a href="/thailand/activity_tw.html" target="_blank">
                                    <h2>
                                        <i></i>宝岛台湾狂欢之旅</h2>
                                </a>
                                <p>第Ⅲ期</p>
                            </div>
                            <div className="detail fr">
                                <a href="/thailand/activity_tw.html" target="_blank"><img alt="" width="558" src={require("../../images/vipEvent/event3-banne.png")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="event-2">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="title fl">
                                <a href="/thailand/index_2.html" target="_blank">
                                    <h2>
                                        <i></i>泰国普吉岛奢华旅</h2>
                                </a>
                                <p>第Ⅱ期</p>
                            </div>
                            <div className="detail fr">
                                <a href="/thailand/index_2.html" target="_blank"><img alt="" width="558" src={require("../../images/vipEvent/event2-banne.png")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="event-1">
                    <div className="inner clearfix">
                        <div className="fr clearfix">
                            <div className="title fl">
                                <a href="/thailand" target="_blank">
                                    <h2>
                                        <i></i>泰国激情三日豪华行</h2>
                                </a>
                                <p>第Ⅰ期</p>
                            </div>
                            <div className="detail fr">
                                <a href="/thailand" target="_blank"><img alt="" width="558" src={require("../../images/vipEvent/event1-banner.png")}/></a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Activity;