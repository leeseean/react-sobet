import React from 'react';
import LhcTop from './LhcTop';
import LhcOrder from './LhcOrder';
import LhcPlate from './LhcPlate';
import GlobalFootLogo from '../../../components/GlobalFootLogo'
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