<template>
  <input class="input" type="text" :placeholder="placeholder">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InputText extends Vue {
  @Prop() private placeholder!: string
}
</script>

<style lang="scss" scoped>
  .input {
    @include formElements;
  }
</style>
