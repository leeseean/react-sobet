var NewIndex = NewIndex || {};

NewIndex = {
    alertId: '',
    init() {
        const me = this;
        me.bannerSlide();
        me.getAnnouncement();
        me.activitySlide();
        me.getWinResultsList();
        //点击微信banner弹出公告栏
        $('#wx-banner').off('click').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            if ($('.main-announcement-item[id="557"]').length > 0) {
                $('.main-announcement-item[id="557"]').trigger('click');
            } else {
                $('.main-announcement-item').each(function (index, item) {
                    if ($(item).text().indexOf('微信') !== -1) {
                        $(item).trigger('click');
                        return false;
                    }
                });
            }
        });
    },
    bannerSlide() {
        var length = $('.index-banner a').size();
        var banner = new Swiper('.index-banner.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            direction: 'horizontal',
            effect: 'fade',
            preventClicks: false,
            lazy: {
                loadPrevNext: true,
            },
            on: {
                init: function () {
                    $('.count .current').html(this.realIndex + 1);
                    $('.count .total').html(length);
                },
                slideChange: function () {
                    $('.count .current').html(this.realIndex + 1);
                }
            }
        });
        $('.prev').off('click').on('click', function () {
            banner.slidePrev();
        });
        $('.next').off('click').on('click', function () {
            banner.slideNext();
        });
        $('.index-banner.swiper-container').hover(() => {
            banner.autoplay.stop();
        }, () => {
            banner.autoplay.start();
        });
    },
    activitySlide() {
        User.getSlides({
            // pageSize: 5,
        }, (res) => {
            if (res.code !== 0 && res.msg !== 'success') {
                return;
            }
            const {
                entities,
            } = res.result;
            const sildeHtml = entities.map(item => {
                const {
                    id,
                    frontImagePath
                } = item;
                return `
                    <li class="slide-li swiper-slide fl">
                        <a href="/sobet/activity/goDetailById?id=${id}" target="_blank">
                            <img src="${frontImagePath}" width="315" height="190">
                        </a>
                    </li>
                `;
            }).join('');
            $('.index-main-slide>ul.slide-ul').html(sildeHtml);
            new Swiper('.index-main-slide.swiper-container', {
                loop: true,
                autoplay: false,
                direction: 'horizontal',
                slidesPerView: 3,
                effect: 'slide',
                preventClicks: false,
                lazy: {
                    loadPrevNext: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });
    },
    getAnnouncement() {
        const me = this;
        User.getAlertMessage({
            pageNumber: -1,
            scroll: 2,
            noticeType: 1
        }, (res) => {
            let {
                items
            } = res;
            let copyItems = [...items];
            //进入首页 1 的话弹出，选取时间最近的一个
            me.alertId = copyItems.find(v => v.isJumpView === "1") && copyItems.filter(v => v.isJumpView === "1").sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime())[0]['id'];
            
            for (let i = 0; i < items.length; i++) {
                if ($('.main-announcement-wrap').width() > 700) {
                    break;
                }
                let item = copyItems.shift();
                $('.main-announcement-wrap').append(`
                    <span class="main-announcement-item" data-index="${i}" id="${item.id}">${item.title}</span>
                `);
            }

            me.getMoreAnnouncement();
            var typechs = {
                '1': '公告',
                '2': '活动'
            };
            var result = [];
            for (var m = 0; m < Math.ceil(res.items.length / 10); m++) {
                var start = m * 10;
                var end = start + 10;
                result.push(res.items.slice(start, end));
            }

            for (var j = 0; j < result.length; j++) {
                var itemUl = '<ul data-index="' + j + '">';
                var resultAll = result[j];
                for (var n = 0; n < resultAll.length; n++) {
                    var title = resultAll[n].title;
                    itemUl += '<li><a data-index="' + (n + j * 10) + '"><span class="mainTitle">' + title + '</span><span class="date">' + User.datetimeFormat(resultAll[n].createTime.substring(0, 10), 'MM-DD') + '</span></a></li>';
                    var content = '<div><h3>' + resultAll[n].title + '</h3><p class="conType"><span class="createTime">' + resultAll[n].createTime.substring(0, 19) + '</span>' +
                        '<span class="type">系统' + typechs[resultAll[n].type] + '</span></p><div class="newsContent">' + resultAll[n].content + '</div></div>';
                    $('#mc_notice .content').append(content);
                }
                itemUl += '</ul>';
                $('#mc_notice .name .notice-tit').append(itemUl);
                $('#mc_notice .name .notice-tit ul').eq(0).addClass('ul-active');
                $('#mc_notice .name .notice-tit li').eq(0).find('a').addClass('tab-active');
            }

            me.firstLoginAlert();
        });
    },
    getMoreAnnouncement() {
        $('.main-announcement-more,.main-announcement-item').off('click').on('click', function (evt) {
            evt.preventDefault();
            var tabs = $('#mc_notice .name ul a');
            var content = $('#mc_notice .content>div');
            var area = [];
            tabs.off('click').on('click', function (e) {
                e.preventDefault();
                var index = $(this).data('index');
                tabs.removeClass('tab-active');
                content.removeClass('tab-content-active');

                $(this).addClass('tab-active');
                content.eq(index).addClass('tab-content-active');
            });
            if (!$(this).hasClass('main-announcement-more')) {
                var e = $(this).data('index');
                $('#mc_notice .name ul').eq(0).find('li').eq(e).find('a').trigger('click');
            } else {
                $('#mc_notice .ul-active li').eq(0).find('a').trigger('click');
            }

            if ($('#mc_notice').hasClass('noticeAlert')) {
                area = ['578px', 'auto'];
                $('#mc_notice.noticeAlert .title span').text('重要通知');
            } else {
                area = ['950px', '500px'];
                $('#mc_notice .title span').text('最新公告');
            }

            layer.open({
                id: 'noticeLayer',
                type: 1,
                title: false,
                skin: 'noticeLayer',
                area: area,
                fixed: true,
                shade: 0.3,
                closeBtn: true,
                content: $('#mc_notice'),
                success: function () {
                    var list = $('.name li');
                    var len = list.length;
                    $('#mc_notice .pager .total').html(len);
                    var last = $('.ul-active li').length;
                    $('#mc_notice .pager .last').html(last);

                    var ulLen = $('#mc_notice .name ul').length;
                    $('#mc_notice .pager a.prev').css('visibility', 'hidden');
                    if (ulLen < 2) {
                        $('#mc_notice .pager a.next').css('visibility', 'hidden');
                    }


                    $('#mc_notice .pager').off('click').on('click', 'a', function (e) {
                        e.preventDefault();
                        var curr = $('#mc_notice .ul-active').data('index');
                        $('#mc_notice .name ul').removeClass('ul-active');
                        if ($(this).hasClass('prev')) {
                            $('#mc_notice .name ul').eq(curr - 1).addClass('ul-active');
                        } else if ($(this).hasClass('next')) {
                            $('#mc_notice .name ul').eq(curr + 1).addClass('ul-active');
                        }
                        $('.ul-active li').eq(0).find('a').trigger('click');
                        var nowCurr = $('.ul-active').data('index');
                        if (nowCurr == 0) {
                            $('#mc_notice .pager a.prev').css('visibility', 'hidden');
                            $('#mc_notice .pager a.next').css('visibility', 'visible');
                        } else if (nowCurr == (ulLen - 1) && ulLen > 1) {
                            $('#mc_notice .pager a.next').css('visibility', 'hidden');
                            $('#mc_notice .pager a.prev').css('visibility', 'visible');
                        } else {
                            $('#mc_notice .pager a.next').css('visibility', 'visible');
                            $('#mc_notice .pager a.prev').css('visibility', 'visible');
                        }

                        var first = $('#mc_notice .ul-active li').first().find('a').data('index');
                        var last = $('#mc_notice .ul-active li').last().find('a').data('index');
                        $('#mc_notice .pager .first').html(first + 1);
                        $('#mc_notice .pager .last').html(last + 1);

                    });

                },
                cancel: function () {
                    $('.name ul').eq(0).addClass('ul-active').siblings('ul').removeClass('ul-active');
                    $('.pager a').css('visibility', 'visible');
                    $('.ul-active li').eq(0).find('a').trigger('click');
                    $('#mc_notice').removeClass('noticeAlert')
                }
            });

        });
    },
    firstLoginAlert() {//首次登陆是否弹窗
        const me = this;
        const firstLoginAlerted = localStorage.getItem(`firstLoginAlerted-${me.alertId}-${User.name}`);
        if (me.alertId && firstLoginAlerted !== 'done') {
            $('#mc_notice').addClass('noticeAlert');            
            $(`.main-announcement-item[id="${me.alertId}"]`).trigger('click');
        } 
        localStorage.setItem(`firstLoginAlerted-${me.alertId}-${User.name}`, 'done');
    },
    getWinResultsList() {
        Api.getWinResultsList((res) => {
            if (res.code !== 1) {
                return;
            }
            let {
                result
            } = res;
            let winResultsListHtml = result.map(item => {
                let time = Math.floor((Number((new Date().getTime())) - Number(item.winTime)) / 60000);
                time = time > 60 ? Math.floor(time / 60) + '小时前' : (time <= 0 ? '刚刚' : time + '分钟前');
                return `
                    <span class="good-news-item fl">
                        ${item.winUserName}投注
                        <em class="good-news-lottery">${item.winLotteryName}</em>喜中
                        <em class="good-news-money">${item.winMoney}元</em>
                        (${time})
                    </span>
                `;
            }).join('');
            $('.index-lottery .bonus .marquee-html-wrap').html(winResultsListHtml);
            let marqueeWidth = $('.index-lottery .bonus  .marquee-html-wrap')[0].scrollWidth;
            createMarqueeStyle(marqueeWidth);
            $('.index-lottery .bonus  .marquee-html-wrap').addClass('marqueeLeft');
            $('.index-lottery .bonus  .marquee-html-wrap').append(winResultsListHtml);
            $('.index-lottery .bonus  .marquee-html-wrap').hover(function () {
                $(this).addClass('animation-paused');
            }, function () {
                $(this).removeClass('animation-paused');
            });
        });
    },
};

$(document).ready(() => {
    User.getStatus((res) => {
        Navigation.init(res, () => {});
    });
    NewIndex.init();
});

//底部滚动条样式
function createMarqueeStyle(marqueeWidth) {
    let style = document.createElement('style');
    style.id = "marqueeLeftStyle";
    style.innerHTML = `
        .marqueeLeft {
            animation: marqueeLeft ${marqueeWidth/50}s linear infinite;
        }
        @keyframes marqueeLeft {
            100% {
                margin-left: -${marqueeWidth}px;
            }
        }
    `;
    document.head.appendChild(style);
}