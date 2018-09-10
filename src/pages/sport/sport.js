import React from 'react';
import './sport.css';

const Sport = () => {
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
};

export default Sport;