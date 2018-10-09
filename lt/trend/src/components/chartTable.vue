<template>
  <table class="chart-table" :lottery-type="lotteryType" v-if="trendData.length>0">
    <thead>
      <tr>
        <td class="chart-issue-title" rowspan="2">奖期</td>
        <td class="chart-open-code-title" rowspan="2" :colspan="openCodeLength">
          <div>开奖号码</div>
        </td>
        <td class="chart-pos-title" :colspan="selectNumArr.length" v-for="pos in posObj">
          <div>{{pos}}</div>
        </td>
        <td class="chart-distribution-title" :colspan="selectNumArr.length">
          <div>号码分布</div>
        </td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="title-3m-xt" rowspan="2">
            <i>组三</i>
          </td>
          <td class="title-3m-xt" rowspan="2">
            <i>组六</i>
          </td>
          <td class="title-3m-xt" rowspan="2">
            <i>豹子</i>
          </td>
          <td class="title-3m-xt" rowspan="2">
            <i>和值</i>
          </td>
          <td class="title-3m-xt" rowspan="2">
            <i>跨度</i>
          </td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="title-2m-xt" rowspan="2">对子</td>
          <td class="title-2m-xt" rowspan="2">和值</td>
          <td class="title-2m-xt" rowspan="2">跨度</td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="title-k3-xt" rowspan="2">
            <i>和值</i>
          </td>
          <td class="title-k3-xt" rowspan="2">
            <i>和值大小</i>
          </td>
          <td class="title-k3-xt" rowspan="2">
            <i>和值单双</i>
          </td>
          <td class="title-k3-xt" rowspan="2">
            <i>三同号</i>
          </td>
          <td class="title-k3-xt" rowspan="2">
            <i>三不同号</i>
          </td>
          <td class="title-k3-xt" rowspan="2">
            <i>三连号</i>
          </td>
          <td class="title-k3-xt" rowspan="2">
            <i>二同号</i>
          </td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="title-3d-xt" rowspan="2">
            <i>组三</i>
          </td>
          <td class="title-3d-xt" rowspan="2">
            <i>组六</i>
          </td>
          <td class="title-3d-xt" rowspan="2">
            <i>豹子</i>
          </td>
          <td class="title-3d-xt" rowspan="2">
            <i>和值</i>
          </td>
          <td class="title-3d-xt" rowspan="2">
            <i>跨度</i>
          </td>
          <td class="title-3d-lhh" colspan="3">龙虎和</td>
        </template>
      </tr>
      <tr>
        <template v-for="pos in posObj">
          <td class="pos-title-num" :index="i" v-for="(n,i) in selectNumArr">
            <i>{{n}}</i>
          </td>
        </template>
        <td class="distribution-title-num" :index="i" v-for="(n,i) in selectNumArr">
          <i>{{n}}</i>
        </td>
        <template v-if="lotteryType === '3d'">
          <td class="title-3d-lhh-pos">
            <i>百十</i>
          </td>
          <td class="title-3d-lhh-pos">
            <i>百个</i>
          </td>
          <td class="title-3d-lhh-pos">
            <i>十个</i>
          </td>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in trendData">
        <td class="chart-issue">{{item.issue}}</td>
        <td class="chart-open-code" :colspan="openCodeLength">
          <i v-for="n in getCodeArr(item.code.split(','))">{{n}}</i>
        </td>
        <template v-for="(pos, posIndex) in posObj">
          <td class="select-num" :index="selectNumIndex" v-for="(selectNum, selectNumIndex) in selectNumArr" v-html="renderSelectNum(item.code, selectNum, selectNumIndex, posIndex, index)"></td>
        </template>
        <td class="distribution-num" :index="selectNumIndex" v-for="(selectNum, selectNumIndex) in selectNumArr" v-html="renderDistribution(item.code, selectNum, selectNumIndex, index)"></td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="num-3m-xt" v-html="render3xZutaiZ3(item.code, index)"></td>
          <td class="num-3m-xt" v-html="render3xZutaiZ6(item.code, index)"></td>
          <td class="num-3m-xt" v-html="render3xZutaiBaozi(item.code, index)"></td>
          <td class="num-3m-xt" v-html="renderHezhi(item.code)"></td>
          <td class="num-3m-xt" v-html="renderKuadu(item.code)"></td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="num-2m-xt" v-html="render2xDuizi(item.code, index)"></td>
          <td class="num-2m-xt" v-html="renderHezhi(item.code)"></td>
          <td class="num-2m-xt" v-html="renderKuadu(item.code)"></td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="num-k3-xt" v-html="renderHezhi(item.code)"></td>
          <td class="num-k3-xt" v-html="renderDaxiao(calcHezhi(item.code.split(',')))"></td>
          <td class="num-k3-xt" v-html="renderDanshuang(calcHezhi(item.code.split(',')))"></td>
          <td class="num-k3-xt" v-html="render3xZutaiBaozi(item.code, index)"></td>
          <td class="num-k3-xt" v-html="render3xZutaiZ6(item.code, index)"></td>
          <td class="num-k3-xt" v-html="render3xShunzi(item.code, index)"></td>
          <td class="num-k3-xt" v-html="render3xZutaiZ3(item.code, index)"></td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="num-3d-xt" v-html="render3xZutaiZ3(item.code, index)"></td>
          <td class="num-3d-xt" v-html="render3xZutaiZ6(item.code, index)"></td>
          <td class="num-3d-xt" v-html="render3xZutaiBaozi(item.code, index)"></td>
          <td class="num-3d-xt" v-html="renderHezhi(item.code)"></td>
          <td class="num-3d-xt" v-html="renderKuadu(item.code)"></td>
          <td class="num-3d-lhh-pos" v-for="(v,i) in lhhPosArrOf3d" v-html="renderLhh(item.code, v.en)"></td>
        </template>
      </tr>
    </tbody>
    <tfoot>
      <tr class="total-appear-row">
        <td class="total-appear-title">出现总次数</td>
        <td class="chart-open-code" :colspan="openCodeLength"></td>
        <template v-for="totalArr in totalArrs">
          <td class="total-appear-num" :index="index" v-for="(item,index) in totalArr">{{item}}</td>
        </template>
        <td class="distribution-title-num" :index="index" v-for="(item,index) in distributionTotalArr">{{item}}</td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="num-3m-xt" v-for="v in z3ZutaiTotalArr">{{v}}</td>
          <td class="num-3m-xt"></td>
          <td class="num-3m-xt"></td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="num-2m-xt" v-for="v in z2ZutaiTotalArr">{{v}}</td>
          <td class="num-2m-xt"></td>
          <td class="num-2m-xt"></td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt" v-for="v in z3ZutaiTotalArr">{{v}}</td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="num-3d-xt" v-for="v in z3ZutaiTotalArr">{{v}}</td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-lhh-pos" v-for="v in lhhPosArrOf3d"></td>
        </template>
      </tr>
      <tr class="average-miss-row">
        <td class="average-miss-title">平均遗漏值</td>
        <td class="chart-open-code" :colspan="openCodeLength"></td>
        <template v-for="averageMissArr in averageMissArrs">
          <td class="average-miss-num" :index="index" v-for="(item,index) in averageMissArr">{{item}}</td>
        </template>
        <td class="distribution-title-num" :index="index" v-for="(item,index) in distributionAverageMissArr">{{item}}</td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="num-3m-xt" v-for="v in z3ZutaiAverageMissArr">{{v}}</td>
          <td class="num-3m-xt"></td>
          <td class="num-3m-xt"></td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="num-2m-xt" v-for="v in z2ZutaiAverageMissArr">{{v}}</td>
          <td class="num-2m-xt"></td>
          <td class="num-2m-xt"></td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt" v-for="v in z3ZutaiAverageMissArr">{{v}}</td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="num-3d-xt" v-for="v in z3ZutaiAverageMissArr">{{v}}</td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-lhh-pos" v-for="v in lhhPosArrOf3d"></td>
        </template>
      </tr>
      <tr class="max-miss-row">
        <td class="max-miss-title">最大遗漏值</td>
        <td class="chart-open-code" :colspan="openCodeLength"></td>
        <template v-for="maxMissArr in maxMissArrs">
          <td class="max-miss-num" :index="index" v-for="(item,index) in maxMissArr">{{item}}</td>
        </template>
        <td class="distribution-title-num" :index="index" v-for="(item,index) in distributionMaxMissArr">{{item}}</td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="num-3m-xt" v-for="v in z3ZutaiMaxMissArr">{{v}}</td>
          <td class="num-3m-xt"></td>
          <td class="num-3m-xt"></td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="num-2m-xt" v-for="v in z2ZutaiMaxMissArr">{{v}}</td>
          <td class="num-2m-xt"></td>
          <td class="num-2m-xt"></td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt" v-for="v in z3ZutaiMaxMissArr">{{v}}</td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="num-3d-xt" v-for="v in z3ZutaiMaxMissArr">{{v}}</td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-lhh-pos" v-for="v in lhhPosArrOf3d"></td>
        </template>
      </tr>
      <tr>
        <td class="max-continuous-title">最大连出值</td>
        <td class="chart-open-code" :colspan="openCodeLength"></td>
        <template v-for="maxContinuousArr in maxContinuousArrs">
          <td class="max-continuous-num" :index="index" v-for="(item,index) in maxContinuousArr">{{item}}</td>
        </template>
        <td class="distribution-title-num" :index="index" v-for="(item,index) in distributionMaxContinuousArr">{{item}}</td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="num-3m-xt" v-for="v in z3ZutaiContinuousArr">{{v}}</td>
          <td class="num-3m-xt"></td>
          <td class="num-3m-xt"></td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="num-2m-xt" v-for="v in z2ZutaiContinuousArr">{{v}}</td>
          <td class="num-2m-xt"></td>
          <td class="num-2m-xt"></td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt"></td>
          <td class="num-k3-xt" v-for="v in z3ZutaiContinuousArr">{{v}}</td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="num-3d-xt" v-for="v in z3ZutaiContinuousArr">{{v}}</td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-xt"></td>
          <td class="num-3d-lhh-pos" v-for="v in lhhPosArrOf3d"></td>
        </template>
      </tr>
      <tr>
        <td class="chart-issue-title" rowspan="2">奖期</td>
        <td class="chart-open-code-title" rowspan="2" :colspan="openCodeLength">开奖号码</td>
        <td class="chart-pos-title" :colspan="selectNumArr.length" v-for="pos in posObj">{{pos}}</td>
        <td class="chart-distribution-title" :colspan="selectNumArr.length">号码分布</td>
        <template v-if="['ssc-q3', 'ssc-z3', 'ssc-h3'].indexOf(tabCode) !== -1">
          <td class="title-3m-xt" rowspan="2">组三</td>
          <td class="title-3m-xt" rowspan="2">组六</td>
          <td class="title-3m-xt" rowspan="2">豹子</td>
          <td class="title-3m-xt" rowspan="2">和值</td>
          <td class="title-3m-xt" rowspan="2">跨度</td>
        </template>
        <template v-if="['ssc-q2', 'ssc-h2'].indexOf(tabCode) !== -1">
          <td class="title-2m-xt" rowspan="2">对子</td>
          <td class="title-2m-xt" rowspan="2">和值</td>
          <td class="title-2m-xt" rowspan="2">跨度</td>
        </template>
        <template v-if="lotteryType === 'k3'">
          <td class="title-k3-xt" rowspan="2">和值</td>
          <td class="title-k3-xt" rowspan="2">和值大小</td>
          <td class="title-k3-xt" rowspan="2">和值单双</td>
          <td class="title-k3-xt" rowspan="2">三同号</td>
          <td class="title-k3-xt" rowspan="2">三不同号</td>
          <td class="title-k3-xt" rowspan="2">三连号</td>
          <td class="title-k3-xt" rowspan="2">二同号</td>
        </template>
        <template v-if="lotteryType === '3d'">
          <td class="title-3d-xt" rowspan="2">组三</td>
          <td class="title-3d-xt" rowspan="2">组六</td>
          <td class="title-3d-xt" rowspan="2">豹子</td>
          <td class="title-3d-xt" rowspan="2">和值</td>
          <td class="title-3d-xt" rowspan="2">跨度</td>
          <td class="title-3d-lhh" colspan="3">龙虎和</td>
        </template>
      </tr>
      <tr>
        <template v-for="pos in posObj">
          <td class="pos-title-num" :index="i" v-for="(n,i) in selectNumArr">{{n}}</td>
        </template>
        <td class="distribution-title-num" :index="i" v-for="(n,i) in selectNumArr">{{n}}</td>
        <template v-if="lotteryType === '3d'">
          <td class="title-3d-lhh-pos" v-for="v in lhhPosArrOf3d">{{v.cn}}</td>
        </template>
      </tr>
    </tfoot>
  </table>
