<template>
  <ul class="clearfix lottery-tab-list">
    <li class="fl lottery-tab-item" v-for="(tab, index) in tabsArr" @click="switchTab(tab.en)" :class="{on: tab.en === _tabCode}">{{tab.cn}}</li>
  </ul>
</template>
<script>
  export default {
    props: ['tabs-arr', 'tab-default-obj', 'lottery-type', 'lottery'],
    data() {
      return {
        _tabCode: '', //默认第一个
      };
    },
    methods: {
      switchTab(tabCode) {
        this._tabCode = tabCode;
        this.$forceUpdate();
        this.$emit('receive-tab', tabCode);
      }
    },
    watch: {
      lotteryType(newVal, oldVal) {
        this._tabCode = this.tabDefaultObj[newVal];
        this.$emit('receive-tab', this._tabCode);
      }
    },
    created() {
      this._tabCode = this.tabDefaultObj[this.lotteryType]; //默认第一个
      this.$emit('receive-tab', this._tabCode);
    }
  }
</script>
