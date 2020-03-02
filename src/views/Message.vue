<template>
  <h1 class="message">Message</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {}
</script>

<style lang="scss" scoped>
  .message {
    background: red;
  }
</style>
