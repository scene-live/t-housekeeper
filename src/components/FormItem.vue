<template>
  <dl class="form-item">
    <dt class="form-item-label">
      {{ label }}
      <span v-if="isRequired" class="is-required">※</span>
    </dt>
    <dd
      :class="['form-item-content',
        isFlex ? 'is-flex' : '',
        isCheck ? 'is-check' : '',
        isDate ? 'is-date' : '',
        ]"
    >
      <slot></slot>
    </dd>
  </dl>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop() private label!: string

  @Prop() private isFlex?: boolean

  @Prop() private isCheck?: boolean

  @Prop() private isDate?: boolean

  @Prop() private isRequired?: boolean
}
</script>

<style lang="scss" scoped>
  .form-item {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid map-get($colors, tertiary);
    font-size: 1.6rem;
    &:last-of-type {
      border-bottom: none;
    }
    &-label {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .is-required {
      color: map-get($colors, attention);
      position: relative;
      top: -2px;
    }
    &-content {
      &.is-flex {
        display: flex;
        flex-wrap: wrap;
      }
      &.is-check {
        > * {
          flex-basis: 50%;
          margin-bottom: 5px;
        }
      }
      &.is-date {
        align-items: center;
        justify-content: space-between;
        > * {
          flex-basis: 46%;
        }
      }
    }
  }
</style>
