<template>
  <p class="copy">
    <small>&copy; 2020 Scene Live Inc. All rights reserved.</small>
  </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CopyRight extends Vue {}
</script>

<style lang="scss" scoped>
  .copy {
    text-align: center;
  }
</style>
