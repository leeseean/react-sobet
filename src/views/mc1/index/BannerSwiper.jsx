import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Icon } from 'antd';
import { getBannerConfig } from '../../../utils/ajax.js';
import './bannerSwiper.styl';

class BannerSwiper extends React.Component {
    _mounted = false
    state = {
        bannerConfig: []
    }
    swiperRef = null
    getBannerConfig = async () => {
        const res = await getBannerConfig();
        if (res.data.code === 0 && this._mounted) {
            this.setState({
                bannerConfig: res.data.result
            });
        }
    }
    componentDidMount() {
        this._mounted = true;
        this.getBannerConfig();
    }
    componentWillUnmount() {
        this._mounted = false;
    }
    render() {
        const CustomPaging = ({ i, onPrev, onNext, total }) => {
            return (
                <div className="carousel-custom-page">
                    <Icon className="carousel-custom-page--icon" type="left" theme="outlined" onClick={onPrev} />
                    <em className="carousel-custom-page--current">{i}</em>
                    <em className="carousel-custom-page--slash">/</em>
                    <em className="carousel-custom-page--total">{total}</em>
                    <Icon className="carousel-custom-page--icon" type="right" theme="outlined" onClick={onNext} />
                </div>
            );
        };
        return (
            <Carousel autoplay effect="fade" dots={false} pauseOnHover={true} ref={ref => this.swiperRef = ref}>
                {
                    this.state.bannerConfig.map((item, index, arr) => {
                        const { imgSrc, isAuth, isOtherAuth, path } = item;
                        return (
                            <div key={imgSrc}>
                                <Link to={path} className="banner-slide-item" style={{ background: `url('${imgSrc}') no-repeat center` }}></Link>
                                <CustomPaging i={index + 1} total={arr.length} onPrev={() => this.swiperRef.slick.slickPrev()} onNext={() => this.swiperRef.slick.slickNext()} />
                            </div>
                        );
                    })
                }
            </Carousel>
        );
    }
}

export default BannerSwiper;