import React from 'react';
import {withRouter} from 'react-router-dom';
import './rightFixed.css';
import BackToTop from './backToTop';

@withRouter
class RightFixed extends React.PureComponent {
    render() {
        const {history} = this.props;
        if (['/', '/login', '/register'].indexOf(history.location.pathname) !== -1) {
          return null;
        }
        return (
            <div className="right-fixed" ref={this.props.rightFixedRef}>
                <div className="day-sign">
                    <a
                        href="/static/activity/sign/sign.html"
                        target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
                <div className="group-btn">
                    <div className="chat-msg toChat">
                        <a href="javascript:void(0);">
                            <div className="chat-msg-icon">
                                <div className="chat-tip-dot"></div>
                            </div>
                            <div className="chat-msg-title">
                                消息
                            </div>
                        </a>
                    </div>
                    <div className="customer-service">
                        <a
                            href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&amp;configID=3127&amp;jid=5379036822&amp;s=1"
                            target="_blank"
                            >
                            <div className="customer-service-icon"></div>
                            <div className="customer-service-title">
                                客服
                            </div>
                        </a>
                    </div>
                    <div className="line-switch">
                        <a href="/static/sobet/speed.html" target="_blank">
                            <div className="line-switch-icon"></div>
                            <div className="line-switch-title">
                                线路
                            </div>
                        </a>
                    </div>
                    <div className="help-link">
                        <a
                            href="/static/sobet/helper-center.html"
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="help-link-icon"></div>
                            <div className="help-link-title">
                                帮助
                            </div>
                        </a>
                    </div>
                </div>
                <BackToTop/>
            </div>
        );
    }
}

export default RightFixed;