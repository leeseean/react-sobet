<template>
  <div id="vue-chart">
    <div class="lottery-top-wrap">
      <div class="lottery-select-wrap">
        <lottery-type-select :lottery-config="lotteryConfig" :lottery-type="lotteryType" @receive-lottery-type="receiveLotteryType"></lottery-type-select>
        <lottery-select :lottery-arrs="lotteryArrs" :lottery-default-obj="lotteryDefaultObj" :lottery-type="lotteryType" :lottery="lottery"
          @receive-lottery="receiveLottery"></lottery-select>
      </div>
      <div class="lottery-tab-wrap">
        <lottery-tab :tab-default-obj="tabDefaultObj" :tabs-arr="tabsArr" :lottery-type="lotteryType" :lottery="lottery" @receive-tab="receiveTab"></lottery-tab>
      </div>
      <div class="chart-option-wrap clearfix">
        <chart-option :checked-config="checkedConfig"></chart-option>
        <lottery-issue-period :issue-period-config="issuePeriodConfig" @receive-period="receivePeriod"></lottery-issue-period>
      </div>
    </div>
    <div class="chart-table-wrap">
      <div class="table-inner-wrap">
        <chart-table v-if="tabCode !== 'ssc-qw&nn'" :trend-data="trendData" :pos-config="posConfig" :tab-code="tabCode" :select-num-obj="selectNumObj"
          :lottery-type="lotteryType" :lottery="lottery"></chart-table>
        <normal-table v-if="tabCode === 'ssc-qw&nn'" :trend-data="trendData" :pos-config="posConfig" :tab-code="tabCode" :select-num-obj="selectNumObj"
          :lottery-type="lotteryType" :lottery="lottery" :is-miss="isMiss"></normal-table>
      </div>
    </div>
  </div>
</template>

