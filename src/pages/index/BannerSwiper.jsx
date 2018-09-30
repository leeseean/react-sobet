import React from 'react';
import { Carousel, Icon } from 'antd';
import AppBanner from '../../images/banner/banner-app.jpg';
import CyqBanner from '../../images/banner/banner-cyq.jpg';
import GuajiBanner from '../../images/banner/banner-guaji.jpg';
import QqssmBanner from '../../images/banner/banner-qqssm.jpg';
import './bannerSwiper.styl';

class BannerSwiper extends React.Component {
    swiperRef = null
    render() {
        const CustomPaging = ({ i, onPrev, onNext }) => {
            return (
                <div className="carousel-custom-page">
                    <Icon className="carousel-custom-page--icon" type="left" theme="outlined" onClick={onPrev} />
                        <em className="carousel-custom-page--current">{i}</em>
                        <em className="carousel-custom-page--slash">/</em>
                        <em className="carousel-custom-page--total">4</em>
                    <Icon className="carousel-custom-page--icon" type="right" theme="outlined" onClick={onNext} />
                </div>
            );
        };
        return (
            <Carousel autoplay effect="fade" dots={false} pauseOnHover={true} ref={ref => this.swiperRef = ref}>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${AppBanner}') no-repeat center` }}></a>
                    <CustomPaging i={1} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${CyqBanner}') no-repeat center` }}></a>
                    <CustomPaging i={2} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${GuajiBanner}') no-repeat center` }}></a>
                    <CustomPaging i={3} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${QqssmBanner}') no-repeat center` }}></a>
                    <CustomPaging i={4} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
            </Carousel>
        );
    }
}

export default BannerSwiper;