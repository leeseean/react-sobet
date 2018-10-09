/* jshint devel:true */

var Live = Live || {};

Live = {
    socket: null,
    start: function () {
        var me = this;

        me.socket = io.connect(User.local_url);

        var sig = Cookies.get('SIG');
        sig = encodeURI(sig);
        me.socket.on('connect', function () {
            me.socket.emit('login', {
                userName: User.name,
                sig: sig || '',
                appId: globeId(User.local_path)
            });
        });

        me.socket.on('message', function (d) {
            if (typeof d === 'string') {
                d = JSON.parse(d);
                if (d.type && d.type === 1) {
                    d = d['message'];
                    d = JSON.parse(d);
                } else if (d.type && d.type === 2) {
                    if (d.lottery === 'MCK3') {
                        IssueList.socketMsg = d;
                        IssueList.getRecent30Issue('message');//加个message来判断是不是socket触发调用                       
                    }
                }
            }
        });

        me.socket.on('disconnect', function () {
            // console.log('user disconnected!');
        });
    },
    resume: function () {
        var me = this;
        var sig = Cookies.get('SIG');
        sig = encodeURI(sig);
        me.socket.emit('login', {
            userName: User.name,
            sig: sig || '',
            appId: globeId(User.local_path)
        });
    },
    stop: function () {
        var me = this;
        me.socket.disconnect();
    },
};