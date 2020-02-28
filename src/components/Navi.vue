<template>
  <nav class="navi">
    <ul class="navi-list">
      <li
        class="navi-item is-sp"
        @touchstart="toggleSearch"
      >
        <a href="#" title="検索"><font-awesome-icon icon="search" /></a>
      </li>
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navi extends Vue {
  toggleSearch() {
    this.$store.commit('toggle');
  }
}
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
