<template>
  <nav class="navi">
    <ul class="navi-list">
      <li class="navi-item">
        <a href="#" title="メッセージ"><font-awesome-icon icon="envelope" /></a>
      </li>
      <li class="navi-item">
        <a href="#" title="マイページ"><font-awesome-icon icon="user" /></a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navi extends Vue {}
</script>

<style lang="scss" scoped>
  .navi {
    &-list {
      display: flex;
      align-items: baseline;
    }
    &-item {
      font-size: 2rem;
      margin: 0 10px;
    }
  }
</style>
