import React from 'react';
import { getSportCookie } from '../../utils/ajax';
import Cookie from 'js-cookie';
import './index.styl';

class Sport extends React.Component {
    componentDidMount() {
        getSportCookie().then(res => {
            if (res.data.success) {
                let href = '';
                if (/www/ig.test(window.location.hostname)) {
                    href = window.location.hostname.replace('www', '');
                } else {
                    href = '.' + window.location.hostname;
                }
                Cookie.set('g', res.data.data, { domain: href });
            }
        });
    }
    render() {
        return (
            <div className="sport-wrapper">
                <div className="sport-iframe-wrapper">
                    <iframe
                        src="https://mkt.gsoft-ib.com"
                        title="沙巴"
                        height="911"
                        width="1005"
                        frameBorder="no"
                        border="0"
                        marginWidth="0"
                        marginHeight="0"
                        allowtransparency="yes"
                        scrolling="no">
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Sport;