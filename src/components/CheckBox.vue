<template>
  <div>
    <input
      type="checkbox"
      class="checkbox"
      :id="id"
      :name="name"
      :value="label"
      v-model="jobs"
      @change="add"
    />
    <label :for="id" class="checkbox-label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';

@Component
export default class CheckBox extends Vue {
  @Prop() private id!: string

  @Prop() private name!: string

  @Prop() private label!: string

  @Prop() private checkedJob!: []

  jobs = [];

  @Emit('addJob')
  add() {
    return this.jobs[0];
  }
}
</script>

<style lang="scss" scoped>
  .checkbox {
    display: none;
    &-label {
      cursor: pointer;
      display: block;
      position: relative;
      padding-left: 20px;
      &:before,  &:after {
        content: '';
        display: block;
        position: absolute;
        transition: .3s;
      }
      &:before {
        width: 14px;
        height: 14px;
        border-radius: 2px;
        border: 1px solid #ccc;
        background: #fff;
        top: 3px;
        left: 0;
      }
      &:after {
        width: 4px;
        height: 10px;
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        top: 4px;
        left: 5px;
        transform: rotate(45deg);
        opacity: 0;
      }
      .checkbox:checked + & {
        &:before {
          border-color: map-get($colors, tertiary);
          background: map-get($colors, tertiary);
        }
        &:after {
          opacity: 1;
        }
      }
    }
  }
</style>
