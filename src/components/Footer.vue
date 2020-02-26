<template>
  <footer class="footer">
    <div class="footer-inner">
      <Logo className="footer-logo" />
      <!-- <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">List</a></li>
      </ul> -->
      <FooterNavi />
      <CopyRight />
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
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
    border-top: 1px solid map-get($colors, anchor);
    padding: 10px;
    &-inner {
      @include inner;
      // display: flex;
      // flex-wrap: wrap;
    }
  }
</style>