</template>
<script>
  import {
    calcEachTotal,
    caclDistributionTotalArr,
    getDistributionMissAndContinuousObj,
    getMissAndContinuousObj,
    calcMaxMiss,
    filterShunziArr,
    cacl3xZutai,
    calcKuadu,
    calcHezhi,
    calc2xDuizi,
    calcLhh,
    calcNiuniu,
    calcBjl,
    calcShunzi,
    calcBanshunzi,
  } from '../assets/js/utils'

  export default {
    props: ['trend-data', 'lottery-config', 'lottery-type', 'lottery', 'pos-config', 'tab-code', 'select-num-obj',
      'is-miss'
    ],
    data() {
      return {
        selectedIndexObj: {}, //遗漏值计数从上到下1开始，碰到开奖号就重新从1开始计数
        missAndContinuousObj: {}, //底部计算平均遗漏值，最大遗漏值，最大连出值用到，结构missAndContinuousObj.posIndex.selectIndex = [index1,index2,...]
        distributionIndexArr: [], //计算竖排的1234序号用的
        z3ZutaiObj: {}, //计算竖排的1234序号用的
        z3ZutaiTotalObj: {}, //计算3星组态底部总次数，最大遗漏值，连出值用到
        z2ZutaiObj: {},
        z2ZutaiTotalObj: {},
        hz3xdaxiaoFlagObj: { //3星和值大小临界值config
          'k3': 10,
          'ssc': 13,
          '3d': 13
        },
        minMaxConfig: { //选号的最大值和最小值
          'k3': {
            min: 1,
            max: 6
          },
          'ssc': {
            min: 0,
            max: 9
          },
          '3d': {
            min: 0,
            max: 9
          }
        },
        lhhPosArrOf3d: [{
          en: '01',
          cn: '百十'
        }, {
          en: '02',
          cn: '百个'
        }, {
          en: '12',
          cn: '十个'
        }]
      };
    },
    computed: {
      openDataArr() {
        return this.trendData.map(item => {
          return item.code.split(',');
        });
      },
      posObj() {
        return this.posConfig[this.tabCode];
      },
      openCodeLength() { //计算开奖号码一共有几位
        if (this.lotteryType === 'pk10') {
          return this.openDataArr[0] && this.openDataArr[0].length / 2;
        }
        return this.openDataArr[0] && this.openDataArr[0].length;
      },
      selectNumArr() {
        return this.selectNumObj[this.lotteryType];
      },
      totalArrs() {
        return calcEachTotal(this.posObj, this.selectNumArr, this.openDataArr);
      },
      averageMissArrs() {
        return this.totalArrs.map(totalArr => {
          return totalArr.map(total => {
            if (total === 0) {
              return this.openDataArr.length + 1;
            }
            return Math.round(this.openDataArr.length / total);
          });
        });
      },
      maxMissArrs() {
        return getMissAndContinuousObj(this.posObj, this.selectNumArr, this.openDataArr).missArr;
      },
      maxContinuousArrs() {
        return getMissAndContinuousObj(this.posObj, this.selectNumArr, this.openDataArr).continuousArr;
      },
      distributionTotalArr() {
        return caclDistributionTotalArr(this.posObj, this.selectNumArr, this.openDataArr);
      },
      distributionAverageMissArr() {
        return this.distributionTotalArr.map(total => {
          if (total === 0) {
            return this.openDataArr.length + 1;
          }
          return Math.round(this.openDataArr.length / total);
        });
      },
      distributionMaxMissArr() {
        return getDistributionMissAndContinuousObj(this.posObj, this.selectNumArr, this.openDataArr).missArr;
      },
      distributionMaxContinuousArr() {
        return getDistributionMissAndContinuousObj(this.posObj, this.selectNumArr, this.openDataArr).continuousArr;
      },
      z3ZutaiTotalArr() {
        const z3Total = this.z3ZutaiTotalObj['z3'] ? this.z3ZutaiTotalObj['z3'].length : 0;
        const z6Total = this.z3ZutaiTotalObj['z6'] ? this.z3ZutaiTotalObj['z6'].length : 0;
        const baoziTotal = this.z3ZutaiTotalObj['baozi'] ? this.z3ZutaiTotalObj['baozi'].length : 0;
        const shunziTotal = this.z3ZutaiTotalObj['shunzi'] ? this.z3ZutaiTotalObj['shunzi'].length : 0;
        switch (this.lotteryType) {
          case 'ssc':
          case '3d':
            return [z3Total, z6Total, baoziTotal];
          case 'k3':
            return [baoziTotal, z6Total, shunziTotal, z3Total];
        }
      },
      z3ZutaiAverageMissArr() {
        return this.z3ZutaiTotalArr.map(total => {
          if (total === 0) {
            return this.openDataArr.length + 1;
          }
          return Math.round(this.openDataArr.length / total);
        });
      },
      z3ZutaiMaxMissArr() {
        const openDataArrLength = this.openDataArr.length;
        const z3Miss = calcMaxMiss(this.z3ZutaiTotalObj['z3'] || [], openDataArrLength);
        const z6Miss = calcMaxMiss(this.z3ZutaiTotalObj['z6'] || [], openDataArrLength);
        const baoziMiss = calcMaxMiss(this.z3ZutaiTotalObj['baozi'] || [], openDataArrLength);
        const shunziMiss = calcMaxMiss(this.z3ZutaiTotalObj['shunzi'] || [], openDataArrLength);
        switch (this.lotteryType) {
          case 'ssc':
          case '3d':
            return [z3Miss, z6Miss, baoziMiss];
          case 'k3':
            return [baoziMiss, z6Miss, shunziMiss, z3Miss];
        }
      },
      z3ZutaiContinuousArr() {
        const result = {};
        for (let key in this.z3ZutaiTotalObj) {
          const arr = this.z3ZutaiTotalObj[key];
          arr.sort();
          if (arr.length === 0) {
            result[key] = 0;
          }
          if (filterShunziArr(arr).length > 0) {
            result[key] = filterShunziArr(arr).sort((a, b) => b.length - a.length)[0].length;
          } else {
            result[key] = 1;
          }
        }
        switch (this.lotteryType) {
          case 'ssc':
          case '3d':
            return [result['z3'], result['z6'], result['baozi']];
          case 'k3':
            return [result['baozi'], result['z6'], result['shunzi'], result['z3']];
        }
      },
      z2ZutaiTotalArr() {
        const z2Total = this.z2ZutaiTotalObj['duizi'].length;
        return [z2Total];
      },
      z2ZutaiAverageMissArr() {
        return this.z2ZutaiTotalArr.map(total => {
          if (total === 0) {
            return this.openDataArr.length + 1;
          }
          return Math.round(this.openDataArr.length / total);
        });
      },
      z2ZutaiMaxMissArr() {
        const openDataArrLength = this.openDataArr.length;
        const z2Miss = calcMaxMiss(this.z2ZutaiTotalObj['duizi'], openDataArrLength);
        return [z2Miss];
      },
      z2ZutaiContinuousArr() {
        const result = {};
        for (let key in this.z2ZutaiTotalObj) {
          const arr = this.z2ZutaiTotalObj[key];
          arr.sort();
          if (arr.length === 0) {
            result[key] = 0;
          }
          if (filterShunziArr(arr).length > 0) {
            result[key] = filterShunziArr(arr).sort((a, b) => b.length - a.length)[0].length;
          } else {
            result[key] = 1;
          }
        }
        return [result['duizi']];
      },
    },
    watch: {
      tabCode(newVal, oldVal) {
        this.reset();
      },
      trendData(newVal, oldVal) {
        this.reset();
      },
      lottery(newVal, oldVal) {
        this.trendData = [];
        this.reset();
      },
      issuePeriod(newVal, oldVal) {
        this.reset();
      }
    },
    methods: {
      reset() { //重置
        this.selectedIndexObj = {};
        this.missAndContinuousObj = {};
        this.distributionIndexArr = [];
        this.z3ZutaiObj = {};
        this.z3ZutaiTotalObj = {};
        this.z2ZutaiObj = {};
        this.z2ZutaiTotalObj = {};
      },
      getCodeArr(codeArr) { //统计前三等玩法的时候[1,2,3,4,5]只计算[1,2,3]的数据，所有要分割下
        switch (this.tabCode) {
          case 'ssc-5x':
          case '11y-3x':
          case 'k3-3x':
          case '3d-3x':
          case 'kl12-all':
          case 'ky481-all':
            return codeArr;
          case 'ssc-4x':
            return codeArr.slice(1, 5);
          case 'ssc-q3':
            return codeArr.slice(0, 3);
          case 'ssc-z3':
            return codeArr.slice(1, 4);
          case 'ssc-h3':
            return codeArr.slice(2, 5);
          case 'ssc-q2':
            return codeArr.slice(0, 2);
          case 'ssc-h2':
            return codeArr.slice(3, 5);
          case 'pk10-q5':
            return codeArr.slice(0, 5);
          case 'pk10-h5':
            return codeArr.slice(5, 10);
          default:
            return codeArr;
        }
      },
      renderDistribution(code, selectNum, selectNumIndex, index) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        const arr = codeArr.filter(v => Number(v) === Number(selectNum));
        if (arr.length > 0) {
          this.distributionIndexArr[selectNumIndex] = index + 1;
          if (arr.length > 1) {
            return `<i class="distributioned-num more-than-1">${selectNum}</i>`;
          }
          return `<i class="distributioned-num">${selectNum}</i>`;
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.distributionIndexArr[selectNumIndex] || 0)}</i>`;
        }
      },
      renderSelectNum(code, selectNum, selectNumIndex, posIndex, index) {
        const arr = code.split(',').map(v => Number(v));
        this.selectedIndexObj[posIndex] = this.selectedIndexObj[posIndex] || [];
        if (arr[posIndex] === Number(selectNum)) {
          this.selectedIndexObj[posIndex][selectNumIndex] = index + 1;
          return `<i class="js-selected-num selected-num" num-index="${selectNumIndex}" pos-index="${posIndex}" row="${index}">${selectNum}</i>`;
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.selectedIndexObj[posIndex][selectNumIndex] || 0)}</i>`;
        }
      },
      render3xZutaiZ3(code, index) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        this.z3ZutaiTotalObj['z3'] = this.z3ZutaiTotalObj['z3'] || [];
        if (cacl3xZutai(codeArr) === '组三') {
          this.z3ZutaiObj['z3'] = index + 1;
          this.z3ZutaiTotalObj['z3'].push(index + 1)
          return '<em class="yes">√</em>';
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.z3ZutaiObj['z3'] || 0)}</i>`;
        }
      },
      render3xZutaiZ6(code, index) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        this.z3ZutaiTotalObj['z6'] = this.z3ZutaiTotalObj['z6'] || [];
        if (cacl3xZutai(codeArr) === '组六') {
          this.z3ZutaiObj['z6'] = index + 1;
          this.z3ZutaiTotalObj['z6'].push(index + 1);
          return '<em class="yes">√</em>';
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.z3ZutaiObj['z6'] || 0)}</i>`;
        }
      },
      render3xZutaiBaozi(code, index) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        this.z3ZutaiTotalObj['baozi'] = this.z3ZutaiTotalObj['baozi'] || [];
        if (cacl3xZutai(codeArr) === '豹子') {
          this.z3ZutaiObj['baozi'] = index + 1;
          this.z3ZutaiTotalObj['baozi'].push(index + 1);
          return '<em class="yes">√</em>';
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.z3ZutaiObj['baozi'] || 0)}</i>`;
        }
      },
      render3xShunzi(code, index) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        const min = this.minMaxConfig[this.lotteryType].min;
        const max = this.minMaxConfig[this.lotteryType].max;
        this.z3ZutaiTotalObj['shunzi'] = this.z3ZutaiTotalObj['shunzi'] || [];
        if (calcShunzi(codeArr, min, max)) {
          this.z3ZutaiObj['shunzi'] = index + 1;
          this.z3ZutaiTotalObj['shunzi'].push(index + 1);
          return '<em class="yes">√</em>';
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.z3ZutaiObj['shunzi'] || 0)}</i>`;
        }
      },
      renderHezhi(code) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        return calcHezhi(codeArr);
      },
      calcHezhi(arr) {
        return calcHezhi(arr);
      },
      renderKuadu(code) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        return calcKuadu(codeArr);
      },
      renderDaxiao(num) {
        if (num > this.hz3xdaxiaoFlagObj[this.lotteryType]) {
          return '<i class="da">大</i>';
        } else {
          return '<i class="xiao">小</i>';
        }
      },
      renderDanshuang(num) {
        if (num % 2 === 0) {
          return '<i class="shuang">双</i>';
        } else {
          return '<i class="dan">单</i>';
        }
      },
      render2xDuizi(code, index) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        this.z2ZutaiTotalObj['duizi'] = this.z2ZutaiTotalObj['duizi'] || [];
        if (calc2xDuizi(codeArr)) {
          this.z2ZutaiObj['duizi'] = index + 1;
          this.z2ZutaiTotalObj['duizi'].push(index + 1);
          return '<em class="yes">√</em>';
        } else {
          return `<i class="js-miss-num" style="display:${this.isMiss?'inline-block':'none'}">${index + 1 - (this.z2ZutaiObj['duizi'] || 0)}</i>`;
        }
      },
      renderLhh(code, pos) {
        let codeArr = code.split(',').map(v => Number(v));
        codeArr = this.getCodeArr(codeArr);
        return calcLhh(codeArr[pos[0]], codeArr[pos[1]]);
      }
    },
  }

</script>
