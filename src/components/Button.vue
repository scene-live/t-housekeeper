<template>
  <button
    class="btn"
    @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
  $buttonColors:
    (primary, map-get($colors, main)),
    (secodary, map-get($colors, secodary)),
    (tertiary, map-get($colors, tertiary)),
    (heighlight, map-get($colors, heighlight)),
    (gray, map-get($colors, #ccc)),
    (disabled, map-get($colors, disabled));
  .btn {
    display: block;
    width: 100%;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 8px 5px;
    font-size: 1.6rem;
    border-radius: $borderRadius;
    @media #{$pc} {
      &:hover {
        opacity: .8;
      }
    }
    @each $name, $color in $buttonColors {
      &-#{$name} {
        background: $color;
        @if($name == disabled) {
          color: #fff;
          opacity: .65;
          @media #{$pc} {
            &:hover {
              opacity: .5;
            }
          }
        }
        @if ($name == tertiary or $name == disabled) {
          color: #fff;
        }
      }
    }
  }
</style>
