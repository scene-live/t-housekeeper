<template>
  <p :class="['logo', className ? className : '']">Logo</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
  @Prop() private className!: string
}
</script>

<style lang="scss" scoped>
  .logo {
    font-weight: bold;
  }
</style>
