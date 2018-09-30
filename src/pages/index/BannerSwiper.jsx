import React from 'react';
import { Carousel, Icon } from 'antd';
import Banner1 from '../../images/banner/banner_cyq.jpg';
import Banner2 from '../../images/banner/banner_fjc.jpg';
import Banner3 from '../../images/banner/banner_ksdlq.jpg';
import Banner4 from '../../images/banner/banner_vip.jpg';
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
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${Banner1}') no-repeat center` }}></a>
                    <CustomPaging i={1} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${Banner2}') no-repeat center` }}></a>
                    <CustomPaging i={2} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${Banner3}') no-repeat center` }}></a>
                    <CustomPaging i={3} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
                <div>
                    <a href="/poker" className="banner-slide-item" style={{ background: `url('${Banner4}') no-repeat center` }}></a>
                    <CustomPaging i={4} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                </div>
            </Carousel>
        );
    }
}

export default BannerSwiper;