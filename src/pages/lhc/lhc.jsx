import React from 'react';
import LhcTop from './lhcTop.jsx';
import LhcOrder from './lhcOrder.jsx';
import LhcPlate from './lhcPlate.jsx';
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