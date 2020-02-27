<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <main class="l-main">
      <div class="l-container">
        <Card
          class="col-2"
          v-for="(list, index) in lists"
          :key="index"
          :name="list.name"
          :image="list.image"
          :comment="list.comment"
          :disabled="list.disabled"
        />
      </div>
    </main>
    <aside class="l-side">
      <Search />
    </aside>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Vue } from 'vue-property-decorator';
import { housekeepers } from '@/data/data';
import Card from '@/components/Card.vue';
import Search from '@/components/Search.vue';

@Component({
  name: 'Home',
  components: {
    Card,
    Search,
  },
})
export default class Home extends Vue {
  lists = housekeepers;
}
</script>

<style lang="scss" scoped>
  .home {
    @include inner;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
</style>
