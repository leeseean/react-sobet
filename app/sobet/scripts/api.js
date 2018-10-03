var Api = Api || {};
Api = {
    url: globeEnv[envFlag].caipiao,
    sso: globeEnv[envFlag].sso,
    cache: {},
    apimap: {
        route: {
            'getOdds': '/api/anon/v1/lottery/odds',
            'getMarketOdds': '/api/anon/v1/lottery_market/odds',
            'getIssueInfo': '/api/anon/v1/lottery/issue_info', //'/api/anon/v1/lottery/issue_info',
            'getLotteryTimes': '/api/call/v1/lottery/times', //'/api/anon/v1/lottery/times',
            'getNextIssue': '/api/anon/v1/lottery/next_issue',
            'getNextIssues': '/api/anon/v1/lottery/next_issues',
            'getSimilar': '/api/anon/v1/lottery/matches',
            'getDish': '/api/anon/v1/lottery_market/top_odds_code',
            'getUserTradeVolume': '/api/anon/v1/lottery_market/trade_volume',
            'getSameNumber': '/api/anon/v1/lottery_market/same_number',
            'qusrpermission': '/api/u/v1/agent/queryUserPermission', //12.3 查询用户权限
            'getproxyinfo': '/api/u/v1/agent/getProxyInfo', //12.3 查询代理信息[很慢]
            'qpermissionlist': '/api/u/v1/agent/queryPermissionList', //12.4 查询代理目前的全部权限
            'qpermissionbyid': '/api/u/v1/agent/queryUserPermissionById', //12.5 查询当前ID的全部权限
            'mpermission': '/api/u/v1/agent/modifyPermission', //12.6 修改管理账号权限
            'addOrder': '/api/u/v1/lottery/add_order',
            'addOrderMMC': '/api/u/v1/lottery/add_order_now',
            'uploadCode': '/api/u/v1/lottery/uploadCode',
            'getRecency': '/api/u/v1/lottery/recent_order',
            'getRecencyDetail': '/api/u/v1/lottery/recent_detail',
            'addOrderMarket': '/api/u/v1/lottery_market/add_order',
            'getTradeNumber': '/api/u/v1/lottery_market/trade_number',
            'getOrderDetail': '/api/u/v1/lottery_market/order_detail',
            'getMoney': '/api/u/money',
            'getHistoryParams': '/api/u/v1/lottery/search_params',
            'getHistory': '/api/u/v1/lottery/history_orders',
            'getAgHistory': '/api/u/v1/ag/queryBetData',
            'getPtHistory': '/api/u/v1/lottery/history_orders_pt',
            'getSbHistory': '/api/u/v1/lottery/history_orders_sb',
            'getIdnHistory': '/api/u/v1/lottery/history_orders_idn',
            'getKgameHistory': '/api/u/v1/lottery/history_orders_kg',
            'getByHistory': '/api/u/v1/lottery/history_orders_ag_hunter',
            'getBbinHistory': '/api/u/v1/lottery/history_orders_bbin',
            'getStatistics': '/api/u/v1/agent/getDayReportByQueryName',

            'getLowerHistory': '/api/u/v1/lottery/lower_history_orders',
            'getLowerPTHistory': '/api/u/v1/lottery/lower_history_orders_pt',
            'getLowerSBHistory': '/api/u/v1/lottery/lower_history_orders_sb',
            'getLowerIDNHistory': '/api/u/v1/lottery/lower_history_orders_idn',
            'getLowerKgameHistory': '/api/u/v1/lottery/lower_history_orders_kg',
            "getLowerBYHistory": "/api/u/v1/lottery/lower_history_orders_ag_hunter",
            'getLowerBBINHistory': '/api/u/v1/lottery/lower_history_orders_bbin',

            'getMarketHistory': '/api/u/v1/lottery_market/history_orders',
            'cancelOrder': '/api/u/v1/lottery/cancel_order',
            'cancelOrderMarket': '/api/u/v1/lottery_market/cancel_order',
            'getTraces': '/api/u/v1/lottery/lottery_trace',
            'getLowerTraces': '/api/u/v1/lottery/lower_lottery_trace',
            'getMarketTraces': '/api/u/v1/lottery_market/lottery_trace',
            'getTrace': '/api/u/v1/lottery/trace',
            'getMarketTrace': '/api/u/v1/lottery_market/trace',
            'cancelTrace': '/api/u/v1/lottery/trace_cancel', //traceId=79&issues[]=20150605-585&issues[]=20150605-584
            'cancelMarketTrace': '/api/u/v1/lottery_market/trace_cancel', //?traceId=83&issues[]=20150605-585&issues[]=20150605-584
            'agentlink': '/api/u/v1/agent/user_link', //9.1 获取代理链接 - 代理用户获取自己推广链接 CHECKED
            'updatepoint': '/api/u/v1/agent/update_point', //9.3 设置推广自助注册返点

            'createlink': '/api/u/v1/agent/create_link', // 推广链接 → 生成链接
            'getlinks': '/api/u/v1/agent/links', // 推广链接 → 获取链接列表
            'deletelink': '/api/u/v1/agent/delete_link', // 推广链接 → 删除一条链接

            'lotterypoints': '/api/u/v1/agent/lottery_points', //9.2 用户当前代理彩种返点信息 - 代理用户当前代理的彩票返点信息 //9.5 彩种玩法返点详情 CHECKED
            'lotterypointrate': '/api/u/v1/agent/point_info', //9.2 用户当前代理彩种返点信息 - 代理用户当前代理的彩票返点信息 //9.5 彩种玩法返点详情(缺：玩法的返点)
            'users': '/api/u/v1/agent/users', //9.4 代理用户 (缺：用户ID未返回，balance字段是用户余额还是返点率不明确，按用户名查询和按余额范围查询的参数)
            'agentregister': '/api/u/v1/agent/agent_register', //9.6 代理开户
            'userinfo': '/api/u/v1/agent/user_info', //10.1 用户信息
            'teambalance': '/api/u/v1/agent/team_balance', //10.2 用户团队余额 CHECKED
            'transfer': '', //10.3 转账 (直接调用用户中心接口)
            'setpoints': '/api/u/v1/agent/set_user_point', //10.4 设定用户返点
            'accountinfo': '/api/u/v1/agent/account_info', //10.5 账变查询
            'getteamreport': '/api/u/v1/agent/getTeamReport', //10.6 团队报表 (String startTime, String endTime, Integer currPage, Integer pageSize)
            'getdayreport': '/api/u/v1/agent/getDayReport', //日度报表
            'getLotteryPoint': '/api/u/v1/agent/getLotteryPoint', //获取调整后的返点

            'getRechargeWithdrawTeamReport': '/api/u/v1/agent/getRechargeWithdrawTeamReport', //团队报表-充提数据接
            'getTeamReportTotle': '/api/u/v1/agent/getTeamReportTotle',
            'getTeamReport': '/api/u/v1/agent/getTeamReport',
            'getTeamReportPT': '/api/u/v1/agent/getTeamReportPT',
            'getTeamReportAG': '/api/u/v1/agent/getTeamReportAG',
            'getTeamReportBY': '/api/u/v1/agent/getTeamReportAgHunter',
            'getTeamReportBbin': '/api/u/v1/agent/getTeamReportBbin',
            'getTeamReportThird': '/api/u/v1/agent/getThirdTeamReportCount',
            'findThirdReportCountBetMonth': '/api/u/v1/agent/findThirdReportCountBetMonth',
            'getTeamReportSb': '/api/u/v1/agent/getTeamReportSb',
            'getTeamReportIdn': '/api/u/v1/agent/getTeamReportIdn',
            'getTeamReportKgame': '/api/u/v1/agent/getTeamReportKG',
            'getTeamReportHKLHC': '/api/u/v1/agent/getTeamReportHKLHC',

            'getRechargeWithdrawDayReport': '/api/u/v1/agent/getRechargeWithdrawDayReport',
            'getDayReport': '/api/u/v1/agent/getDayReport', //日度报表
            'getDayReportTotle': '/api/u/v1/agent/getDayReportTotle',
            'getDayReportAG': '/api/u/v1/agent/getDayReportAG',
            'getDayReportPT': '/api/u/v1/agent/getDayReportPT',
            'getDayReportBY': '/api/u/v1/agent/getDayReportAgHunter',
            'getDayReportBbin': '/api/u/v1/agent/getDayReportBbin',
            'getDayReportThird': '/api/u/v1/agent/getThirdDayReportCount',
            'getDayReportSb': '/api/u/v1/agent/getDayReportSb',
            'getDayReportIdn': '/api/u/v1/agent/getDayReportIdn',
            'getDayReportKgame': '/api/u/v1/agent/getDayReportKG',
            'getDayReportHKLHC': '/api/u/v1/agent/getDayReportHKLHC',

            "rechargeOrderlist": '/sobet/query/rechargeOrder_ajaxListWeb', //交易记录


            'getBbinGameType': '/api/call/v1/lottery/bbinGameType', //  获取BBIN游戏类型
            'accountinforeport': '/api/u/v1/report/account_info', //11.3 账变查询
            'pointinfo': '/api/u/v1/agent/point_info', //10.6 返点查询,用户查询返点信息(缺：玩法的返点)
            'summary': '/api/u/v1/agent/summary', //10.7 摘要
            'reportquery': '/api/u/v1/report/report_query', //11.1 传统投注模式报表查询接口
            'reportquerymarket': '/api/u/v1/report/report_query', //11.2 交易市场模式报表查询接口
            'commission': '/api/u/v1/report/commission', //11.4 佣金总额查询接口
            'getteaminfo': '/api/u/v1/agent/getTeamInfo', //11.5 团队报表新接口 startTime=2015-11-05%2013:30:15&endTime=2015-11-08%2013:46:15
            'getagentquota': '/api/u/v1/agent/getAgentquota', //'/api/u/v1/agent/getAgentquota',//11.6 读取当前用户配额
            'getagentquotabyusr': '/api/u/v1/agent/getAgentquotaByUser', //'/api/u/v1/agent/getAgentquota',//11.7 获取某下级用户配额
            'quotaassign': '/api/u/v1/agent/quotaAssign', //'/api/u/v1/agent/quotaAssign',//11.8 更新某下级用户赠送配额
            'quotagc': '/api/u/v1/agent/quotagc', //'/api/u/v1/agent/quotagc',//11.9 更新某下级用户回收配额
            'quotaSet': '/api/u/v1/agent/quotaSet', //一键设置配额

            'my_contract': '/api/u/v1/contract/my_contract', //分页查询我的契约
            'detail_contract': '/api/u/v1/contract/detail_contract', //契约详细
            'recent_two_contract': '/api/u/v1/contract/recent_two_contract', //查询最近的两条契约
            'lower_contract': '/api/u/v1/contract/lower_contract', //分页查询下级契约
            'add_contract': '/api/u/v1/contract/add_contract', //创建契约
            'update_status': '/api/u/v1/contract/update_status', //更新契约状态
            'my_daysalary': '/api/u/v1/daysalary/my_daysalary', //分页查询我的日工资契约
            'detail_daysalary': '/api/u/v1/daysalary/detail_daysalary', //日工资契约详细
            'recent_two_daySalary': '/api/u/v1/daysalary/recent_two_daySalary', //查询最近的两条日工资契约
            'lower_daySalary': '/api/u/v1/daysalary/lower_daySalary', //分页查询下级日工资契约
            'add_daysalary': '/api/u/v1/daysalary/add_daysalary', //创建日工资契约
            'update_status_day': '/api/u/v1/daysalary/update_status', //更新日工资契约状态

            'getBonusCycList': '/api/u/v1/bonus/getBonusCycList', //我的分红接口
            'getLowerBonusCycList': '/api/u/v1/bonus/getLowerBonusCycList', //下级分红
            'getBonusDayList': '/api/u/v1/bonus/getBonusDayList', //我的日工资接口
            'getLowerBonusDayList': '/api/u/v1/bonus/getLowerBonusDayList', //下级日工资
            'releaseBonusById': '/api/u/v1/contractBonusRelease/releaseBonusById', //手动发分红接口
            'batchReleaseBonusById': '/api/u/v1/contractBonusRelease/batchReleaseBonusById', //批量手动发分红接口
            'releaseSalaryById': '/api/u/v1/contractBonusRelease/releaseSalaryById', //手动发日工资分红接口
            'batchReleaseSalaryById': '/api/u/v1/contractBonusRelease/batchReleaseSalaryById', //批量手动发日工资分红接口
            'getUserPointInfo': '/api/u/v1/contractBonusRelease/getUserPointInfo', //已发金额和冻结金额
            'getAgentPointInfo': '/api/u/v1/contractBonusRelease/getAgentPointInfo', //已发金额和未发金额

            'haveContractInfo': '/api/u/v1/contractBonusRelease/haveContractInfo', //查询自己是否有契约

            'getNewActivityMoney': '/api/i/u/activity/getNewActivityMoney', //得到连续签到规则
            'userSign': '/api/i/u/activity/userSign', //签到
            'getUserSignData': '/api/i/u/activity/getUserSignData', //得到签到列表
            'getUserLotteryAmount': '/api/i/u/activity/getUserLotteryAmount', //得到当天投注金额
            'getNickname': '/sobet/userInfo/userInfoAjax', //获取昵称
            'updateNickname': '/sobet/userInfo/updateUserInfo', //更新昵称
            'getWinResultsList': '/api/call/v1/lottery/getLotteryWinTop10',

            'getLower': '/api/u/v1/chat/sub_contact', //查询下级
            'recentContact': '/api/u/v1/chat/recent_contact', //查询最近联系人
            'historyMsg': '/api/u/v1/chat/history_message', //查询用户历史记录
            'searchLower': '/api/u/v1/chat/follower', //精确搜索下级
            'userTeamPoint': '/sobet/api/userPointCheck/userTeamPoint', //团队总余额

            'transferIndexAjax': '/pay/transferIndexAjax', // 转账

            'lower': {
                'html': '/static/sobet/lower.html'
            },
            'agent': {
                'html': '/static/sobet/agent.html'
            }, // 10.8 代理
            'history': {
                'html': '/static/sobet/history.html'
            }, // 10.10 投注记录和追号记录//
            'report': {
                'html': '/static/sobet/report.html'
            }, // 10.9 报表
            "recharge": {
                'html': '/static/sobet/hisrechagers.html'
            },
            'accountManagement': {
                'html': "/static/sobet/account.html"
            }
        }
    },
    getCommon: function (route, p, fn) {
        var args = arguments;
        //同一接口增加cache时，有10秒钟缓存
        if (typeof p.cache !== 'undefined') {
            if (typeof Api.cache[route] === 'object') {
                var res = Api.cache[route];
                if (res === -1 && args[3] !== undefined && args[3] === true && !$(".loginlnk").hasClass('waiting')) {
                    $(".loginlnk").trigger('click');
                    return false;
                } else {
                    fn(res);
                    setTimeout(function () {
                        delete Api.cache[route];
                    }, 10000);
                    return false;
                }
            } else {
                Api.cache[route] = 1;
            }
        }
        $.ajax({
            url: Api.geturl(route, p),
            type: (typeof p.action !== 'undefined' ? p.action : 'GET'),
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            // 缓存控制
            if (typeof Api.cache[route] !== 'undefined') {
                if (Api.cache[route]) {
                    Api.cache[route] = res;
                }
            }
            // arguments[3] 为true的时候，未登录需要弹框
            if (res === -1 && args[3] !== undefined && args[3] === 1 && !$(".loginlnk").hasClass('waiting')) {
                $(".loginlnk").trigger('click');
                if (typeof p.failed === 'function') {
                    p.failed();
                }

                return false;
            } else {
                fn(res);
            }
        }).fail(function () {
            if (typeof p.failed === 'function') {
                p.failed();
            }
            fn("error");
        });
    },
    getOrderNumber: function (d, fn) {
        var speed = 200;
        var params = $.trim($("#platTradeNo").val());
        $.ajax({
            url: ctx + "/pay/validatePlatTradeNo",
            type: "GET",
            dataType: "json",
            cache: false,
            data: "platTradeNo=" + params
        }).done(function (res) {
            var yon = res.status;
            if (yon == "Y") {
                $(".dh-tips").fadeIn(speed).html("*此存款流水单号已存在");
                $("#payform .btn").attr("onclick", " ");
                return;
            } else if (yon == "N") {
                $(".dh-tips").fadeOut(speed);
                $("#payform .btn").attr("onclick", "deposit()");
            }
        }).fail(function () {
            fn("error");
        });
    },
    getTrace: function (p, fn) {
        Api.getCommon('getTrace', p, fn);
    },
    getRecencyDetail: function (obj, fn) {
        $.ajax({
            url: Api.url + '/api/u/v1/lottery/recent_detail',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: obj
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    getAgentUserStatus: function (fn) {
        $.ajax({
            url: Api.sso + "/pay/getAgentUserStatus",
            type: 'GET',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    // 转账钱包CODE
    getptList: function (fn) {
        $.ajax({
            url: Api.sso + '/pay/getPcodeCbBaseList',
            type: 'GET',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    // 转账钱包CODE
    getTransferIndexAjax: function(cb) {
        $.ajax({
            url: Api.sso + Api.apimap.route['transferIndexAjax'],
            type: 'GET',
            dataType: 'json',
            cache: false,
        }).done(function (res) {
            cb(res);
        }).fail(function (err) {
            cb(err);
        });
    },
    updateMessageUserById: function (d, fn) {
        $.ajax({
            url: '/sobet/message/updateMessageUserById',
            type: 'GET',
            timeout: 30000,
            dataType: 'json',
            cache: false,
            data: d
        }).done(function (res) {
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getAgcbPointTransfer: function (d, fn) {
        $.ajax({
            type: 'POST',
            url: '/sobet/pay/cbPointTransfer',
            dataType: 'json',
            cache: false,
            timeout: 30000,
            data: d,
            beforeSend: function () {
                $(this).html('<i class="fa fa-spinner fa-spin"></i>');
            },
            success: function (res) {
                fn(res)
            },
            error: function (res) {
                fn("error");
            }
        });
    },
    // 转帐表单
    cbPointTransfer: function(d, fn, fn2) {
        $.ajax({
            type: 'POST',
            url: '/sobet/pay/cbPointTransfer',
            dataType: 'json',
            cache: false,
            timeout: 15000,
            data: d,
            success: function (res) {
                fn(res)
            },
            error: function (err) {
                fn2(err);
            }
        });
    },
    // 提现初始数据
    drawCashIndexAjax: function(fn) {
        $.ajax({
            type: 'POST',
            url: '/sobet/pay/drawCashIndexAjax',
            dataType: 'json',
            cache: false,
            success: function (res) {
                fn(res)
            },
            error: function (err) {
                fn(err);
            }
        });
    },
    // 提现
    withdrawCash: function(p, fn) {
        $.ajax({
            type: 'POST',
            url: '/sobet/pay/withdrawCashAjax',
            dataType: 'json',
            cache: false,
            data: p,
            success: function (res) {
                fn(res)
            },
            error: function (err) {
                fn(err);
            }
        });
    },
    // 充值初始化
    rechargeIndex: function(fn) {
        $.ajax({
            url: ctx + '/pay/rechargeIndexAjax',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: {
                "clientType": 0
            }
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getQueryChannel: function (fn) {
        $.ajax({
            url: ctx + '/pay/queryChannel',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: {
                "clientType": 0
            }
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    preTransferRechargeInfo: function (p, fn) {
        $.ajax({
            url: ctx + '/pay/preTransferRechargeInfo',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    recharge: function (p, fn) {
        $.ajax({
            url: Api.sso + '/pay/recharge',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getPtBalance: function (d, fn) {
        $.ajax({
            url: Api.sso + '/pay/getPlayerBalance',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: d,
            beforeSend: function () {
                $(this).html('<i class="fa fa-spinner fa-spin"></i>');
            }
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getpageList: function (p, fn) {
        $.ajax({
            url: '/sobet/query/rechargeOrder_ajaxListWeb',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getdrawOrderList: function (p, fn) {
        $.ajax({
            url: '/sobet/query/drawOrder_ajaxListWeb',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    gettransferList: function (p, fn) {
        $.ajax({
            url: ctx + '/order/ajaxListWeb',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getLowerTransferList: function (p, fn) {
        $.ajax({
            url: Api.sso + '/order/queryTeamTransferOrderList',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getBlockAmountList: function (p, fn) {
        $.ajax({
            url: ctx + '/order/blockAmountAjaxList',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getubsList: function (p, fn) {
        $.ajax({
            url: ctx + '/api/userPointCheck/queryResultWeb',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            var d = dialog({
                fixed: true,
                title: '用户流水',
                content: '读取数据失败，请稍后再试……',
                okValue: '确定'
            });
            d.width(300);
            d.showModal();
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
        });
    },
    getLowerubsList: function (p, fn) {
        $.ajax({
            url: ctx + '/api/userPointCheck/queryLowerResult',
            type: 'GET',
            dataType: 'json',
            data: p,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            var d = dialog({
                fixed: true,
                title: '用户流水',
                content: '读取数据失败，请稍后再试……',
                okValue: '确定'
            });
            d.width(300);
            d.showModal();
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
        });
    },
    getSpreadUrl: function (linkId, fn) {
        $.ajax({
            url: ctx + '/getRegisterUrl',
            type: 'GET',
            dataType: 'json',
            data: "linkId=" + linkId,
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            var d = dialog({
                fixed: true,
                title: '推广地址',
                content: '读取数据失败，请稍后再试……',
                okValue: '确定'
            });
            d.width(300);
            d.showModal();
        });
    },
    getUserRelationList: function (d, fn) {
        $.ajax({
            url: ctx + '/AccountUserInfo/subUinListAjax',
            type: 'GET',
            dataType: 'json',
            data: d,
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $("#main .results table").css("opacity", "0.5");
            }
        }).done(function (res) {
            $("#main .results table").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            var d = dialog({
                fixed: true,
                title: '用户关系',
                content: '读取数据失败，请稍后再试……',
                okValue: '确定'
            });
            d.width(300);
            d.showModal();
        });
    },
    getLowerUserList: function (fn) {
        $.ajax({
            url: Api.sso + '/pay/getAgentUserList',
            type: 'GET',
            dataType: 'json',
            cache: false,
            beforeSend: function () {
                $(".sppinner").show();
                $(".transMF-part").css("opacity", "0.5");
            }
        }).done(function (res) {
            $(".transMF-part").css("opacity", "1");
            $(".sppinner").hide();
            fn(res);
        }).fail(function () {
            var d = dialog({
                fixed: true,
                title: '下级转账',
                content: '读取数据失败，请稍后再试……',
                okValue: '确定'
            });
            d.width(300);
            d.showModal();
        });
    },
    getSobetBalance: function (d, fn) {
        $.ajax({
            url: Api.sso + '/pay/getPlayerBalance',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: "cbId=sobet_01"
        }).done(function (res) {
            var thisCash = res.cash;
            $("#main .results .tips span em").text(thisCash);
            $(".lower_transfer .tips em").text(thisCash);
        }).fail(function () {
            fn("error");
        });
    },
    //用户流水类型
    getUserBillQueryType: function (obj, fn) {
        $.ajax({
            url: ctx + '/api/userPointCheck/queryResult',
            type: 'GET',
            dataType: 'json',
            data: obj,
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getNewMessagesCount: function (d, fn) {
        $.ajax({
            url: ctx + '/userInfo/getNewMessagesCount',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: d,
            timeout: 5000,
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (textStatus === 'timeout') {
                    $('.msgTips').remove();
                } else {
                    $('.msgTips').remove();
                }
            },
            success: function (data, textStatus) {
                var msgNum = data.count;
                if (msgNum > 0) {
                    $('.msgTips').show();
                } else {
                    $('.msgTips').hide();
                }
            }
        });
    },
    //分享平台
    getShareCode: function (d, fn) {
        $.ajax({
            url: '/admin/pages/SharePlatform/getSharePlatform.do',
            type: 'GET',
            dataType: 'html',
            cache: false,
            data: d
        }).done(function (res) {
            $('body').append(res);
        }).fail(function () {
            console.log("error");
        });
    },
    //首页公告
    getNoticeTitle: function (fn) {
        $.ajax({
            url: ctx + '/adminCommon/getAdminNotice.do',
            type: 'GET',
            dataType: 'json',
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //首页轮播图
    getTopIndexImg: function (fn) {
        $.ajax({
            url: ctx + '/activity/getActivityList',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: 'tofront=1&size=3'
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    getPtBalance: function (d, fn) {
        $.ajax({
            url: '/sobet/pay/getPlayerBalance',
            type: 'GET',
            dataType: 'json',
            cache: false,
            timeout: 30000,
            data: d,
            beforeSend: function () {
                $(this).html('<i class="fa fa-spinner fa-spin"></i>');
            }
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //活动列表页数据
    getActivityIndexData: function (p, fn) {
        $.ajax({
            url: ctx + '/api/i/anon/activity/queryCurrentActivity', // + new Date().getTime(),
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //活动内容页数据
    getActivityContentData: function (p, fn) {
        $.ajax({
            url: ctx + '/api/i/anon/activity/queryActivityById', // + new Date().getTime(),
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: 'id=' + actId + ''
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //参与活动接口
    getActivityJoinStatus: function (actId, fn) {
        $.ajax({
            url: ctx + '/api/i/u/activity/joinActivityById',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: 'activityid=' + actId + ''
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //申请红利接口
    getBonusJoinStatus: function (actId, fn) {
        $.ajax({
            url: ctx + '/api/i/u/activity/applyBonus',
            type: 'GET',
            dataType: 'json',
            cache: false,
            data: 'activityid=' + actId + ''
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //充值-快捷充值-银行列表
    getChargeBankList: function (fn) {
        $.ajax({
            url: ctx + '/pay/bankList',
            type: 'GET',
            dataType: 'json',
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //token接口
    updatePassword: function (fn) {
        $.ajax({
            url: '/sobet/userInfo/updatePassword',
            type: 'GET',
            dataType: 'json',
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //登陆密码
    updatePasswordAjax: function (data, fn) {
        $.ajax({
            url: '/sobet/userInfo/updatePasswordAjax',
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //邮箱判定
    upEmail: function (fn) {
        $.ajax({
            url: ctx + '/userInfo/bindEmail?action=bindEmail',
            type: 'GET',
            dataType: 'json',
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //砸金蛋
    getGoldBallStatus: function (fn) {
        $.ajax({
            url: ctx + '/api/i/u/activity/signDraw',
            type: 'GET',
            dataType: 'json',
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //砸金蛋活动详情
    getGoldBallQuery: function (fn) {
        $.ajax({
            url: ctx + '/api/i/anon/activity/querySignDrawInfo',
            type: 'GET',
            dataType: 'json',
            cache: false
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    //获取用户总余额
    getUserMoney: function (fn) {
        $.ajax({
            url: User.sso + '/u/getUserBalance',
            type: 'GET',
            dataType: 'json',
            data: 'appId=5',
            cache: false,
            beforeSend: function () {
                $button.find('.hammer-up').hide();
                $button.find('.hammer-down').show();
            }
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    getPtBalance: function (d, fn) {
        $.ajax({
            url: '/sobet/pay/getPlayerBalance',
            type: 'GET',
            dataType: 'json',
            cache: false,
            timeout: 30000,
            data: d,
            beforeSend: function () {
                $(this).html('<i class="fa fa-spinner fa-spin"></i>');
            }
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //删除银行卡
    deleteCard: function (id, fn) {
        $.ajax({
            url: ctx + '/pay/deleteCard',
            type: 'GET',
            dataType: 'json',
            data: 'id=' + id + '',
            cache: false,
            beforeSend: function () {
                global_t.content('<i class="fa fa-circle-o-notch fa-spin"></i> 删除中……请稍后').show();
            }
        }).done(function (res) {
            global_t.close().remove();
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    /*个人资料*/
    personFile: function (fn) {
        $.ajax({
            url: ctx + '/userInfo/userCenterAjax',
            type: 'GET',
            dataType: 'json',
            cache: false
            /*beforeSend: function () {
             global_t.content('<i class="fa fa-circle-o-notch fa-spin"></i> 读取数据....').show();
             }*/
        }).done(function (res) {
            /* global_t.close();*/
            fn(res);
        }).fail(function () {
            fn('error');
        });
    },
    getHtml: function (route, path, p, fn) {
        $.ajax({
            url: Api.geturl(route, path, p),
            type: 'GET',
            cache: false,
            dataType: (typeof p.type != 'undefined' ? p.type : 'html'),
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    geturl: function (apiName) {
        //函数重载1.Api.geturl('getTradeNumber',{p:1})；2.Api.geturl('agent','html')；
        var params;
        var pageparams;
        var ps = arguments;
        if (arguments.length > 1) {
            params = arguments[1];
        }
        if (typeof Api.apimap.route[apiName] == 'object') {
            if (params) {
                if (arguments.length > 2) {
                    pageparams = arguments[2];
                    return [String(Api.apimap.route[apiName][params]).replace('.json', (pageparams.page > 1 ? '_' + pageparams.page : '') + '.json')].join('');
                }
                return [Api.apimap.route[apiName][params]].join('');
            }
        }
        var pspage = 0;
        if (ps.length > 1) {
            pspage = ps[1].page;
        }
        return [Api.url, String(Api.apimap.route[apiName]).replace('.json', (pspage > 1 ? '_' + pspage : '') + '.json')].join('');
    },
    cancelOrder: function (obj, fn) {
        $.ajax({
            url: Api.geturl('cancelOrder', obj),
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: obj
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    cancelTrace: function (p, fn) {
        Api.getCommon('cancelTrace', p, fn);
    },
    getLotteryTimes: function (p, fn) {
        $.ajax({
            url: Api.geturl('getLotteryTimes', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getNextIssue: function (p, fn) {
        $.ajax({
            url: Api.geturl('getNextIssue', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    getNextIssues: function (p, fn) {//?lotteries=CQSSC&lotteries=RDFFC
        $.ajax({
            url: Api.geturl('getNextIssues', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    bindEmailAjax: function (d, fn) {
        $.ajax({
            type: 'POST',
            url: '/sobet/userInfo/bindEmailAjax',
            dataType: 'json',
            cache: false,
            timeout: 30000,
            data: d,
            success: function (res) {
                fn(res)
            },
            error: function (res) {
                fn("error");
            }
        })
    },
    getMyContract: function (p, fn) {
        $.ajax({
            url: Api.geturl('my_contract', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getDetailContract: function (p, fn) {
        $.ajax({
            url: Api.geturl('detail_contract', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getRecentTwoContract: function (p, fn) {
        $.ajax({
            url: Api.geturl('recent_two_contract'),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    addContract: function (p, fn) {
        $.ajax({
            url: Api.url + '/api/u/v1/contract/add_contract',
            type: 'POST',
            cache: false,
            // contentType:'application/json',
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    modifyContract: function (p, fn) {
        $.ajax({
            url: Api.url + '/api/u/v1/contract/modify_contract',
            type: 'POST',
            cache: false,
            // contentType:'application/json',
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getLowerContract: function (p, fn) {
        $.ajax({
            url: Api.geturl('lower_contract', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    updateContractStatus: function (p, fn) {
        $.ajax({
            url: Api.geturl('update_status', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getDayMyContract: function (p, fn) {
        $.ajax({
            url: Api.geturl('my_daysalary', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getDayDetailContract: function (p, fn) {
        var _hash = window.location.hash;
        var obj = {
            '#daySalary': '/lottery/api/u/v1/daysalary/detail_daysalary',
            '#sifan': '/lottery/api/u/v1/privateRebate/detail_privateRebate'
        };
        $.ajax({
            url: obj[_hash],
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getDayRecentTwoContract: function (p, fn) {
        var _hash = window.location.hash;
        var obj = {
            '#sifan': '/lottery/api/u/v1/privateRebate/recent_two_privateRebate',                '#daySalary': '/lottery/api/u/v1/daysalary/recent_two_daySalary',
            '#daySalary': '/lottery/api/u/v1/daysalary/recent_two_daySalary',
        };
        $.ajax({
            url: obj[_hash],
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    addDayContract: function (p, fn) {
        $.ajax({
            url: Api.url + '/api/u/v1/daysalary/add_daysalary',
            type: 'POST',
            cache: false,
            // contentType:'application/json',
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    modifyDayContract: function (p, fn) {
        $.ajax({
            url: Api.url + '/api/u/v1/daysalary/modify_daysalary',
            type: 'POST',
            cache: false,
            // contentType:'application/json',
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getDayLowerContract: function (p, fn) {
        $.ajax({
            url: Api.geturl('lower_daySalary', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    updateDayContractStatus: function (p, fn) {
        var _hash = window.location.hash;        
        var obj = {
            '#daySalary': '/lottery/api/u/v1/daysalary/update_status',
            '#sifan': '/lottery/api/u/v1/privateRebate/update_status'
        };
        $.ajax({
            url: obj[_hash],
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getBonusCycList: function (p, fn) {
        $.ajax({
            url: Api.geturl('getBonusCycList', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getLowerBonusCycList: function (p, fn) {
        $.ajax({
            url: Api.geturl('getLowerBonusCycList', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getBonusDayList: function (p, fn) {
        var _hash = window.location.hash;        
        var obj = {
            '#daySalary': '/lottery/api/u/v1/bonus/getBonusDayList',
            '#sifan': '/lottery/api/u/v1/bonus/getBonusPrivateRebateList'
        };
        $.ajax({
            url: obj[_hash],
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getLowerBonusDayList: function (p, fn) {
        $.ajax({
            url: Api.geturl('getLowerBonusDayList', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    releaseBonusById: function (p, fn) {
        $.ajax({
            url: Api.geturl('releaseBonusById', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    batchReleaseBonusById: function (p, fn) {
        $.ajax({
            url: Api.geturl('batchReleaseBonusById', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    releaseSalaryById: function (p, fn) {
        $.ajax({
            url: Api.geturl('releaseSalaryById', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    batchReleaseSalaryById: function (p, fn) {
        $.ajax({
            url: Api.geturl('batchReleaseSalaryById', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getUserPointInfo: function (p, fn) {
        $.ajax({
            url: Api.geturl('getUserPointInfo', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    getAgentPointInfo: function (p, fn) {
        $.ajax({
            url: Api.geturl('getAgentPointInfo', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    haveContractInfo: function (p, fn) {
        $.ajax({
            url: Api.geturl('haveContractInfo', p),
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    /*判定密保问题 {type:"security"}  资金密码 {type:"paypassword"} */
    preChangeQueryAjax: function (d, fn) {
        $.ajax({
            url: "/sobet/userInfo/preChangeQueryAjax",
            type: 'GET',
            cache: false,
            dataType: 'json',
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //初次提交资金密码
    setPayPasswordAjax: function (d, fn) {
        $.ajax({
            url: "/sobet/userInfo/setPayPasswordAjax",
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    updatePayPassword: function (d, fn) {
        $.ajax({
            url: "/sobet/userInfo/updatePayPassword",
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //密保提交接口 /sobet/userInfo/securityQuestionAjax;
    securityQuestionAjax: function (d, fn) {
        $.ajax({
            url: "/sobet/userInfo/securityQuestionAjax",
            type: 'POST',
            cache: false,
            dataType: 'json',
            timeout: 30000,
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    securityQuestionAjaxGET: function (d, fn) {
        $.ajax({
            url: "/sobet/userInfo/securityQuestionAjax",
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //银行卡接口    http://www.link.com/sobet/pay/cardManageAjax
    cardManageAjax: function (d, fn) {
        $.ajax({
            url: "/sobet/pay/cardManageAjax",
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    /*站内信接口*/
    messageAjax: function (d, fn) {
        $.ajax({
            url: "/sobet/message/getPreAdminMessage_ajaxList",
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //删除站内信 http://www.mochen.com/sobet/message/deletePreAdminMessage.do?items=id%3D2%26
    getPreAdminMessage_ajaxList: function (d, fn) {
        $.ajax({
            url: "/sobet/message/deletePreAdminMessageAjax",
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
            data: d
        }).done(function (res) {
            fn(res);
        }).fail(function () {
            fn("error");
        });
    },
    //获取昵称
    getNickname: function (fn) {
        $.ajax({
            url: "/sobet/userInfo/userInfoAjax",
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    //更新昵称
    updateNickname: function (p, fn) {
        $.ajax({
            url: "/sobet/userInfo/updateNickName?nickName=" + p,
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    //首次登入触发接口 /sobet/userInfo/loginFirstTime
    loginFirstTime: function (fn) {
        $.ajax({
            url: " /sobet/userInfo/loginFirstTime",
            type: 'GET',
            cache: false,
            dataType: 'json',
            timeout: 30000,
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    //查询下级
    getLower: function (p, fn) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/sub_contact',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },

    //查询最近联系人
    recentContact: function (p, fn) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/recent_contact',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },

    //查询上级
    agentSearch: function (fn) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/agent_search',
            type: 'POST',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },

    //查询用户历史记录
    historyMsg: function (p, fn) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/history_message',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },

    //查询管理员消息
    adminMsg: function (p, fn) {
        $.ajax({
            url: Api.sso + '/message/getPreAdminMessage_ajaxList_history',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },

    //精确搜索下级
    searchLower: function (p, fn) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/sub_search',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    //更新读取上级的信息
    setMsgStatus: function (p) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/set_msg_status',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        })
    },
    //更新我读取的信息
    setUserMsgStatus: function (p) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/set_user_msg_status',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p
        })
    },
    //查询右侧栏是否有信息
    checkMsg: function (fn) {
        $.ajax({
            url: '/lottery/api/u/v1/chat/check_message',
            type: 'POST',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        })
    },
    //查询团队总余额
    userTeamPoint: function (fn) {
        $.ajax({
            url: '/sobet/api/userPointCheck/userTeamPoint',
            type: 'GET',
			cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    // 是否绑定微信
    queryWechatBind: function(fn, p) {
        $.ajax({
            url: '/sobet/pay/query_wechat_bind_info',
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: p || ''
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    // 获得微信二维码
    getWachatBindInfo: function(fn) {
        $.ajax({
            url: '/sobet/api/getWachatBindInfo',
            type: 'GET',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    // 查询验证码
    wechatBindXcode: function(fn) {
        $.ajax({
            url: '/sobet/pay/queryWechatBindCode',
            type: 'POST',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    },
    //中奖喜报
    getWinResultsList: function (cb) {
        var url = Api.url + Api.apimap.route['getWinResultsList'];
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            cache: false,
        }).done(function (res) {
            cb(res);
        }).fail(function (err) {
            cb(err);
        });
    },
    //绿标域名
    getGreenHttp: function (fn) {
        $.ajax({
            url: '/sobet/api/getGreenHttp',
            type: 'GET',
            cache: false,
            dataType: 'json'
        }).done(function (res) {
            fn(res);
        }).fail(function (res) {
            fn(res);
        });
    }
};
