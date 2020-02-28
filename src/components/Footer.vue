<template>
  <footer class="footer">
    <div class="footer-inner">
      <Logo className="footer-logo" />
      <FooterNavi />
      <CopyRight />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './Logo.vue';
import FooterNavi from './FooterNavi.vue';
import CopyRight from './CopyRight.vue';

@Component({
  components: {
    Logo,
    FooterNavi,
    CopyRight,
  },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
  .footer {
    border-top: 1px solid map-get($colors, tertiary);
    padding: 10px;
    &-inner {
      @include inner;
    }
  }
</style>
