<template>
  <p class="logo"><router-link to="/">Logo</router-link></p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
  .logo {
    font-weight: bold;
  }
</style>
