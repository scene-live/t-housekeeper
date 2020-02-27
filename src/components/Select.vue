<template>
  <dl class="select-wrap">
    <dt><label class="select-label">{{ label}}</label></dt>
    <dd class="select-icon">
      <select
        class="select"
        :name="name"
        v-model="selected"
        @change="onChange"
      >
        <option disabled value="">選択してください</option>
        <option
          v-for="(option, index) in options"
          :key="index"
        >
        {{ option }}
        </option>
      </select>
    </dd>
  </dl>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator';

@Component
export default class Select extends Vue {
  @Prop() private name!: string

  @Prop() private label!: string

  @Prop() private options!: []

  selected = '';

  @Emit('onChange')
  onChange() {
    return this.selected;
  }
}
</script>

<style lang="scss" scoped>
  .select {
    @include formElements;
    padding: 5px;
    &-wrap {
      margin-bottom: 5px;
    }
    &-icon {
      cursor: pointer;
      position: relative;
      &:after {
        content: '';
        pointer-events: none;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 5px 0 5px;
        border-color: map-get($colors, text) transparent transparent transparent;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
