<template>
  <select class="lottery-select" name="lottery-select" v-model="_lottery" @change="emitLottery(_lottery)">
    <option v-for="(item, index) in lotteryArrs" :value="item.code">
      {{ item.cnName }}
    </option>
  </select>
</template>
<script>
  export default {
    props: ['lottery-arrs', 'lottery-type', 'lottery', 'lottery-default-obj'],
    data() {
      return {
        _lottery: '',
      };
    },
    computed: {},
    watch: {
      lotteryType(newVal, oldVal) {
        this._lottery = this.lotteryDefaultObj[this.lotteryType];
        this.$emit('receive-lottery', this._lottery);
      }
    },
    methods: {
      emitLottery(lottery) {
        this.$emit('receive-lottery', lottery);
      }
    },
    created() {
      this._lottery = this.lottery;
      this.$emit('receive-lottery', this._lottery);
    }
  }
</script>
