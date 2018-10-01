import React from 'react';
import './index.styl';
import BannerSwiper from './BannerSwiper';
import WinListSlider from './WinListSlider';
import SubSwiper from './SubSwiper';
import NoticeList from './NoticeList';
import HotLotteries from './HotLotteries';
import DownloadList from './DownloadList';
import OtherGames from './OtherGames';

const Index = () => {
    return (
        <div className="index-wrapper">
            <BannerSwiper />
            
            <div className="index-main">
                <div className="index-activity">
                    <div className="index-top clearfix">
                        <div className="activity fl">
                            <NoticeList />
                            <div className="index-main-slide-wrap">
                                <SubSwiper />
                            </div>
                        </div>
                        <div className="qr-code fr"></div>
                    </div>
                </div>
                <div className="index-lottery clearfix">
                    <div className="lottery-hot fl">
                        <div className="hot clearfix">
                            <div className="title fl"><span className="icon-hot"></span> <span className="txt-hot"></span></div>
                            <div className="bonus fr">
                                <WinListSlider />
                            </div>
                        </div>
                        <HotLotteries />
                    </div>
                    <DownloadList />
                </div>
                <OtherGames />
            </div>
        </div>
    );
};

export default Index;