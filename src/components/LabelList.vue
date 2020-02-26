<template>
  <ul class="label-list">
    <li class="label-list-item">掃除</li>
    <li class="label-list-item">洗濯</li>
    <li class="label-list-item">料理</li>
    <li class="label-list-item">買い物</li>
    <li class="label-list-item is-disabled">ペットの世話</li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LabelList extends Vue {

}
</script>

<style lang="scss" scoped>
  .label {
    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 0 5px -5px;

      &-item {
        text-align: center;
        border-radius: 5px;
        background: map-get($colors, secodary);
        font-size: 1.2rem;
        padding: 2px 5px 0;
        margin: 0 0 5px 5px;
        &.is-disabled {
          color: map-get($colors, base);
          background: #ddd;
        }
      }
    }
  }
</style>
