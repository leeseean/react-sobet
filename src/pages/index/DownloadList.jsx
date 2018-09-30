import React from 'react';

class DownloadList extends React.Component {
    render() {
        return (
            <ul className="download fr">
                <li className="guaji"><a href="https://download.volocn.com/static/client/mcbet/mochenbet.zip">
                    <div className="down-logo fl"></div>
                    <div className="txt fl">
                        <div className="text-icon"></div><i className="down-icon">点击下载</i>
                    </div>
                </a></li>
                <li className="weixin"><a href="https://download.volocn.com/static/client/Wproject/mcwebet.zip">
                    <div className="down-logo fl"></div>
                    <div className="txt fl">
                        <div className="text-icon"></div><i className="down-icon">点击下载</i>
                    </div>
                </a></li>
                <li className="ksdlq"><a href="https://download.volocn.com/static/client/linepublisher/摩臣登录器.exe">
                    <div className="down-logo fl"></div>
                    <div className="txt fl">
                        <div className="text-icon"></div><i className="down-icon">点击下载</i>
                    </div>
                </a></li>
            </ul>
        );
    }
}

export default DownloadList;