<script>
  import chartOption from './components/chartOption'
  import chartTable from './components/chartTable'
  import lotteryIssuePeriod from './components/lotteryIssuePeriod'
  import lotterySelect from './components/lotterySelect'
  import lotteryTab from './components/lotteryTab'
  import lotteryTypeSelect from './components/lotteryTypeSelect'
  import normalTable from './components/normalTable'

  import {
    offsetDis
  } from './assets/js/utils'

  export default {
    name: 'App',
    components: {
      chartOption,
      chartTable,
      lotteryIssuePeriod,
      lotterySelect,
      lotteryTab,
      lotteryTypeSelect,
      normalTable
    },
    data() {
        return {
            lotteryType: 'ssc',
            lottery: 'CQSSC',
            tabCode: 'ssc-5x',
            trendData: [],
            lotteryConfig: {
              'ssc': {
                typeCnName: '时时彩系列',
                lotteries: [{
                    'code': 'CQSSC',
                    'cnName': '重庆时时彩'
                  },
                  {
                    'code': 'TJSSC',
                    'cnName': '天津时时彩'
                  },
                  {
                    'code': 'XJSSC',
                    'cnName': '新疆时时彩'
                  },
                  {
                    'code': 'XN5FC',
                    'cnName': '悉尼5分彩'
                  },
                  {
                    'code': 'HN5FC',
                    'cnName': '河内5分彩'
                  },
                  {
                    'code': 'RDFFC',
                    'cnName': '瑞典1分彩'
                  },
                  {
                    'code': 'RDLFC',
                    'cnName': '瑞典2分彩'
                  },
                  {
                    'code': 'RBSSM',
                    'cnName': '日本30秒'
                  },
                  {
                    'code': 'QQSSM',
                    'cnName': 'QQ30秒'
                  },
                  {
                    'code': 'WBGFFC',
                    'cnName': 'WBG分分彩'
                  },
                  {
                    'code': 'WBGMMC',
                    'cnName': 'WBG秒秒彩'
                  },
                  {
                    'code': 'TXFFC',
                    'cnName': '腾讯分分彩'
                  },
                  {
                    'code': 'TX1FC',
                    'cnName': '腾讯1分彩'
                  },
                  {
                    'code': 'WBG5FC',
                    'cnName': 'WBG5分彩'
                  },
                  {
                    'code': 'TCP5',
                    'cnName': '排列5'
                  },
                ],
                tabs: [{
                    en: 'ssc-5x',
                    cn: '五星'
                  },
                  {
                    en: 'ssc-4x',
                    cn: '四星'
                  },
                  {
                    en: 'ssc-q3',
                    cn: '前三'
                  },
                  {
                    en: 'ssc-z3',
                    cn: '中三'
                  },
                  {
                    en: 'ssc-h3',
                    cn: '后三'
                  },
                  {
                    en: 'ssc-q2',
                    cn: '前二'
                  },
                  {
                    en: 'ssc-h2',
                    cn: '后二'
                  },
                  {
                    en: 'ssc-qw&nn',
                    cn: '趣味玩法&牛牛'
                  }
                ]
              },
              '11y': {
                typeCnName: '11选5系列',
                lotteries: [{
                    'code': 'GD11Y',
                    'cnName': '广东11选5'
                  },
                  {
                    'code': 'AH11Y',
                    'cnName': '安徽11选5'
                  },
                  {
                    'code': 'MC11Y',
                    'cnName': '摩臣11选5'
                  },
                  {
                    'code': 'SD11Y',
                    'cnName': '山东11选5'
                  },
                  {
                    'code': 'JX11Y',
                    'cnName': '江西11选5'
                  },
                  {
                    'code': 'SH11Y',
                    'cnName': '上海11选5'
                  },
                  {
                    'code': 'HLJ11Y',
                    'cnName': '黑龙江11选5'
                  },
                  {
                    'code': 'YN11Y',
                    'cnName': '云南11选5'
                  },
                  {
                    'code': 'HUB11Y',
                    'cnName': '湖北11选5'
                  }
                ],
                tabs: [{
                  en: '11y-3x',
                  cn: '三星'
                }]
              },
              'pk10': {
                typeCnName: 'pk10系列',
                lotteries: [{
                    'code': 'BJPK10',
                    'cnName': '北京pk10'
                  },
                  {
                    'code': 'MCPK10',
                    'cnName': '摩臣pk10'
                  },
                  {
                    'code': 'XGPK10',
                    'cnName': '香港pk10'
                  }
                ],
                tabs: [{
                  en: 'pk10-q5',
                  cn: '前五名'
                }, {
                  en: 'pk10-h5',
                  cn: '后五名'
                }]
              },
              'k3': {
                typeCnName: '快3系列',
                lotteries: [{
                    'code': 'MCK3',
                    'cnName': '摩臣快3'
                  },
                  {
                    'code': 'JSK3',
                    'cnName': '江苏快3'
                  },
                  {
                    'code': 'HNK3',
                    'cnName': '河南快3'
                  },
                  {
                    'code': 'HBK3',
                    'cnName': '湖北快3'
                  },
                  {
                    'code': 'JLK3',
                    'cnName': '吉林快3'
                  },
                  {
                    'code': 'AHK3',
                    'cnName': '安徽快3'
                  }
                ],
                tabs: [{
                  en: 'k3-3x',
                  cn: '三星'
                }]
              },
              '3d': {
                typeCnName: '3D/低频系列',
                lotteries: [{
                    'code': 'MC3D',
                    'cnName': '摩臣3D'
                  },
                  {
                    'code': 'SHSSL',
                    'cnName': '上海时时乐'
                  },
                  {
                    'code': '3DFC',
                    'cnName': '福彩3D'
                  },
                  {
                    'code': 'TCP3',
                    'cnName': '排列3'
                  }
                ],
                tabs: [{
                  en: '3d-3x',
                  cn: '三星'
                }]
              },
              'kl12': {
                typeCnName: '快乐12',
                lotteries: [{
                  'code': 'SCKL12',
                  'cnName': '四川快乐12'
                }],
                tabs: [{
                  en: 'kl12-all',
                  cn: '所有位置'
                }]
              },
              'ky481': {
                typeCnName: '快赢481',
                lotteries: [{
                  'code': 'HNKY481',
                  'cnName': '河南快赢481'
                }],
                tabs: [{
                  en: 'ky481-all',
                  cn: '四星'
                }]
              }
            },
            //彩种选择框默认第一个显示彩种
            lotteryDefaultObj: {
              'ssc': 'CQSSC',
              '11y': 'GD11Y',
              'pk10': 'BJPK10',
              'k3': 'JSK3',
              '3d': '3DFC',
              'lhc': 'XGLHC',
              'kl12': 'SCKL12',
              'ky481': 'HNKY481'
            },
            //默认tab
            tabDefaultObj: {
              'ssc': 'ssc-5x',
              '11y': '11y-3x',
              'pk10': 'pk10-q5',
              'k3': 'k3-3x',
              '3d': '3d-3x',
              'kl12': 'kl12-all',
              'ky481': 'ky481-all'
            },
            checkedConfig: [{
                id: 'miss',
                value: 'miss',
                model: 'yes',
                text: '遗漏'
              },
              {
                id: 'miss-bar',
                value: 'missBar',
                model: 'yes',
                text: '遗漏条'
              },
              {
                id: 'trend-line',
                value: 'trendLine',
                model: 'yes',
                text: '走势图折线'
              },
              {
                id: 'cold-hot-number',
                value: 'coldHotNumber',
                model: 'yes',
                text: '冷热号'
              },
            ],
            issuePeriodConfig: [{
                en: 30,
                cn: '近30期'
              },
              {
                en: 50,
                cn: '近50期'
              },
              {
                en: 100,
                cn: '近100期'
              },
              /* {
                  day: 1,
                  cn: '今日数据'
              },
              {
                  day: 2,
                  cn: '近2天'
              } */
            ],
            issuePeriod: 30,
            selectNumObj: {
              'ssc': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              '11y': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              'pk10': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
              'k3': [1, 2, 3, 4, 5, 6],
              '3d': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
              'kl12': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
              'ky481': [1, 2, 3, 4, 5, 6, 7, 8],
            },
            posConfig: {
              'ssc-5x': {
                0: '万位',
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
              },
              'ssc-4x': {
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
              },
              'ssc-q3': {
                0: '万位',
                1: '千位',
                2: '百位',
              },
              'ssc-z3': {
                1: '千位',
                2: '百位',
                3: '十位',
              },
              'ssc-h3': {
                2: '百位',
                3: '十位',
                4: '个位'
              },
              'ssc-q2': {
                0: '万位',
                1: '千位'
              },
              'ssc-h2': {
                3: '十位',
                4: '个位'
              },
              '11y-3x': {
                0: '万位',
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
              },
              'pk10-q5': {
                0: '冠军',
                1: '亚军',
                2: '季军',
                3: '第四名',
                4: '第五名'
              },
              'pk10-h5': {
                5: '第六名',
                6: '第七名',
                7: '第八名',
                8: '第九名',
                9: '第十名'
              },
              'k3-3x': {
                0: '第一位',
                1: '第二位',
                2: '第三位'
              },
              '3d-3x': {
                0: '百位',
                1: '十位',
                2: '个位'
              },
              'kl12-all': {
                0: '万位',
                1: '千位',
                2: '百位',
                3: '十位',
                4: '个位'
              },
              'ky481-all': {
                0: '自由泳',
                1: '仰泳',
                2: '蛙泳',
                3: '蝶泳'
              }
            },
            missBarColor: '#dadae5',
            missLineColor: '#C84C59',
        };
    },
    computed: {
      lotteryArrs() {
        return this.lotteryConfig[this.lotteryType].lotteries;
      },
      tabsArr() {
        const result = this.lotteryConfig[this.lotteryType].tabs;
        return result;
      },
      isMiss() {
        return this.checkedConfig.find(item => item.id === 'miss').model === 'yes';
      },
      isMissBar() {
        return this.checkedConfig.find(item => item.id === 'miss-bar').model === 'yes';
      },
      isLine() {
        return this.checkedConfig.find(item => item.id === 'trend-line').model === 'yes';
      },
      isHotCold() {
        return this.checkedConfig.find(item => item.id === 'cold-hot-number').model === 'yes';
      },
    },
    methods: {
      ajaxTrendData() {
        this.$http.get(`/lottery/api/u/v1/lottery/trend?lottery=${this.lottery}&issuecount=${this.issuePeriod}`).then(res => {
          this.trendData = res.data.result.data;
        }).catch(error => {
          console.log(error);
        });
      },
      receiveLottery(msg) {
        this.lottery = msg;
      },
      receiveLotteryType(msg) {
        this.lotteryType = msg;
      },
      receiveTab(msg) {
        this.tabCode = msg;
      },
      receivePeriod(msg) {
        this.issuePeriod = msg.en || msg.day;
      },
      toggleMiss(flag) {
        if (flag) {
          [...document.querySelectorAll('.js-miss-num')].forEach(element => element.style.display = 'inline-block');
          return;
        }
        [...document.querySelectorAll('.js-miss-num')].forEach(element => element.style.display = 'none');
      },
      getHotAndColdObj() {
        const obj = {}; //统计每个数字出现次数的对象
        [...document.querySelectorAll('.js-selected-num')].forEach(element => {
          const num = element.innerText;
          if (obj[num]) {
            obj[num]++;
          } else {
            obj[num] = 1;
          }
        });
        const valueArr = Object.values(obj);
        const max = Math.max(...valueArr);
        const min = Math.min(...valueArr);
        let hotArr = [];
        let coldArr = [];
        if (max === min) { //冷热号一样就没必要着色了
          return {
            hotArr: [],
            coldArr: []
          };
        }
        for (let key in obj) {
          if (obj[key] === max) {
            hotArr.push(key);
          }
          if (obj[key] === min) {
            coldArr.push(key);
          }
        }
        return {
          hotArr,
          coldArr
        };
      },
      toggleHotAndCold(flag) {
        const hotAndColdObj = this.getHotAndColdObj();
        [...document.querySelectorAll('.js-selected-num')].forEach(element => {
          if (flag) {
            if (hotAndColdObj.hotArr.indexOf(element.innerText) !== -1) {
              !element.classList.contains('hot') && element.classList.add('hot');
            }
            if (hotAndColdObj.coldArr.indexOf(element.innerText) !== -1) {
              !element.classList.contains('cold') && element.classList.add('cold');
            }
          } else {
            element.classList.contains('hot') && element.classList.remove('hot');
            element.classList.contains('cold') && element.classList.remove('cold');
          }
        });
      },
      getMissCoordinateObj() {
        const selectedNumArr = [...document.querySelectorAll('.js-selected-num')];
        const coordinateObj = {};
        selectedNumArr.forEach((element, index) => {
          const posIndex = element.getAttribute('pos-index');
          coordinateObj[posIndex] = coordinateObj[posIndex] || [];
          const elementWidth = element.offsetWidth;
          const x = offsetDis(element).left + elementWidth / 2;
          const y = offsetDis(element).top;
          coordinateObj[posIndex].push({
            x,
            y
          });
        });
        return coordinateObj;
      },
      getMissBarCoordinateArr() {
        const missBarCoordinateArr = [];
        const selectedNumArr = [...document.querySelectorAll('.js-selected-num')];
        const missBarCoordinateObj = {};
        const tfoot = document.querySelector('tfoot');
        const tbody = document.querySelector('tbody');
        selectedNumArr.forEach((element, index) => {
          const posIndex = element.getAttribute('pos-index');
          const selectNumIndex = element.getAttribute('num-index');
          missBarCoordinateObj[`${posIndex}-${selectNumIndex}`] = missBarCoordinateObj[
            `${posIndex}-${selectNumIndex}`] || [];
          const x = offsetDis(element).left - element.offsetLeft;
          const y = offsetDis(element).top + element.offsetTop + element.offsetHeight;
          const td = element.parentElement;
          const width = td.offsetWidth;
          const tr = td.parentElement;
          const height = tfoot.offsetTop - tr.offsetTop - td.offsetHeight;
          missBarCoordinateObj[`${posIndex}-${selectNumIndex}`].push({
            x,
            y,
            width,
            height
          });
        });
        //取出y值最大的那个，即底部那个
        for (let key in missBarCoordinateObj) {
          const arr = missBarCoordinateObj[key];
          arr.sort((a, b) => b.y - a.y);
          missBarCoordinateArr.push(arr[0]);
        }
        //找出全遗漏的竖列
        const xArr = missBarCoordinateArr.map(o => o.x).sort((a, b) => a - b);
        const gapWidth = document.querySelector('.select-num').clientWidth;
        const gapArr = [];
        for (let j = 0; j < xArr.length - 1; j++) {
          if (xArr[j + 1] - xArr[j] !== gapWidth && xArr[j + 1] - xArr[j] !== gapWidth + 1) {
            gapArr.push({
              x: xArr[j],
              gapNum: Math.round((xArr[j + 1] - xArr[j]) / gapWidth) - 1
            });
          }
        }
        gapArr.forEach(gapObj => {
          for (let g = 0; g < gapObj.gapNum; g++) {
            missBarCoordinateArr.push({
              x: gapObj.x + gapWidth * (g + 1),
              y: offsetDis(tbody).top,
              width: gapWidth,
              height: tfoot.offsetTop - tbody.offsetTop
            });
          }
        });
        return missBarCoordinateArr;
      },
      createCanvas(id) {
        let canvas;
        let context;
        if (!document.getElementById(id)) {
          canvas = document.createElement('canvas');
          canvas.id = id;
          canvas.width = document.body.scrollWidth;
          canvas.height = document.body.scrollHeight;
          document.body.appendChild(canvas);
          context = canvas.getContext('2d');
        } else {
          canvas = document.getElementById(id);
          canvas.width = document.body.scrollWidth;
          canvas.height = document.body.scrollHeight;
          context = document.getElementById(id).getContext('2d');
        }
        return {
          canvas,
          context
        };
      },
      drawMissBar(flag) {
        const canvas = this.createCanvas('js-draw-bar').canvas;
        const context = this.createCanvas('js-draw-bar').context;
        if (!flag) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          return;
        }
        context.clearRect(0, 0, canvas.width, canvas.height); //清空了再画                                   
        const missBarCoordinateArr = this.getMissBarCoordinateArr();
        context.beginPath(); //通过清空子路径列表开始一个新路径            
        context.fillStyle = this.missBarColor;
        missBarCoordinateArr.forEach(item => {
          const {
            x,
            y,
            width,
            height
          } = item;
          context.rect(x, y, width, height);
          context.fill();
        });
      },
      drawLine(flag) {
        const canvas = this.createCanvas('js-draw-line').canvas;
        const context = this.createCanvas('js-draw-line').context;
        if (!flag) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          return;
        }
        const selectedNumHeight = document.querySelector('.js-selected-num').offsetHeight;
        context.clearRect(0, 0, canvas.width, canvas.height); //清空了再画                       
        const missCoordinateObj = this.getMissCoordinateObj();
        context.beginPath(); //通过清空子路径列表开始一个新路径
        context.strokeStyle = this.missLineColor;
        for (let posIndex in missCoordinateObj) {
          const arr = missCoordinateObj[posIndex];
          for (let index = 0, length = arr.length; index < length - 1; index++) {
            const xFrom = arr[index].x;
            const yFrom = arr[index].y + selectedNumHeight;
            const xTo = arr[index + 1].x;
            const yTo = arr[index + 1].y;
            context.moveTo(xFrom, yFrom);
            context.lineTo(xTo, yTo);
          }
          context.stroke();
        }
      },
      callbackDraw(config) {
        for (let item of config) {
          switch (item.text) {
            case '遗漏':
              this.toggleMiss(this.isMiss);
              break;
            case '遗漏条':
              this.drawMissBar(this.isMissBar);
              break;
            case '走势图折线':
              this.drawLine(this.isLine);
              break;
            case '冷热号':
              this.toggleHotAndCold(this.isHotCold);
              break;
          }
        }
      }
    },
    watch: {
      checkedConfig: {
        deep: true,
        // immediate: true,
        handler(newVal, oldVal) {
          this.callbackDraw(newVal);
        }
      },
      lottery(newVal, oldVal) {
        this.trendData = [];
        this.ajaxTrendData();
        this.drawMissBar(false);
        this.drawLine(false);
      },
      issuePeriod(newVal, oldVal) {
        this.ajaxTrendData();
        this.drawMissBar(false);
        this.drawLine(false);
      }
    },
    beforeCreate() {},
    created() {
      const hashArr = window.location.hash.slice(1).split('-');
      this.lotteryType = hashArr[0];
      this.lottery = hashArr[1];
      this.ajaxTrendData();
    },
    beforeMount() {},
    mounted() {

    },
    updated() {
      this.$nextTick(() => {
        if (this.tabCode === 'ssc-qw&nn') { //趣味牛牛不画图
          this.drawMissBar(false);
          this.drawLine(false);
          return;
        }
        if (document.querySelector('.js-selected-num')) {
          this.callbackDraw(this.checkedConfig);
        }
      });
    }
  }

</script>
