<template>
  <ul class="label-list">
    <li
      v-for="(job, index) in jobTypeList"
      :key="index"
      :class="['label-list-item', disabled.includes(job) ? 'is-disabled' : '']"
    >
    {{ job }}
    </li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { jobType } from '@/data/data';

@Component
export default class LabelList extends Vue {
  @Prop() private disabled!: string[]

  jobTypeList = jobType;
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
