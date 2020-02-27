<template>
  <ul class="conditions">
    <li
      v-for="(condition, index) in conditions"
      :key="index"
      class="conditions-item"
    >
      {{ condition }}
      <span
        class="conditions-delete"
        :data-condition="condition"
        @click="deleteCondition"
      >
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';

@Component
export default class SearchConditions extends Vue {
  @Prop() private conditions!: [];

  @Emit('deleteCondition')
  deleteCondition(e) {
    return this.conditions.filter((c) => c !== e.target.getAttribute('data-condition'));
  }
}
</script>

<style lang="scss" scoped>
  .conditions {
    display: flex;
    flex-wrap: wrap;
      margin-left: -10px;
    &-item {
      text-align: center;
      margin-bottom: 5px;
      padding: 0 24px 0 10px;
      margin-left: 10px;
      background: map-get($colors, tertiary);
      color: map-get($colors, base);
      border-radius: $borderRadius;
      position: relative;
    }
    &-delete {
      display: block;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 2px;
      transform: translateY(-50%);
      cursor: pointer;
      &:before, &:after {
        content: '';
        position: absolute;
        display: block;
        background: map-get($colors, base);
        width: 2px;
        height: 12px;
        right: 6px;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
