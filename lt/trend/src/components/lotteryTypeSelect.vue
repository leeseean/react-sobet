<template>
  <select class="lottery-type-select" name="lottery-type-select" v-model="_lotteryType" @change="emitLotteryType(_lotteryType)">
    <option v-for="(item, key) in lotteryConfig" :value="key">
      {{ item.typeCnName }}
    </option>
  </select>
</template>
<script>
  export default {
    props: ['lottery-config', 'lottery-type'],
    data() {
      return {
        _lotteryType: '',
      };
    },
    methods: {
      emitLotteryType(lotteryType) {
        this.$emit('receive-lottery-type', lotteryType);
      }
    },
    created() {
      this._lotteryType = this.lotteryType; //接收默认类型
    }
  }

</script>
