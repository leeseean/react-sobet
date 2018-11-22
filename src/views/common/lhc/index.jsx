import React from 'react';
import LhcTop from './LhcTop.jsx';
import LhcOrder from './LhcOrder.jsx';
import LhcPlate from './LhcPlate.jsx';
import GlobalFootLogo from '../../../components/GlobalFootLogo.jsx';
import './index.styl';

const Lhc = () => {
    return (
        <div className="lhc-wrapper">
            <LhcTop/>
            <LhcPlate/>
            <LhcOrder/>
            <GlobalFootLogo/>
        </div>
    );
};

export default Lhc;