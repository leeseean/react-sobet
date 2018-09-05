import React from 'react';
import {Carousel} from 'antd';
import AppBanner from '../../images/banner/banner-app.jpg';
import CyqBanner from '../../images/banner/banner-cyq.jpg';
import GuajiBanner from '../../images/banner/banner-guaji.jpg';
import QqssmBanner from '../../images/banner/banner-qqssm.jpg';

const BannerSwiper = () => {
    return (
        <Carousel autoplay effect="fade">
            <div>
                <a className="banner-slide-item" style={{background: `url('${AppBanner}') no-repeat center`}}></a>
            </div>
            <div>
                <a className="banner-slide-item" style={{background: `url('${CyqBanner}') no-repeat center`}}></a>
            </div>
            <div>
                <a className="banner-slide-item" style={{background: `url('${GuajiBanner}') no-repeat center`}}></a>
            </div>
            <div>
                <a className="banner-slide-item" style={{background: `url('${QqssmBanner}') no-repeat center`}}></a>
            </div>
        </Carousel>
    );
};

export default BannerSwiper;