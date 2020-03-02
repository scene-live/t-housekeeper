<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/detail">Detail</router-link> |
      <router-link to="/message">Message</router-link>
    </div>
    <div class="l-contents">
      <div :class="['l-main', this.$route.name === 'Home' ? 'is-full' : '']">
        <router-view/>
      </div>
      <aside v-if="this.$route.name !== 'Home'" class="l-side">
        <Search />
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/Search.vue';

@Component({
  components: {
    Search,
  },
})
export default class Default extends Vue {}

</script>
