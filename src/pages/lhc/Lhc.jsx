import React from 'react';
import LhcTop from './LhcTop';
import LhcOrder from './LhcOrder';
import LhcPlate from './LhcPlate';
import './lhc.styl';

const Lhc = () => {
    return (
        <div className="lhc-wrapper">
            <LhcTop/>
            <LhcPlate/>
            <LhcOrder/>
        </div>
    );
};

export default Lhc;