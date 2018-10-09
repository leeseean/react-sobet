///趣味玩法&牛牛 表单
<template>
  <table class="normal-table" :lottery-type="lotteryType" v-if="trendData.length>0" :lottery="lottery">
    <thead>
      <tr>
        <td rowspan="2" class="normal-issue-title">奖期</td>
        <td rowspan="2" :colspan="openCodeLength" class="normal-open-code-title">
          <div>开奖号码</div>
        </td>
        <td :colspan="lhhPosArr.length" class="normal-lhh-title" v-if="lottery != 'CQSSC' && lottery != 'TXFFC'">
          <div>龙虎和</div>
        </td>
        <td rowspan="2" class="normal-bjl-title">
          <i>百家乐</i>
        </td>
        <td rowspan="2" class="normal-xt-title">
          <i>五星形态</i>
        </td>
        <td rowspan="2" class="normal-xt-title">
          <i>前三形态</i>
        </td>
        <td rowspan="2" class="normal-xt-title">
          <i>中三形态</i>
        </td>
        <td rowspan="2" class="normal-xt-title">
          <i>后三形态</i>
        </td>
        <td :colspan="niuniuXtArr.length" class="normal-niuniu-title">
          <div>牛牛</div>
        </td>
      </tr>
      <tr>
        <td v-for="pos in lhhPosArr" class="normal-lhh-pos" v-if="lottery != 'CQSSC' && lottery != 'TXFFC'">
          <i>{{pos.cn}}</i>
        </td>
        <td v-for="v in niuniuXtArr" class="normal-niuniu-xt">
          <i>{{v}}</i>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in trendData">
        <td class="normal-issue">{{item.issue}}</td>
        <td :colspan="openCodeLength" class="normal-open-code">
          <i v-for="n in item.code.split(',')">{{n}}</i>
        </td>
        <td class="normal-lhh" :index="index" :key="index" v-for="(pos,index) in lhhPosArr" v-html="renderLhhXt(pos, item.code.split(','))" v-if="lottery != 'CQSSC' && lottery != 'TXFFC'"></td>
        <td class="normal-xt" v-html="renderBjl(item.code.split(','))"></td>
        <td class="normal-xt" v-html="render5xXt(item.code.split(','))"></td>
        <td class="normal-xt" v-html="render3xXt(item.code.split(','),'012')"></td>
        <td class="normal-xt" v-html="render3xXt(item.code.split(','),'123')"></td>
        <td class="normal-xt" v-html="render3xXt(item.code.split(','),'234')"></td>
        <td class="normal-niuniu" :index="index" :key="index" v-for="(niuniuXt,index) in niuniuXtArr" v-html="renderNiuniuXt(niuniuXt, item.code.split(','))"></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td rowspan="2" class="normal-issue-title">奖期</td>
        <td rowspan="2" :colspan="openCodeLength" class="normal-open-code-title">开奖号码</td>
        <td :colspan="lhhPosArr.length" class="normal-lhh-title" v-if="lottery != 'CQSSC' && lottery != 'TXFFC'">龙虎和</td>
        <td rowspan="2" class="normal-bjl-title">百家乐</td>
        <td rowspan="2" class="normal-xt-title">五星形态</td>
        <td rowspan="2" class="normal-xt-title">前三形态</td>
        <td rowspan="2" class="normal-xt-title">中三形态</td>
        <td rowspan="2" class="normal-xt-title">后三形态</td>
        <td :colspan="niuniuXtArr.length" class="normal-niuniu-title">牛牛</td>
      </tr>
      <tr>
        <td v-for="pos in lhhPosArr" class="normal-lhh-pos" v-if="lottery != 'CQSSC' && lottery != 'TXFFC'">{{pos.cn}}</td>
        <td v-for="v in niuniuXtArr" class="normal-niuniu-xt">{{v}}</td>
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
    arrToCountItemObj
  } from '../assets/js/utils'
  export default {
    props: ['trend-data', 'lottery-config', 'lottery-type', 'lottery', 'pos-config', 'tab-code', 'select-num-obj'],
    data() {
      return {
        lhhPosArr: [{
          en: '01',
          cn: '万千'
        }, {
          en: '02',
          cn: '万百'
        }, {
          en: '03',
          cn: '万十'
        }, {
          en: '04',
          cn: '万个'
        }, {
          en: '12',
          cn: '千百'
        }, {
          en: '13',
          cn: '千十'
        }, {
          en: '14',
          cn: '千个'
        }, {
          en: '23',
          cn: '百十'
        }, {
          en: '24',
          cn: '百个'
        }, {
          en: '34',
          cn: '十个'
        }],
        niuniuXtArr: ['牛牛', '大小', '单双'],
      };
    },
    computed: {
      openDataArr() {
        return this.trendData.map(item => {
          return item.code.split(',').map(v => Number(v));
        });
      },
      openCodeLength() { //计算开奖号码一共有几位
        return this.openDataArr[0] && this.openDataArr[0].length;
      },
      selectNumArr() {
        return this.selectNumObj[this.lotteryType];
      }
    },
    methods: {
      renderLhhXt(pos, arr) {
        const en = pos.en; //01 
        const a = arr[en[0]];
        const b = arr[en[1]];
        return calcLhh(a, b);
      },
      renderNiuniuXt(xtTitle, arr) {
        arr = arr.map(v => Number(v));
        switch (xtTitle) {
          case '牛牛':
            return calcNiuniu(arr).nn;
            break;
          case '大小':
            return calcNiuniu(arr).dx;
            break;
          case '单双':
            return calcNiuniu(arr).ds;
            break;
          default:
            return '---';
            break;
        }
      },
      renderBjl(arr) {
        return calcBjl(arr);
      },
      render5xXt(arr) {
        const countItemObj = arrToCountItemObj(arr);
        const countItemObjValues = Object.values(countItemObj);
        if (countItemObjValues.length === 5) { // 1 1 1 1 1 顺子 单牌
          if (calcShunzi(arr)) {
            return '<em class="shunzi">顺子</em>';
          }
          return '<em class="danpai">单牌</em>';
        }
        if (countItemObjValues.length === 4) { //2 1 1 1 2重号 单号
          return '<em class="yidui">一对</em>';
        }
        if (countItemObjValues.length === 3) {
          if (countItemObjValues.includes(3)) { //3 1 1 3重号 单号
            return '<em class="santiao">三条</em>';
          }
          if (countItemObjValues.includes(2)) { // 2 2 1 2重号 单号
            return '<em class="liangdui">两对</em>';
          }
        }
        if (countItemObjValues.length === 2) {
          if (countItemObjValues.includes(4)) { //4 1  4重号 单号
            return '<em class="sitiao">四条</em>';
          }
          if (countItemObjValues.includes(2)) { // 3 2  3重号 2重号
            return '<em class="hulu">葫芦</em>';
          }
        }
      },
      render3xXt(arr, pos) {
        const codeArr = arr.filter((v, i) => pos.indexOf(String(i)) !== -1); //[2,3,4,5,8] => [2,3,4]
        const countItemObj = arrToCountItemObj(codeArr);
        const countItemObjValues = Object.values(countItemObj);
        if (countItemObjValues.length === 3) { //杂六 顺子 半顺
          if (calcShunzi(codeArr)) {
            return '<em class="shunzi">顺子</em>';
          }
          if (calcBanshunzi(codeArr)) {
            return '<em class="banshun">半顺</em>';
          }
          return '<em class="za6">杂六</em>';
        }
        if (countItemObjValues.length === 2) {
          return '<em class="duizi">对子</em>';
        }
        if (countItemObjValues.length === 1) {
          return '<em class="baozi">豹子</em>';
        }
      }
    }
  }

</script>
