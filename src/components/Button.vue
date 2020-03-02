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
    &-register {
      position: relative;
      transition:
        border-radius linear 0.05s,
        width linear .3s,
        height linear .3s;
      &.is-animating {
        width: 60px;
        height: 60px;
        color: transparent;
        border-radius: 50%;
        margin: 0 auto;
        top: -10px;
        &:before, &:after {
          content: '';
          position: absolute;
          display: block;
        }
        &:before {
          border: 3px solid map-get($colors, body);
          border-left-color: transparent;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          animation: submitting ease-in 3s forwards;
        }
        @keyframes submitting {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          90% {
            transform: translate(-50%, -50%) rotate(1080deg);
          }
          100% {
            opacity: 0;
          }
        }
        &.is-success {
          &:after {
            width: 15px;
            height: 25px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border-bottom: 3px solid  map-get($colors, body);
            border-right: 3px solid  map-get($colors, body);
            transform: translate(0, -3px) rotate(45deg);
            animation: success ease-in .2s forwards;
          }
          @keyframes success {
            0% {
              opacity: 0;
              transform: translate(0, -3px) rotate(45deg) scale(0, 0);
            }
            80% {
              opacity: 1;
              transform: translate(0, -3px) rotate(45deg) scale(1.2, 1.2);
            }
            100% {
              opacity: 1;
              transform: translate(0, -3px) rotate(45deg) scale(1, 1);
            }
          }
        }
      }
    }
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
