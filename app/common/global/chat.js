/**
 * Created by thomas on 2017/9/21.
 * description: 上下级通讯聊天.
 */

var Chat = Chat || {};

Chat = {
    socket: null,
    hidden: 1, // 判断聊天框显示状态 1为隐藏 0为显示
    name: null,
    id : null,
    unread: null,
    userType: null,
    toUserName: null,
    toUserId: null,
    toUserType: 'admin',
    agentUserName: null,
    agentUserId: null,
    historyObj:{},
    adminPage: 2,
    audioUrl: '/static/sobet/media/msg.mp3',
    isAudioMsg: localStorage.getItem('isAudioMsg') || 'on',
    init: function () {
        var me = this;
        me.initUserItem();

        $('.user-search input').on('keydown', function (e) {
            var val = $(this).val();
            if(e.keyCode === 13) {
                $('.chat-search .btn-search').click();
            }
            if (val) {
                $('.user-search .icon-delete').show();
            } else {
                $('.user-search .icon-delete').hide();
            }
        });

        $('.user-search .icon-delete').off('click').on('click', function () {
            $('.user-search input').val('');
            $('.user-search .icon-delete').hide();
            $('.user-search input').focus();
        });

        $('.chat-search .btn-search').off('click').on('click', function () {
            var name = jQuery.trim($('.user-search input').val());
            if(!name) {
                return;
            }
            var user = {userName: name};
            Api.searchLower(user, function (d) {
                if(d.code === 1) { // 成功
                    d = d.result;
                    var $user = $('.list-recent .user-item[data-id='+ d.userId +']')[0];
                    var online = ['', 'online'];
                    if(!$user) {
                        var name = d.userName.toLowerCase() === d.nikeName ? d.userName : d.userName + '(' + d.nikeName + ')';
                        $user = '<li class="user-item ' + online[d.onLine] + '" title="' + name + '" data-type="lower" data-name="' + d.userName + '" data-id="' + d.userId + '"><i class="icon icon-lower"></i><span>' + name + '</span></li>';
                        $($user).prependTo('.list-recent');
                        me.initUserItem();
                        $('.list-recent .user-item[data-id='+ d.userId +']').click();
                    } else {
                        $user.click();
                    }
                } else if(d.code === 2) { // 服务异常
                    layer.tips('服务异常', '.btn-search', {
                        tips: [3, '#3595cc'],
                        time: 1000
                    });
                } else if(d.code === 3) { // 没有此下级
                    layer.tips('无该联系人，请重新输入', '.btn-search', {
                        tips: [3, '#3595cc'],
                        time: 1000
                    });
                }
            });

        });

        $('.lower-list .title').off('click').on('click', function () {
            var $list = $(this).next('ul');
            var $parent = $(this).parent();
            $(this).toggleClass('on');
            $parent.toggleClass('off');
            $list.toggle();
            if (!$parent.siblings().hasClass('off')) {
                $parent.siblings().toggleClass('off');
                $parent.siblings().children('.title').toggleClass('on');
                $parent.siblings().children('ul').toggle();

            }
            if ($parent.hasClass('off')) {
                if ($parent.hasClass('recent-list') && $('.list-recent .user-item').hasClass('unread')) {
                    $parent.addClass('unread');
                } else {
                    $parent.removeClass('unread');
                }
            }

        });

        $('.user-list .setting').off('click').on('click', function () {
            var chatSet = '<div class="chat-setting">\
                               <div class="set-top"><i class="icon-setting"></i>新注册的下级首次登录将收到如下信息 (100字以内)<i class="icon-switch"></i></div>\
                               <div class="set-main">\
                                   <div class="setMsg"><i class="icon-setMsg"></i></div>\
                                   <textarea class="set-content" maxlength="100"></textarea>\
                               </div>\
                           </div>';
            var chatSetMsg = layer.open({
                id: 'chat-set',
                type: 1,
                title: false,
                skin: 'chat-layer chat-set',
                area: ['880px','645px'],
                fixed: true,
                btn: ['保存', '取消'],
                btnAlign: 'c',
                closeBtn: true,
                content: chatSet,
                success: function () {
                    $('.set-top .icon-switch').off('click').on('click', function () {
                        $(this).toggleClass('icon-switchOpen');
                        if($(this).hasClass('icon-switchOpen')) {
                            $('.setMsg').hide();
                            $('.set-content').show();
                        } else {
                            $('.setMsg').show();
                            $('.set-content').hide();
                        }
                    })
                },
                yes: function () {
                    layer.close(chatSetMsg);
                },
                btn2: function () {
                }
            });
        });

        $('.chat-enter .send').off('click').on('click', function () {
            var name = me.toUserName;
            var id = me.toUserId;
            var type = me.toUserType;
            var inputMsg = jQuery.trim($('.chat-enter .msg').val());
            if(!inputMsg) {
                return;
            }
            if(me.toUserType === 'allLower') {
                id = me.id;
            }

            var uuid = generateUUID();
            var msg = {
                '@class': 'com.sobet.lottery.push.bean.Message',
                messageId: uuid,
                toUserName: name,
                toUserId: parseInt(id),
                fromUserName: me.name,
                fromUserId: me.id,
                message: inputMsg,
            };

            switch (type){
                case 'lower':
                    msg.msgtype = 1;
                    msg.userMsgType = 1;
                    break;
                case 'allLower':
                    msg.msgtype = 2;
                    break;
                case 'agent':
                    msg.msgtype = 1;
                    msg.userMsgType = 2;
                    break;
                default:
                    break;
            }


            var tpl = '<dd class="myself" data-msgid="' + uuid + '"><span class="msg-time"><i class="chat-loading"></i></span><span class="msg-content">' + inputMsg + '</span></dd>';
            $('.msg-lists').append(tpl);
            $('.chat-content').scrollTop($('.msg-lists')[0].scrollHeight);
            $('.chat-enter .msg').focus().val('');
            me.socket.emit('chat_message', msg, function (d) {
                if(d.code === 1) {
                    d = d.result;
                    var time = me.getDateYestoday(d.createTime);
                    var msgId = d.messageId;
                    $('.msg-lists dd[data-msgid='+msgId+']').attr('data-id', d.id);
                    $('.msg-lists dd[data-msgid='+msgId+'] .msg-time').html(time);
                }
            });


        });

        $('.chat-enter .msg').focus(function () {
            $(this).keydown(function (e) {
                if(e.keyCode === 13) {
                    e.preventDefault();
                    $('.chat-enter .send').trigger('click');
                }
            })
        });

        $('.chat-content .more').off('click').on('click', function () {
            var $this = $(this);
            if($this.find('i').hasClass('loading') || $this.hasClass('no-more')) {
                return;
            }
            $this.html('<i class="loading"></i>');
            var type = me.toUserType;
            var obj = {};
            switch (type) {
                case 'lower':
                    obj.fromUserId = me.toUserId;
                    obj.msgType = '1,2';
                    obj.searchType = '1';
                    obj.messageId = $('.msg-lists dd').first().data('id');
                    break;
                case 'agent':
                    obj.fromUserId = me.agentUserId;
                    obj.msgType = '1,2';
                    obj.searchType = '2';
                    obj.messageId = $('.msg-lists dd').first().data('id');
                    break;
                case 'allLower':
                    obj.msgType = '2';
                    obj.searchType = '1';
                    obj.messageId = $('.msg-lists dd').first().data('id');
                    break;
                case 'admin':
                    obj.page = me.adminPage;
                    ++ me.adminPage ;
                    break;
                default:
                    break;
            }
            getMoreHistory(type);
            function getMoreHistory(type) {
                var tpl = '';
                if(type === 'admin') {
                    Api.adminMsg(obj, function (d) {
                        d = d.data;
                        if(d.length === 0) {
                            $this.addClass('no-more').html('没有更多记录了');
                            return;
                        }
                        for(var i = 0; i <= d.length - 1; i ++) {
                            tpl += '<dd class="another" data-id="' + d[i].id + '"><div class="avatar"></div><span class="msg-content">' + d[i].content + '</span><span class="msg-time">' + me.getDateYestoday(d[i].createDate) + '</span></dd>';
                        }
                        $('.msg-lists').prepend(tpl);
                        $this.html('查看更多历史记录');
                    })
                } else {
                    Api.historyMsg(obj, function (d) {
                        if(d.code === 1) {
                            d = d.result;
                            if(d.length === 0) {
                                $this.addClass('no-more').html('没有更多记录了');
                                return;
                            }
                            for(var i = 0; i <= d.length - 1; i ++) {
                                if(d[i].fromUserId === me.id) {
                                    tpl += '<dd class="myself" data-id="' + d[i].id + '"><span class="msg-time">' + me.getDateYestoday(d[i].createTime) + '</span><span class="msg-content">' + d[i].message + '</span></dd>';
                                } else {
                                    tpl += '<dd class="another" data-id="' + d[i].id + '"><div class="avatar"></div><span class="msg-content">' + d[i].message + '</span><span class="msg-time">' + me.getDateYestoday(d[i].createTime) + '</span></dd>';
                                }
                            }
                            $('.msg-lists').prepend(tpl);
                            $this.html('查看更多历史记录');
                        }
                    })
                }
            }
        });

        me.initAudioMsg();
    },

    initUserItem: function () {
        var me = this;
        $('.user-list .user-item').off('click').on('click', function () {
            var title = $(this).html();
            var type = $(this).data('type');
            var name;
            var id;
            var forageName;
            me.toUserType = type;
            me.historyObj = {};

            $('.user-item').removeClass('on');
            $(this).addClass('on');

            if($('.user-item').hasClass('unread')) {
                $('.toChat').addClass('unread');
            } else {
                $('.toChat').removeClass('unread');
            }

            $('.chat-title').html(title);
            $('.chat-content').attr('data-type', type);
            if($(this).hasClass('unread')) {
                $(this).removeClass('unread');
            }
            if(!$('.list-recent .user-item').hasClass('unread')) {
                $('.recent-list').removeClass('unread');
            }
            if (type === 'allLower') {
                $('.chat-enter').show();
                $('.chat-content').removeClass('no-input');
                $('.chat-title span').text('下级群发');
                name = 'allLower';
                id = me.id + '777888999';
                forageName = id.toString();
                me.historyObj.msgType = '2';
                me.historyObj.searchType = '1';
                me.historyObj.fromUserId = me.id;
            } else if (type === 'admin') {
                $('.chat-enter').hide();
                $('.chat-content').addClass('no-input');
                name = 'admin';
                id = me.name + '_admin';
                forageName = id.toString();
                me.historyObj.page = 1;
                me.adminPage = 2;
                Api.setMsgStatus({msgType: 1});
            } else if (type === 'agent') {
                $('.chat-enter').show();
                $('.chat-content').removeClass('no-input');
                name = me.agentUserName;
                id = me.agentUserId;
                forageName = id + '-' + $(this).data('id');
                me.historyObj.msgType = '1,2';
                me.historyObj.searchType = '2';
                me.historyObj.fromUserId = id;
                Api.setMsgStatus({msgType: 2});
            } else {
                $('.chat-enter').show();
                $('.chat-content').removeClass('no-input');
                name = $(this).data('name');
                id = $(this).data('id');
                forageName = $(this).data('id') + '-' + me.agentUserId;
                me.historyObj.msgType = '1,2';
                me.historyObj.searchType = '1';
                me.historyObj.fromUserId = id;
                Api.setUserMsgStatus({fromUserId: id});
            }

            me.toUserName = name;
            me.toUserId = id;

            $('.chat-content .msg-lists').html('');
            $('.chat-enter .msg').val('');

            localforage.getItem(forageName, function (err, res) {
                if(!err) {
                    if(res) {
                        me.renderMsg(res);
                    }
                    me.getHistory(type, me.historyObj);
                }
            })
        });
    },

    initAudioMsg: function () {
        var me = this;
        if (me.isAudioMsg == 'on') {
            $('#chat .msg-voice').removeClass('off').text('关闭提示音');
        } else {
            $('#chat .msg-voice').addClass('off').text('打开提示音');
        }
        $('#chat .msg-voice').off('click').on('click', function(){
            $(this).toggleClass('off');
            if ($(this).hasClass('off')) {
                $(this).text('打开提示音');
                me.isAudioMsg = 'off';
                localStorage.setItem('isAudioMsg', 'off');
            } else {
                $(this).text('关闭提示音');
                me.isAudioMsg = 'on';
                localStorage.setItem('isAudioMsg', 'on');
            }
        })
    },

    start: function() {
        var me = this;
        me.socket = io(User.local_url + '/chat?userName=' + me.name + '&appId=1', {path:'/onlineio', forceNew: true});

        me.socket.on('connect', function() {
            //console.log('connected! start to login...');
        });

        me.socket.on('disconnect', function() {
            // console.log('user disconnected!');
        });

        me.socket.on('chat_onoffline', function(d) { // 用户上线下线
            if(d.agentId === me.agentUserId) {
                return;
            }
            var $list = $('.list-lower .user-item[data-id='+ d.myUserId +']');
            var $recent = $('.list-recent .user-item[data-id='+ d.myUserId +']');
            var status = d.status;
            if(status === 1) {
                $recent.addClass('online');
                if($list[0]) {
                    $list.addClass('online').insertAfter('.user-item[data-type=allLower]');
                } else {
                    var name = d.myName.toLowerCase() === d.nikeName ? d.myName : d.myName + '(' + d.nikeName + ')';
                    var list = '<li class="user-item online" title="' + name + '" data-type="lower" data-name="' + d.myName + '" data-id="' + d.myUserId + '"><i class="icon icon-lower"></i><span>' + name + '</span></li>';
                    list.insertAfter('.user-item[data-type=allLower]');
                }
                var onlineCount = $('.list-lower .user-item.online').length;
                $('.onlineCount').html(onlineCount);
            } else if (status === 2) {
                var $online = $('.list-lower .user-item:not(.online)[data-type=lower]').first();
                $list.removeClass('online').insertBefore($online);
                $recent.removeClass('online');
                var onlineCount = $('.list-lower .user-item.online').length;
                $('.onlineCount').html(onlineCount);
            }

        });

        me.socket.on('chat_admin', function(d) { // 管理员消息
            me.msgAudio();
            if(me.toUserType === 'admin') {
                me.renderMsg(d);
                Api.setMsgStatus({msgType: 1});
            } else {
                $('.user-item[data-type=admin]').addClass('unread');
                $('.toChat').addClass('unread');
            }
            if(me.hidden === 1) {
                $('.toChat').addClass('unread');
            }
            var forageName = 'admin' + me.id;
            me.setLocalForage(forageName, d);
        });

        me.socket.on('chat_message', function(d) { // 聊天消息
            var acceptType = d.acceptType; // 接收消息类型。1 普通点对点接收消息 2广播自己的消息类型 3广播群发下级的消息类型
            var msgId = d.messageId;
            var forageName;
            var $first = $('.list-recent .user-item').first();

            switch (acceptType){
                case 1:
                    me.msgAudio();
                    if(d.fromUserId != me.toUserId && d.fromUserId != me.agentUserId) {
                        if($('.list-recent .user-item[data-id='+ d.fromUserId +']')[0]) {
                            $('.list-recent .user-item[data-id='+ d.fromUserId +']').addClass('unread');
                            $('.list-recent .user-item[data-id='+ d.fromUserId +']').prependTo('.list-recent');
                        } else {
                            var recentMsg = $('.list-lower .user-item[data-id='+ d.fromUserId +']').clone(true);
                            recentMsg.prependTo('.list-recent');
                            $('.list-recent .user-item[data-id='+ d.fromUserId +']').addClass('unread');
                        }
                        $('.toChat').addClass('unread');
                        if($('.recent-list').hasClass('off')) {
                            $('.recent-list').addClass('unread');
                        }
                    } else if(d.fromUserId != me.toUserId && d.fromUserId === me.agentUserId){
                        $('.user-item.user-agent').addClass('unread');
                        $('.toChat').addClass('unread');
                    } else {
                        if(!$('.msg-lists dd[data-msgid='+msgId+']')[0]) {
                            me.renderMsg(d);
                        }
                        if (me.hidden === 1) {
                            $('.toChat').addClass('unread');
                        }
                        Api.setUserMsgStatus({fromUserId: d.fromUserId});
                        $('.list-recent .user-item[data-id='+ d.fromUserId +']').prependTo('.list-recent');
                    }
                    forageName = d.fromUserId.toString() + '-' + d.toUserId.toString();
                    me.setLocalForage(forageName, d);
                    break;
                case 2:
                    if(d.toUserId === me.toUserId) {
                        if(!$('.msg-lists dd[data-msgid='+msgId+']')[0]) {
                            me.renderMsg(d);
                        }
                    }
                    if($('.list-recent .user-item[data-id='+ d.toUserId +']')[0]) {
                        $('.list-recent .user-item[data-id='+ d.toUserId +']').prependTo('.list-recent');
                    } else {
                        var recentMsg = $('.list-lower .user-item[data-id='+ d.toUserId +']').clone(true);
                        recentMsg.insertBefore($first);
                    }
                    forageName = d.toUserId.toString() + '-' + d.fromUserId.toString();
                    me.setLocalForage(forageName, d);
                    break;
                case 3:
                    me.msgAudio();
                    if(d.fromUserId != me.toUserId && d.fromUserId === me.agentUserId){
                        $('.user-item.user-agent').addClass('unread');
                        $('.toChat').addClass('unread');
                    } else {
                        if(!$('.msg-lists dd[data-msgid='+msgId+']')[0]) {
                            me.renderMsg(d);
                        }
                        Api.setMsgStatus({msgType: 2});
                    }
                    forageName = me.id + '777888999';
                    me.setLocalForage(forageName, d);
                    break;
                default:
                    break;
            }

        });
    },

    msgAudio: function () {
        var me = this;
        if (me.isAudioMsg == 'off') {
            return;
        }
        if (!document.getElementById('msg-audio')) {
            var audio = new Audio(me.audioUrl);
            audio.id = 'msg-audio';
            document.body.appendChild(audio);
            audio.play();
            return;
        }
        document.getElementById('msg-audio').play();
    },

    initUser: function () {
        var me = this;
        var page = {
            currPage: 1,
            pageSize: 200
        };
        var online = ['', 'online'];
        Api.getLower(page, function (d) {
            if(d.code === 1) {
                d = d.result;
                if(d.list.length === 0) {
                    $('.user-lower').hide();
                    return;
                }
                var total = '(<em class="onlineCount">' + d.onlineCount + '</em>/' + d.count + ')';
                $('.online-total').html(total);

                var list = '<li class="user-item" data-type="allLower"><i class="icon icon-allLower"></i><span>下级群发</span></li>';
                d = d.list;
                for (var i = 0; i <= d.length - 1; i ++) {
                    var name = d[i].userName.toLowerCase() === d[i].nikeName ? d[i].userName : d[i].userName + '(' + d[i].nikeName + ')';
                    list += '<li class="user-item ' + online[d[i].online] + '" title="' + name + '" data-type="lower" data-name="' + d[i].userName + '" data-id="' + d[i].userId + '"><i class="icon icon-lower"></i><span>' + name + '</span></li>';
                }
                $('.list-lower').html(list);
            }
        });

        Api.recentContact(page, function (d) {
            if(d.code === 1) {
                if(!(d.result)) {
                    return;
                }
                d = d.result;
                var list = '';
                for (var i = 0; i <= d.length - 1; i ++) {
                    var unread = d[i].unReadSize > 0 ? 'unread' : '';
                    var name = d[i].userName.toLowerCase() === d[i].nikeName ? d[i].userName : d[i].userName + '(' + d[i].nikeName + ')';
                    list += '<li class="user-item ' + online[d[i].online] + ' '+ unread + '" title="' + name + '" data-type="lower" data-name="' + d[i].userName + '" data-id="' + d[i].userId + '"><i class="icon icon-lower"></i><span>' + name + '</span></li>';
                }
                $('.list-recent').html(list);
                if($('.list-recent .user-item').hasClass('unread')) {
                    $('.recent-list').addClass('unread');
                }
            }
        });
    },

    initAgent: function () {
        var me = this;
        Api.agentSearch(function (d) {
            if (d.code === 1) {
                d = d.result;
                me.agentUserName = me.name + '_agent';
                me.agentUserId = d.userId;
                if(d.unReadSize) {
                    $('.user-item.user-agent').addClass('unread');
                }
            }
        })
    },

    getHistory: function (type, p) {
        var me = this;
        var forageName;
        if(type === 'admin') {
            Api.adminMsg(p, function (d) {
                d = d.data;
                if(p.page === 1) {
                    forageName = me.name + '_admin';
                    localforage.removeItem(forageName);
                    me.setLocalForage(forageName, d);
                }
                if(d.length === 0) {
                    $('.chat-content .more').hide();
                    return;
                } else if(d.length < 20) {
                    $('.chat-content .more').hide();
                } else {
                    $('.chat-content .more').removeClass('no-more');
                    $('.chat-content .more').html('查看更多历史记录').show();
                }
                if(me.toUserType === 'admin') {
                    me.renderMsg(d);
                }
            })
        } else {
            Api.historyMsg(p, function (d) {
                if(d.code === 1) {
                    d = d.result;
                    if(p.messageId === undefined) {
                        forageName = me.toUserId.toString();
                        localforage.removeItem(forageName);
                        me.setLocalForage(forageName, d);
                    }
                    if(d.length === 0) {
                        $('.chat-content .more').hide();
                        return;
                    } else if(d.length < 20) {
                        $('.chat-content .more').hide();
                    } else {
                        $('.chat-content .more').removeClass('no-more');
                        $('.chat-content .more').html('查看更多历史记录').show();
                    }
                    if(me.toUserId === p.fromUserId || me.toUserType === 'allLower') {
                        me.renderMsg(d);
                    }
                }
            })
        }

    },

    renderMsg: function (d) {
        var me = this;
        var tpl = '';
        if(!d) {
            return;
        }
        if(!(d instanceof Array)) {
            var arr = [];
            arr.push(d);
            d = arr;
        }
        for(var i = 0; i <= d.length - 1; i ++) {
            if(d[i].content) {
                if(!$('.msg-lists dd[data-id=' + d[i].id + ']')[0]) {
                    tpl += '<dd class="another" data-id="' + d[i].id + '"><div class="avatar"></div><span class="msg-content">' + d[i].content + '</span><span class="msg-time">' + me.getDateYestoday(d[i].createDate) + '</span></dd>';
                }
            } else {
                if(!$('.msg-lists dd[data-id=' + d[i].id + ']')[0]) {
                    if(d[i].fromUserId === me.id) {
                        tpl += '<dd class="myself" data-id="' + d[i].id + '"><span class="msg-time">' + me.getDateYestoday(d[i].createTime) + '</span><span class="msg-content">' + d[i].message + '</span></dd>';
                    } else {
                        tpl += '<dd class="another" data-id="' + d[i].id + '"><div class="avatar"></div><span class="msg-content">' + d[i].message + '</span><span class="msg-time">' + me.getDateYestoday(d[i].createTime) + '</span></dd>';
                    }
                }
            }
        }
        $('.msg-lists').append(tpl);
        $('.chat-content').scrollTop($('.msg-lists')[0].scrollHeight);
    },


    setLocalForage: function(forageName,data){
        var maxLen = arguments[2] || 20;
        localforage.getItem(forageName,function(err,res){
            if(!err){
                if(res){
                    var msgId = res.map(function (v) {
                        return v.messageId;
                    });
                    if(msgId.indexOf(data.messageId) === -1) {
                        res.length>= maxLen && (res.shift());
                        res.push(data);
                        localforage.setItem(forageName,res);
                    }
                }else{
                    //1缓存中没有与此人聊天记录,2或者是ajax获取的历史记录，直接覆盖本地缓存,
                    var arr = [];
                    if(data.constructor==Array){
                        for(var i=0,len=data.length;i<len;i++){
                            arr[i] = data[i];
                        }
                    }else{
                        arr[0] = data;
                    }
                    localforage.setItem(forageName,arr);
                }
            }
        })
    },

    formatDateTime:function(inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        var t='',p=arguments[2]===true?'':(arguments[2]?arguments[2]:'-');
        switch(arguments[1]){
            case 'y': //年
                t = y;
                break;
            case 'ym': //年月
                t = y + p + m;
                break;
            case 'ymd': //年月日
                t = y + p + m + p + d;
                break;
            case 'mdhms'://月日时分秒
                t = m + p + d+' '+h+':'+minute+':'+second;
                break;
            case 'hms': //时分秒
                t = h+':'+minute+':'+second;
                break;
            case 'hm': //时分
                t = h+':'+minute;
                break;
            default: //年月日时分秒
                t = y + p + m + p + d+' '+h+':'+minute+':'+second;
        }
        return t;
    },

    getDateYestoday:function(s){
        var me=this,
            arr = s.split(' '),
            t = parseInt(arr[0].replace(/-/g,'')),
            nowDate = parseInt(me.formatDateTime(Date.parse(new Date()),'ymd',true)),
            time;
        switch (nowDate - t){
            case 0://当天的
                time = arr[1].substring(0,5);
                break;
            case 1://昨天
                time = '昨天';
                break;
            case 2://前天
                time = '前天';
                break;
            default: //2天前
                time = arr[0];
                break;
        }
        return time;
    },

};
function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};
