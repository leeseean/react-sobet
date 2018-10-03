new Vue({
  el: '#vue-speed',
  data: {
    httpUrlArr: ['www.mcgame998.net', 'www.mcgame998.com', 'www.mochen999.net', 'www.mochen999.com', 'www.mochencards.com', 'www.volocn.com', 'www.whbman.com', 'www.nxjk99.com', 'wb.whbman.com', 'www.mcallin.com', 'wb.volocn.com', 'mc.xxgstz.com', 'mc.lszlzz.com', 'www.mochenpoker.com', 'mc.yirongmi.com', 'mm.whbman.com', 'mc.jhshjx.com', 'www.jhshjx.com', 'www.mochencards.com', 'www.szhscl.com', 'www.mochen5858.com', 'www.mochenmoney.com'],
    httpsUrlArr: ['www.mcgame998.net', 'www.mcgame998.com', 'www.mochen999.net', 'www.mochen999.com', 'www.mochencards.com', 'www.volocn.com', 'www.whbman.com', 'www.nxjk99.com', 'wb.whbman.com', 'www.mcallin.com', 'wb.volocn.com', 'mc.xxgstz.com', 'mc.lszlzz.com', 'www.mochenpoker.com', 'mc.yirongmi.com', 'mm.whbman.com', 'mc.jhshjx.com', 'www.jhshjx.com', 'www.mochencards.com', 'www.szhscl.com', 'www.mochen5858.com', 'www.mochenmoney.com'],
    itemsData: [{}, {}, {}, {}, {}, {}],
    itemsCount: 6,
    testing: false,
  },
  mounted() {
    this.testSpeed();
  },
  computed: {
    protocol() {
      return window.location.protocol;
    },
    urlArr() {
      if (this.protocol === 'http:') {
        return this.httpUrlArr;
      } else if (this.protocol === 'https:') {
        return this.httpsUrlArr;
      }
      return this.httpsUrlArr;
    },
  },
  methods: {
    getSpeedLink(url) {
      if (url) {
        return `${this.protocol}//${url}`;
      }
      return 'javascript: void(0)';
    },
    testSpeed() {
      if (this.testing) {
        return;
      }
      this.testing = true;
      const START_TIME = Date.now(); //开始时间
      let speedItemNum = 0; //呈现的链接数目，最多6个
      for (let index = 0; index < this.urlArr.length; index++) {
        const url = this.urlArr[index];
        const img = new Image();
        img.src = `${this.protocol}//${url}?random=${Math.random()}`;
        img.setAttribute('pureSrc', url);
        img.classList.add('speed-test-img');
        img.style.display = 'none';
        img.onerror = () => {
          const pureSrc = img.getAttribute('pureSrc');
          let time = (Date.now() - START_TIME) / 1000;
          time = time.toFixed(2);
          speedItemNum++;

          if (speedItemNum <= this.itemsCount) {
            this.itemsData.splice(speedItemNum - 1, 1, {
              time: time > 1 ? '1.00秒' : `${time}秒`, //不大于1秒
              url: pureSrc
            });
          }

          if (speedItemNum === this.itemsCount) {
            this.testing = false;
            document.querySelectorAll('.speed-test-img').forEach(img => document.body.removeChild(img));
          }
        };
        document.body.appendChild(img);
      };
    },
    selectThis(event) {
      event.target.select();
    },
  },
});