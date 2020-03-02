<template>
  <div id="app">
    <Header />
    <component v-bind:is="getLayout()"></component>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';
import Default from '@/layouts/Default.vue';
import Full from '@/layouts/Full.vue';

@Component({
  components: {
    Header,
    Search,
    Footer,
    Default,
    Full,
  },
})
export default class App extends Vue {
  getLayout() {
    return this.$route.meta.layout ? this.$route.meta.layout : 'default';
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
