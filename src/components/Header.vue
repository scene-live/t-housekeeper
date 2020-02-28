<template>
  <header class="header">
    <div class="header-inner">
      <Logo />
      <Navi />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
import Navi from './Navi.vue';

@Component({
  components: {
    Logo,
    Navi,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  .header {
    background: map-get($colors, main);
    padding: 10px;
    position: sticky;
    top: 0;
    box-shadow: 0 3px 3px -3px #ccc;
    z-index: map-get($zIndex, header);
    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
