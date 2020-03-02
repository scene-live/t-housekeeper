<template>
  <ul class="errors" v-if="errors.length > 0">
    <li
      v-for="(error, index) in errors"
      :key="index"
      class="errors-item"
    >{{error}}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Errors extends Vue {
  @Prop() private errors!: string[]
}
</script>
<style lang="scss" scoped>
  .errors {
    flex-basis: 100%;
    color: map-get($colors, attention);
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
