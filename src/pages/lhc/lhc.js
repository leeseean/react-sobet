import React from 'react';
import LhcTop from './lhcTop';
import LhcOrder from './lhcOrder';
import LhcPlate from './lhcPlate';
import './lhc.css';

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