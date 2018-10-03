((win, doc, $) => {
    doc.write(`
        <div class="footer" id="mc_footer">
            <footer>
                <div class="footer-img-wrap">
                    <div class="footer-img"></div>
                </div>
                <div class="footer-about-wrap">
                    <div class="footer-about">
                        <div class="logo-bottom"></div>
                        <ul class="footer-contract-ul clearfix">
                            <li class="fl">
                                <a href="tel:00639054515666">
                                    <span>
                                        <i class="icon-tel"></i>
                                        &nbsp;+63&nbsp;9054515666
                                    </span>
                                </a>
                            </li>
                            <li class="fl">
                                <a href="mailto:cs@mc188.com">
                                    <span>
                                        <i class="icon-email"></i>
                                        &nbsp;cs@mc188.com
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <ul class="footer-link-ul clearfix fr">
                            <li class="fl">
                                <a href="/static/sobet/helper-center.html?type=about" target="_blank">关于摩臣</a>
                            </li>
                            <li class="fl">
                                <a href="/static/sobet/helper-center.html?type=player" target="_blank">玩法介绍</a>
                            </li>
                            <li class="fl">
                                <a href="/static/sobet/helper-center.html" target="_blank">帮助中心</a>
                            </li>
                            <li class="fl">
                                <a href="/static/sobet/helper-center.html?type=rules" target="_blank">规则条款</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-copyright-wrap">
                    <div class="footer-copyright clearfix">
                        <div class="footer-copyright-right fl">
                            <span class="best"></span>
                            <span class="best-txt">最佳游戏环境</span>
                            <span>最佳分辨率1920 X 1080</span>
                        </div>
                        <div class="footer-copyright-left fr">
                            <span>Copyright © 2006-2018 MORECHEER Entertainment (摩臣娱乐) All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
                
                <div class="right-fixed">
                    <div class="day-sign">
                        <a href="/static/activity/sign/sign.html" target="_blank"></a>
                    </div>
                    <div class="group-btn">
                        <div class="chat-msg toChat">
                            <a href="javascript:void(0);">
                                <div class="chat-msg-icon">
                                    <div class="chat-tip-dot"></div>
                                </div>
                                <div class="chat-msg-title">
                                    消息
                                </div>
                            </a>
                        </div>
                        <div class="customer-service">
                            <a href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1" target="_blank">
                                <div class="customer-service-icon"></div>
                                <div class="customer-service-title">
                                    客服
                                </div>
                            </a>
                        </div>
                        <div class="line-switch">
                            <a href="/static/sobet/speed.html" target="_blank">
                                <div class="line-switch-icon"></div>
                                <div class="line-switch-title">
                                    线路
                                </div>
                            </a>
                        </div>
                        <div class="help-link">
                            <a href="/static/sobet/helper-center.html" target="_blank">
                                <div class="help-link-icon"></div>
                                <div class="help-link-title">
                                    帮助
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="back-to-top"><i></i></div>
                </div>
            </footer>
            
            <div id="chat" class="clearfix">
                <div class="fl user-list">
                    <div class="chat-search">
                        <div class="user-search">
                            <label></label><input type="text" placeholder="搜索联系人"><i class="icon-delete"></i>
                        </div>
                        <div class="btn-search"></div>
                    </div>
                    <div class="user-item on" data-type="admin"><i class="icon icon-admin"></i>系统管理员</div>
                    <div class="user-item user-agent" data-type="agent"><i class="icon icon-agent"></i>我的上级</div>
                    <div class="user-lower">
                        <div class="lower-list off">
                            <div class="title"><i class="icon-dot"></i>我的下级<span class="online-total"></span><i class="icon-arrow"></i></div>
                            <ul class="list-lower"></ul>
                        </div>
                        <div class="lower-list recent-list off">
                            <div class="title"><i class="icon-dot"></i>最近联系的下级<i class="icon-arrow"></i></div>
                            <ul class="list-recent"></ul>
                        </div>
                    </div>
                    <div class="msg-voice"></div>
                </div>
                <div class="fr chat-list">
                    <div class="chat-title"><i class="icon icon-admin"></i><span>系统管理员</span></div>
                    <div class="chat-content">
                        <p class="more">查看更多历史记录</p>
                        <dl class="msg-lists"></dl>
                    </div>
                    <div class="chat-enter">
                        <textarea name="msg" class="msg" placeholder="按回车键发送" maxlength="500"></textarea>
                        <a class="send" href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    `);
    
    //两边定位,离主块80px
    function fixedBeside() {
        let leftFixedLeft = $('.footer footer .footer-copyright').offset().left - 80 - $('.left-fixed').width();
        leftFixedLeft = leftFixedLeft < 0 ? 0 : leftFixedLeft;
        let rightFixedLeft = 0;
        if (win.location.pathname.indexOf('/lottery') !== -1) {
            rightFixedLeft = $('.js-main-wrap').offset().left + 1100 + 26;
            rightFixedLeft = (rightFixedLeft + 80) > win.innerWidth ? (win.innerWidth - 80) : rightFixedLeft;
        } else {
            rightFixedLeft = $('.footer footer .footer-copyright').offset().left + 1200 + 80;
            rightFixedLeft = (rightFixedLeft + 80) > win.innerWidth ? (win.innerWidth - 80) : rightFixedLeft;
        }
        $('.left-fixed').css({
            left: leftFixedLeft,
        });

        $('.right-fixed').css({
            left: rightFixedLeft,
        });
    }

    fixedBeside();

    win.addEventListener('resize', (event) => {
        fixedBeside();
    });

    //下载框仅在首页出现，签到图标页仅在首页出现
    const pathname = win.location.pathname;

    $('.right-fixed').fadeIn();
    
    if (pathname === '/index') {
        $('.left-fixed').fadeIn();
        $('.footer footer .right-fixed .day-sign').fadeIn();
    }

    //不显示底部logo栏
    if (pathname.indexOf('/lottery') !== -1 || pathname.indexOf('/diceGame') !== -1 || pathname.indexOf('/VIPEVENT') !== -1) {
        $('.footer footer .footer-img-wrap').hide();
    }
    //首页购彩页显示签到
    if (pathname.indexOf('/lottery') !== -1 || pathname.indexOf('/diceGame') !== -1) {
        $('.footer footer .right-fixed .day-sign').fadeIn();
    }
    
    //返回顶部
    $('.back-to-top').off('click').on('click', () => {
        $(win).scrollTop(0);
    });
    //控制返回顶部按钮显示隐藏
    win.addEventListener('scroll', () => {
        if ($(win).scrollTop() > 120) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    });
    //关闭
    $('.bottom-close').off('click').on('click',function(e){
        e.stopPropagation();
        $(this).parent('.left-fixed').fadeOut();
    });

})(window, document, jQuery, undefined);