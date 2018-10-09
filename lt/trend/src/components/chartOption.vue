<template>
  <ul class="clearfix fl chart-option-list">
        <li class="fl chart-option-item" v-for="(item, index) in checkedConfig">
            <input class="hide" type="checkbox" :id="item.id" value="item.value" v-model="item.model" true-value="yes" false-value="no">
            <label :for="item.id">
                <span class="chart-option" :class="{on: item.model==='yes'}">
                    <i v-if="item.model==='yes'">√</i>
                </span>
                {{item.text}}
            </label>
        </li>
    </ul>
</template>
<script>
export default {
  props: ['checked-config'],
}
</script>

