import React from 'react';
import './index.css';
import BannerSwiper from './bannerSwiper';
import WinListSlider from './winListSlider';

const Index = () => {
    return (
        <div>
            <BannerSwiper/>
            <WinListSlider/>
            <div className="center">首页</div>
        </div>
    );
};

export default Index;