<template>
  <button
    :class="['btn', className ? `btn-${className}` : '']"
    @click="$emit('onClick')"
  >
    <font-awesome-icon v-if="icon" :icon="icon" />
    {{ label }}
  </button>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private label!: string

  @Prop() private className!: string

  @Prop() private icon!: string
}
</script>

<style lang="scss" scoped>
  $buttonColors:
    (primary, map-get($colors, main)),
    (secodary, map-get($colors, secodary)),
    (tertiary, map-get($colors, tertiary)),
    (heighlight, map-get($colors, heighlight)),
    (gray, map-get($colors, #ccc)),
    (disabled, #2C3E50);
  .btn {
    display: block;
    width: 100%;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 8px 5px;
    font-size: 1.6rem;
    border-radius: $borderRadius;
    @each $name, $color in $buttonColors {
      &-#{$name} {
        background: $color;
        @if($name == disabled) {
          color: #fff;
          opacity: .65;
        }
        @if ($name == tertiary or $name == disabled) {
          color: #fff;
        }
      }
    }
  }
</style>
