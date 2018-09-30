import React from 'react';
import './index.styl';
import BannerSwiper from './BannerSwiper';
import WinListSlider from './WinListSlider';

const Index = () => {
    return (
        <div className="index-wrapper">
            <BannerSwiper/>
            <WinListSlider/>
            <div className="center">首页</div>
        </div>
    );
};

export default Index;