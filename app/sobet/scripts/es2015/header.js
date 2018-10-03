((win, doc, $) => {
    const lotListHtml = `
        <div class="lotList">
            <div class="lotteryUl">
                <div>
                    <div class="fl title">时时彩</div>
                    <div class="fl content">
                        <div class="lotteryList" data-lt="RDFFC" data-lt-cls="ssc" data-default="3">瑞典1分彩<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="RDLFC" data-lt-cls="ssc" data-default="3">瑞典2分彩<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="RBSSM" data-lt-cls="ssc" data-default="3">日本30秒彩<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="WBGMMC" data-lt-cls="ssc" data-default="3">WBG秒秒彩<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="WBGFFC" data-lt-cls="ssc" data-default="3">WBG分分彩<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="WBG5FC" data-lt-cls="ssc" data-default="3">WBG5分彩</div>
                        <div class="lotteryList" data-lt="CQSSC" data-lt-cls="ssc" data-default="3">重庆时时彩<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="TJSSC" data-lt-cls="ssc" data-default="3">天津时时彩</div>
                        <div class="lotteryList" data-lt="XJSSC" data-lt-cls="ssc" data-default="3">新疆时时彩</div>
                        <div class="lotteryList" data-lt="XN5FC" data-lt-cls="ssc" data-default="3">悉尼5分彩</div>
                        <div class="lotteryList" data-lt="HN5FC" data-lt-cls="ssc" data-default="3">河内5分彩<i class="new"></i></div>
                        <div class="lotteryList" data-lt="QQSSM" data-lt-cls="ssc" data-default="3">QQ30秒彩<i class="new"></i></div>
                        <div class="lotteryList" data-lt="TXFFC" data-lt-cls="ssc" data-default="3">腾讯分分彩<i class="new"></i></div>
                        <div class="lotteryList" data-lt="TX1FC" data-lt-cls="ssc" data-default="3">腾讯1分彩<i class="new"></i></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="fl title">11选5</div>
                    <div class="fl content">
                        <div class="lotteryList" data-lt="MC11Y" data-lt-cls="11y" data-default="5">摩臣11选5<i class="new"></i></div>
                        <div class="lotteryList" data-lt="GD11Y" data-lt-cls="11y" data-default="5">广东11选5</div>
                        <div class="lotteryList" data-lt="SD11Y" data-lt-cls="11y" data-default="5">山东11选5</div>
                        <div class="lotteryList" data-lt="JX11Y" data-lt-cls="11y" data-default="5">江西11选5</div>
                        <div class="lotteryList" data-lt="SH11Y" data-lt-cls="11y" data-default="5">上海11选5</div>
                        <div class="lotteryList" data-lt="AH11Y" data-lt-cls="11y" data-default="5">安徽11选5</div>
                        <div class="lotteryList" data-lt="HLJ11Y" data-lt-cls="11y" data-default="5">黑龙江11选5</div>
                        <div class="lotteryList" data-lt="YN11Y" data-lt-cls="11y" data-default="5">云南11选5</div>
                        <div class="lotteryList" data-lt="HUB11Y" data-lt-cls="11y" data-default="5">湖北11选5</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="fl title">PK10</div>
                    <div class="fl content">
                        <div class="lotteryList" data-lt="MCPK10" data-lt-cls="pk10" data-default="5">摩臣PK10<i class="new"></i></div>
                        <div class="lotteryList" data-lt="BJPK10" data-lt-cls="pk10" data-default="5">北京PK10<i class="hot"></i></div>
                        <div class="lotteryList" data-lt="XGPK10" data-lt-cls="pk10" data-default="5">香港PK10</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="fl title">快3</div>
                    <div class="fl content">
                        <div class="lotteryList" data-lt="MCK3" data-lt-cls="k3" data-default="5">摩臣快3<i class="new"></i></div>
                        <a href="/static/diceGame/diceGame.html" target="_blank">
                            <div class="lotteryList">摩臣骰宝<i class="new"></i></div>
                        </a>
                        <div class="lotteryList" data-lt="JSK3" data-lt-cls="k3" data-default="5">江苏快3</div>
                        <div class="lotteryList" data-lt="HNK3" data-lt-cls="k3" data-default="5">河南快3</div>
                        <div class="lotteryList" data-lt="HBK3" data-lt-cls="k3" data-default="5">湖北快3</div>
                        <div class="lotteryList" data-lt="AHK3" data-lt-cls="k3" data-default="5">安徽快3</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="fl title">3D/低频</div>
                    <div class="fl content">
                        <div class="lotteryList" data-lt="MC3D" data-lt-cls="3d" data-default="2">摩臣3D<i class="new"></i></div>
                        <div class="lotteryList" data-lt="SHSSL" data-lt-cls="3d" data-default="3">上海时时乐</div>
                        <div class="lotteryList" data-lt="3DFC" data-lt-cls="3d" data-default="2">福彩3D</div>
                        <div class="lotteryList" data-lt="TCP3" data-lt-cls="3d" data-default="2">排列3</div>
                        <div class="lotteryList" data-lt="TCP5" data-lt-cls="ssc" data-default="2">排列5</div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="fl title">其他彩票</div>
                    <div class="fl content">
                        <div class="lotteryList" data-lt="SCKL12" data-lt-cls="kl12" data-default="5">四川快乐12</div>
                        <div class="lotteryList" data-lt="HNKY481" data-lt-cls="ssc" data-default="3">河南快赢481<i class="new"></i></div>
                        <a href="/static/xglhc/xglhc.html" target="_blank">
                            <div class="lotteryList">香港六合彩<i class="new"></i></div>
                        </a>
                        <div class="lotteryList" data-lt="JSLHC" data-lt-cls="lhc" data-default="1">极速六合彩<i class="new"></i></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="gameUl">
                    <div class="fl title">其他游戏</div>
                    <div class="fl content">
                        <a href="/sobet/ag/agIndex" target="_self" class="agGame"><i></i><span class="agGame-title">真人娱乐</span></a>
                        <a href="/sport/by" target="_self" class="byGame"><i></i><span class="byGame-title">捕鱼王</span></a>     
                        <a href="/sobet/pt/ptIndex" target="_self" class="ptGame"><i></i><span class="ptGame-title">老虎机</span></a>                        
                        <a href="/sport/sb-sport" target="_self" class="sbGame"><i></i><span class="sbGame-title">体育</span></a>
                        <a href="/sport/qipai" target="_self" class="qpGame"><i></i><span class="qpGame-title">棋牌</span></a>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    `;
    const selfMenuHtml = `
        <div class="header_menu">
            <div class="header_menu_ul">
                <div>
                    <div class="headL">游戏记录</div>
                    <div class="headR">
                        <a href="/static/sobet/personalCenter.html#lottery" >彩票投注</a>
                        <a href="/static/sobet/personalCenter.html#trace" >彩票追号</a>
                        <a href="/static/sobet/personalCenter.html#AG_game" >AG游戏</a>
                        <a href="/static/sobet/personalCenter.html#BY_game" >AG捕鱼王</a>
                        <a href="/static/sobet/personalCenter.html#PT_game" >PT游戏</a>
                        <a href="/static/sobet/personalCenter.html#BBIN_game" >BBIN游戏</a>
                        <a href="/static/sobet/personalCenter.html#SB_game" >沙巴体育</a>
                        <a href="/static/sobet/personalCenter.html#IDN_game" >IDN棋牌</a>
                        <a href="/static/sobet/personalCenter.html#kgame_game" >Kgame棋牌</a>
                        <a href="/static/sobet/personalCenter.html#HKLHC_game" >香港六合彩</a>
                        <a href="/static/sobet/personalCenter.html#statistics" >盈亏统计</a>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="headL">交易记录</div>
                    <div class="headR">
                        <a href="/static/sobet/personalCenter.html#nowMoney"  >交易流水</a>
                        <a href="/static/sobet/personalCenter.html#recharger" >充值记录</a>
                        <a href="/static/sobet/personalCenter.html#draw" >提现记录</a>
                        <a href="/static/sobet/personalCenter.html#boxTrace" >钱包互转记录</a>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="headL">消息管理</div>
                    <div class="headR">
                        <a href="/static/sobet/personalCenter.html#inbox" >站内信<i class="newstotal"></i></a>
                    </div>
                    <div class="clear"></div>
                </div>
                <div>
                    <div class="headL">账户管理</div>
                    <div class="headR">
                        <a href="/static/sobet/personalCenter.html#personal" >个人资料</a>
                        <a href="/static/sobet/personalCenter.html#password" >登录密码</a>
                        <a href="/static/sobet/personalCenter.html#emails" >电子邮箱</a>
                        <a href="/static/sobet/personalCenter.html#mib" >密保问题</a>
                        <a href="/static/sobet/personalCenter.html#capitalPw" >资金密码</a>
                        <a href="/static/sobet/personalCenter.html#bank" >银行卡管理</a>
                        <a href="/static/sobet/personalCenter.html#webind"  type="webind">微信号绑定</a>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="last">上次登录时间:<em></em><a class="logout">安全退出</a></div>
            </div>
        </div>
    `;
    const agentMenuHtml = `
        <div class="header_menu">
            <ul class="header_menu_ul">
                <li><a href="/static/sobet/agencyCenter.html#searchteam" >团队报表</a></li>
                <li><a href="/static/sobet/agencyCenter.html#dayReport" >日度报表</a></li>
                <li><a href="/static/sobet/agencyCenter.html#LowerRecord" >下级游戏记录</a></li>
                <li><a href="/static/sobet/agencyCenter.html#lower" >下级管理</a></li>
                <li><a href="/static/sobet/agencyCenter.html#dividents"  rel="dividents" style="display:none;">分红管理</a></li>
                <li><a href="/static/sobet/agencyCenter.html#daySalary"  rel="daySalary" style="display:none;">日工资管理</a></li>
                <li><a href="/static/sobet/agencyCenter.html#sifan"  rel="sifan" style="display:none;">私返管理</a></li>                
                <li class="lowTansfer" style="display: none;"><a href="/static/sobet/agencyCenter.html#lowTansfer" >上下级转账记录</a></li>
                <li class="lowLevelTransfer" style="display: none;"><a href="/static/sobet/agencyCenter.html#lowLevelTransfer" >跨级转账记录</a></li>
                <li><a href="/static/sobet/agencyCenter.html#reg" >注册下级</a></li>
                <li><a href="/static/sobet/agencyCenter.html#link" >推广链接</a></li>
                <li><a href="http://admin.cyq188.com" target="_blank">彩友圈</a></li>
            </ul>
        </div>
    `;
    const pathname = win.location.pathname;
    const navArray = [{
            pathname: '/index',
            href: '/index',
            iconClass: 'menu-index-icon',
            titleClass: 'menu-index-title',
            title: '首页',
        },
        {
            pathname: '/lottery',
            href: '/lottery',
            iconClass: 'menu-lottery-icon',
            titleClass: 'menu-lottery-title',
            title: '彩票',
        },
        {
            pathname: '/sport/ag',
            href: '/sport/ag',
            iconClass: 'menu-live-icon',
            titleClass: 'menu-live-title',
            title: '真人娱乐',
        },
        {
            pathname: '/sport/by',
            href: '/sport/by',
            iconClass: 'menu-fish-icon',
            titleClass: 'menu-fish-title',
            title: '捕鱼王',
        },
        {
            pathname: '/sport/pt',
            href: '/sport/pt',
            iconClass: 'menu-slots-icon',
            titleClass: 'menu-slots-title',
            title: '老虎机',
        },
        {
            pathname: '/sport/sb-sport',
            href: '/sport/sb-sport',
            iconClass: 'menu-sport-icon',
            titleClass: 'menu-sport-title',
            title: '体育',
        },
        {
            pathname: '/sport/qipai',
            href: '/sport/qipai',
            iconClass: 'menu-poker-icon',
            titleClass: 'menu-poker-title',
            title: '棋牌',
        },
        /* {
            pathname: '/sobet/activity/goIndex',
            href: '/sobet/activity/goIndex',
            iconClass: 'menu-activity-icon',
            titleClass: 'menu-activity-title',
            title: '会员活动',
        }, */
        {
            pathname: '/static/xglhc/xglhc.html',
            href: '/static/xglhc/xglhc.html',
            iconClass: 'menu-xglhc-icon',
            titleClass: 'menu-xglhc-title',
            title: '香港六合彩',
        },
        {
            pathname: '/static/sobet/VIPEVENT.html',
            href: '/static/sobet/VIPEVENT.html',
            iconClass: 'menu-entertain-icon',
            titleClass: 'menu-entertain-title',
            title: 'VIP招待',
        },
    ];
    const navHtml = navArray.map(item => {
        return `
            <li class="menu-li fl ${pathname.indexOf(item.pathname) !== -1 ? 'active' : ''}">
                <a href="${item.href}" target="_self">
                    <i class="${item.iconClass}"></i>
                    <span class="${item.titleClass}"></span>
                </a>
            </li>
        `;
    }).join('');

    doc.write(`
        <div class="header" id="mc_header" style="height:36px;background:#252525;z-index:999999">
            <a class="loginlnk" style="display:none"></a>
            <header class="clearfix">
                <div class="back-to-index fl">
                    <i class="back-to-index-icon"></i>
                    <a href="/index">返回首页</a>
                </div>
                <div class="head-allGames fl">
                    <i class="head-allGames-icon"></i>
                    <span class="head-allGames-text">全部游戏</span>
                    ${lotListHtml}
                </div>
                <div class="top-right-wrap fr">
                    <div class="head-greet">
                        <span class="head-greet-wrap">
                            <span class="head-greet-content">你好，<em>------</em></span>
                            <i class="down-hook"></i>
                            ${selfMenuHtml}
                        </span>    
                    </div>
                    <div class="head-agent">
                        <span class="head-agent-text">代理中心</span>
                        <i class="down-hook"></i>
                        ${agentMenuHtml}
                    </div>
                    <div class="head-money">
                        <span class="head-money-title">账户余额：</span>
                        <span class="head-money-count">0000.0000</span>
                        <span class="head-money-yuan">元</span>
                        <i class="head-money-refresh"></i>
                        <span class="head-money-hide">隐藏</span>
                        <span class="head-money-charge">
                            <a href="/static/sobet/transaction-center.html#recharge" target="_blank">充值</a>
                        </span>
                        <span class="head-money-transfer">
                            <a href="/static/sobet/transaction-center.html#transfer" target="_blank">转账</a>
                        </span>
                        <span class="head-money-withdraw">
                            <a href="/static/sobet/transaction-center.html#withdraw" target="_blank">提现</a>
                        </span>
                    </div>
                    <div class="head-download">
                        <a href="https://download.volocn.com" target="_blank">
                            <i class="head-download-icon2"></i>
                            <span class="head-download-title">下载中心</span>
                        </a>
                    </div>
                </div>
            </header>
        </div>
        <div class="nav">
            <div class="menu-wrap clearfix">
                <div class="menu-icon fl">
                    <img src="/static/sobet/images/new/logo.png" alt="logo" height="40" class="menu-icon-logo" />
                </div>
                <nav class="menu-nav fr">
                    <ul class="menu-ul clearfix">
                        ${navHtml}
                    </ul>
                </nav>
            </div>
        </div>
    `);

    if (pathname.indexOf('/lottery') !== -1 || pathname.indexOf('/sign') !== -1 || pathname.indexOf('/xglhc') !== -1) {
        $('.header').addClass('fixed');
        $('.nav').hide();
        $('.header header .back-to-index').css({
            display:'inline-block',
        });
    }

    if (pathname.indexOf('/diceGame') !== -1 || pathname.indexOf('/agencyCenter') !== -1 || pathname.indexOf('/personalCenter') !== -1 || pathname.indexOf('/helper-center') !== -1 || pathname.indexOf('/pay') !== -1) {
        $('.nav').hide();
        $('.header header .back-to-index').css({
            display:'inline-block',
        });
    }
       

    //显示隐藏头部余额
    $('header div.head-money > span.head-money-hide').off('click').on('click', function () {
        switch($(this).text()) {
            case '隐藏':
                $(this).text('显示');
                $('.head-money-count').hide().next('.head-money-yuan').hide();
                break;
            case '显示':
                $(this).text('隐藏');
                $('.head-money-count').show().next('.head-money-yuan').show();
                break;
        }
    });
})(window, document, jQuery, undefined);
