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
      // console.log('connected! start to login...');
      me.socket.emit('login', {
        userName: User.name,
        sig: sig || '',
        appId: globeId(User.local_path)
      });
    });

    me.socket.on('message', function (d) {
      // console.info('收到消息');
      // console.log(d);
      if (typeof d === 'string') {
        d = JSON.parse(d);
        if (d.type !== undefined && d.type === 1) {
          d = d['message'];
          d = JSON.parse(d);
          // console.log(d);
          Lottery.getUserMoney();
        } else if (d.type !== undefined && d.type === 2) {
          if (Lottery.lt == d.lottery) {
            if (Lottery.lt === 'BJPK10' || Lottery.lt === 'MCPK10') {
              PKAni.ani = true;
            } else if (Lottery.lt === 'XGPK10') {
              XGPKAni.ani = true;
            }
            //console.info('更新中奖号码');
            Lottery.noanimation = false;
            Lottery.updateIssueInfo(1);
            Lottery.getIssueInfoLast('message'); //开奖时由于没有特殊处理，百期热度会重复append，因此会出现多组号码，传这个参数做判断
            if (Lottery.lt !== 'XGLHC') {
              setTimeout(() => {
                Lottery.updateRecency(); //更新投注记录
                setTimeout(() => {
                  Lottery.updateRecency();//以防拿不到数据再调一次
                }, 5000);
              }, 2000);
            }
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