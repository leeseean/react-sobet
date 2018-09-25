import React from 'react';
import './index.styl';
import BannerSwiper from './bannerSwiper.jsx';
import WinListSlider from './winListSlider.jsx';

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