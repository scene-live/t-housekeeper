<template>
  <p v-if="isLoading" class="loading"><font-awesome-icon icon="spinner" /></p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  @Prop() private isLoading!: boolean;
}
</script>

<style lang="scss" scoped>
  .loading {
    font-size: 4rem;
    margin: 0 auto;
    svg {
      animation: load 1.2s infinite linear;
    }
    path {
      fill: map-get($colors, tertiary);
    }
  }
  @keyframes load {
    0% {
      transform: rotate(0);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
