<template>
  <div class="detail">
    <p>This is Detail page.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Detail extends Vue {}
</script>

<style lang="scss" scoped>
  .detail {
   @include inner;
  }
</style>
