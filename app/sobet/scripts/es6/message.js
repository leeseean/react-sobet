/**
 * Created by whyson on 2017/4/11.
 */
var message = message || {};
message = {
    currentPage: "",
    init: function () {
        let ds = {
            page: 1
        };
        var res = '<form id="queryForm" name="queryForm" action="">' +
            '<div class="results no-border">' +
            '<div class="tips usercenter">' +
            '<span>这里显示由本站发给您个人的信息</span>' +
            '<span class="d-btn"><a href="javascript:void(0)">删除</a></span>' +
            ' </div>' +
            '<table></table>' +
            '<div class="pagging">' +
            '</div></div></form>';

        $('#admin_history').html(res);
        //me.getHistoryParams();
        message.initEvent(ds);

        doinMessage();
        $('.box').click(function () {
            var input = $(this).prev('input');
            if (input.prop("checked") == false) {
                $(this).addClass("on");
                input.prop('checked', true)
            } else {
                $(this).removeClass("on");
                input.prop('checked', false)
            }
        })
    },
    initEvent: function (ds) {
        /*请求接口渲染出列表*/
        let me = this;
        Api.messageAjax(ds, data => {
            let datas = data.data;
            if (datas.length <= 0) {
                var htl = '<tr><td colspan="6" ><div class="notran-msg"><h6>您目前还没有收到任何消息</h6><div class="notran-msg-img"></div></div></td></tr>';
                $("#queryForm table ").html(htl);
                $("#queryForm .tips span a").off("click").css({
                    "background-color": "#eee",
                    "color": "#bcbcbc"
                })
            } else {
                $("#queryForm .tips span a").off("click").on("click", function () {
                    message.batchDelete()
                }).css({
                    "background-color": "#ff5243",
                    "color": "#fff"
                });
                let nowPage = data.nowPage;
                let pageCount = data.pageCount;
                let total = data.total;
                let $el = $("#queryForm");
                var pArr = ['<tr class="border">' +
                    '<th><input type="checkbox" id="allChecked" onclick="message.setAllCheckboxState(this.checked)"> <label for="allChecked">全选</label></th>' +
                    '<th>标题</th>' +
                    '<th>时间/日期</th>' +
                    '<th>消息类型</th>' +
                    '<th>操作</th>' +
                    '<th>状态</th></tr>'
                ];
                $.each(datas, (i, v) => {
                    let state = v.msgState;
                    let msgType = v.msgType;
                    var a = `<tr><td><input type="checkbox" name="items" value="${v.id}"><i class="box"></i></td><td id="titleTd">${v.title}</td>
                        <td>${v.createDate}</td><td>${message.createOperator(msgType)}</td><td id="contentTd"><div class="mes-content" title="${v.content}">${v.content}</div><span><a href="javascript:;" contractType="${v.content}">查看</a></span></td>
                        <td>${message.titState(state)}</td></tr>`;
                    pArr.push(a)
                });
                let html = pArr.join("");
                $("#queryForm table ").html(html);
                
                $('#queryForm .box').click(function () {
                    var input = $(this).prev('input');
                    if (input.prop("checked") == false) {
                        $(this).addClass("on");
                        input.prop('checked', true)
                    } else {
                        $(this).removeClass("on");
                        input.prop('checked', false)
                    }
                });

                var mc = $("#queryForm .mes-content");
                mc.each(function (i) {
                    var mcW = $(this).text().length;
                    $(this).hide();
                    $(this).next().show();
                    /*  if (mcW > 20) {
                           $(this).hide();
                           $(this).next().show();
                       } else {
                           $(this).parents('tr').removeClass('bold').find('td:contains("未读")').html('已读');
                           $(this).removeClass("mes-content").next().hide();
                       }*/
                });

                $("#contentTd span a").click(function () {
                    var con = $(this).parent().prev(".mes-content").text();
                    var msgTitle = $(this).parents('tr').find("#titleTd").text();
                    var wcw = $.trim(msgTitle).length;
                    wcw > 0 ? msgTitle = msgTitle : msgTitle = "标题为空";
                    //契约分红情况0日工资1分红 余额不足弹窗_0,_1,0 上级是平台，1上级是代理
                    if ($(this).attr('contractType').split(',')[1] == '1') {
                        var uper = '';
                        if($(this).attr('contractType').split(',')[2] == 0){
                            uper = '平台已与您签订了分红契约';
                        }else if($(this).attr('contractType').split(',')[2] == 1){
                            uper = '您的上级希望与您签订分红契约';
                        }
                        var d = dialog({
                            // quickClose: true,
                            fixed: true,
                            title: '契约通知',
                            content: `<p>尊敬的客户：</p>
                                      <p style="text-indent:30px;margin-top: 20px;">${uper}<span class="enterContract">点击进入</span></p>
                                      <p style="margin-top: 25px;">特此通知</p>
                                      <p style="position: absolute;right: 0;color: #4543CB;font-size: 12px;bottom: -15px;">摩臣娱乐</p>`,
                            onshow: function () {
                                $('.enterContract').css({
                                    'background': 'rgba(255, 82, 67, 1)',
                                    'border-radius': '5px',
                                    'color': '#FFFFFF',
                                    'padding': '2px 16px',
                                    'margin-left': '30px',
                                    'cursor': 'pointer'
                                }).click(function (e) {
                                    window.location.href = window.location.protocol +'//'+ window.location.host + '/static/sobet/agencyCenter.html#dividents';
                                });
                            }
                        });
                    } else if ($(this).attr('contractType').split(',')[1] == '0') {
                        var uper = '';
                        if($(this).attr('contractType').split(',')[2] == 0){
                            uper = '平台已与您签订了日工资契约';
                        }else if($(this).attr('contractType').split(',')[2] == 1){
                            uper = '您的上级希望与您签订日工资契约';
                        }
                        var d = dialog({
                            // quickClose: true,
                            fixed: true,
                            title: '契约通知',
                            content: `<p>尊敬的客户：</p>
                                      <p style="text-indent:30px;margin-top: 20px;">${uper}<span class="enterContract">点击进入</span></p>
                                      <p style="margin-top: 25px;">特此通知</p>
                                      <p style="position: absolute;right: 0;color: #4543CB;font-size: 12px;bottom: -15px;">摩臣娱乐</p>`,
                            onshow: function () {
                                $('.enterContract').css({
                                    'background': 'rgba(255, 82, 67, 1)',
                                    'border-radius': '5px',
                                    'color': '#FFFFFF',
                                    'padding': '2px 16px',
                                    'margin-left': '30px',
                                    'cursor': 'pointer'
                                }).click(function (e) {
                                    window.location.href = window.location.protocol +'//'+ window.location.host + '/static/sobet/agencyCenter.html#daySalary';
                                });
                            }
                        });
                    } else if ($(this).attr('contractType').split(',')[1] == '_1') {
                        var d = dialog({
                            title: '支付下级分红不足通知',
                            // quickClose: true,
                            content: `<p>尊敬的客户：</p>
                                      <p style="text-indent:30px;margin-top: 20px;">您的可用余额不足以发放您的下级分红，需要您充值后手动发放。</p>
                                      <p style="margin-top: 25px;">特此通知</p>
                                      <p style="position: absolute;right: 0;color: #4543CB;font-size: 12px;bottom: -15px;">摩臣娱乐</p>`,
                            button: [{
                                value: '立即充值',
                                callback: function () {
                                    window.location.href = window.location.protocol +'//'+ window.location.host + '/sobet/pay/rechargeIndexView';
                                }
                            }]
                        });
                    } else if ($(this).attr('contractType').split(',')[1] == '_0') {
                        var d = dialog({
                            title: '支付下级日工资不足通知',
                            // quickClose: true,
                            content: `<p>尊敬的客户：</p>
                                      <p style="text-indent:30px;margin-top: 20px;">您的可用余额不足以发放您的下级日工资，需要您充值后手动发放。</p>
                                      <p style="margin-top: 25px;">特此通知</p>
                                      <p style="position: absolute;right: 0;color: #4543CB;font-size: 12px;bottom: -15px;">摩臣娱乐</p>`,
                            button: [{
                                value: '立即充值',
                                callback: function () {
                                    window.location.href = window.location.protocol +'//'+ window.location.host + '/sobet/pay/rechargeIndexView';
                                }
                            }]
                        });
                    } else {
                        var d = dialog({
                            fixed: true,
                            title: msgTitle,
                            content: con,
                            okValue: "确定"
                        });
                        d.width(360);
                    }

                    d.showModal();
                    if ($(this).parents('tr').find('td:last').html() == "未读") {
                        var id = $(this).parents('tr').find('input[name="items"]').val();
                        Api.updateMessageUserById({
                            id: id,
                            type: 0
                        }, function (d) {});
                    }
                    $(this).parents('tr').removeClass('bold').find('td:contains("未读")').html('已读');

                });
                //分页
                $el.find('.pagging').html(Q.showPagination(nowPage, 10, total, pageCount + 1));
                $el.find('.pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    let ds = {
                        page: $(this).attr('page')
                    };
                    message.initEvent(ds);
                });
            }
        });
    },
    //处理查看页面
    createOperator: function (msgType) {
        if (msgType == 0) {
            return "系统消息";
        } else if (msgType == 1) {
            return "用户消息";
        } else {
            return "其他";
        }
    },
    /*状态*/
    titState: function (state) {
        if (state == 1) {
            return "已读";
        } else {
            return "未读";
        }
    },
    setAllCheckboxState: function (state) {
        var name = $("input[name='items']");
        for (var i = 0; i < name.length; i++) {
            var box = $(name[i]).next();
            name[i].checked = state;
            if (state == true) {
                box.addClass('on');
            } else {
                box.removeClass('on');
            }
        }
    },
    batchDelete: function () {
        var me = this;
        me.currentPage = '';
        if (!message.hasOneChecked("items")) {
            alert('请选择要删除的内容!');
            return;
        } else {
            if (confirm('确定要[删除]吗?')) {
                var items = document.getElementsByName("items");
                for (var i = 0; i < items.length; i++) {
                    if (items[i].checked == true) {
                        me.currentPage += $(items[i]).val() + ",";
                    }
                }
                Api.getPreAdminMessage_ajaxList({
                    items: me.currentPage
                }, d => {
                    d.code == 0 ? me.initEvent() : alert(d.msg)
                })
            }
        }
    },
    hasOneChecked: function (name) {
        var items = document.getElementsByName(name);
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].checked == true) {
                    return true;
                }
            }
        } else {
            if (items.checked == true) {
                return true;
            }
        }
        return false;
    },
};