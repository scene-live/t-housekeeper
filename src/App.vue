<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/detail">Detail</router-link>
    </div>
    <div class="l-contents">
      <div :class="['l-main', this.$route.name === 'Home' ? 'is-full' : '']">
        <router-view/>
      </div>
      <aside v-if="this.$route.name !== 'Home'" class="l-side">
        <Search />
      </aside>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Search,
    Footer,
  },
})
export default class App extends Vue {}
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
