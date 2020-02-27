<template>
  <div class="list">
    <main class="l-main">
      <SearchConntroller />
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
import { Component, Vue } from 'vue-property-decorator';
import { housekeepers } from '@/data/data';
import SearchConntroller from '@/components/SearchConntroller.vue';
import Card from '@/components/Card.vue';
import Search from '@/components/Search.vue';
import Select from '@/components/Select.vue';

@Component({
  name: 'List',
  components: {
    SearchConntroller,
    Card,
    Search,
    Select,
  },
})
export default class List extends Vue {
  lists = housekeepers;
}
</script>

<style lang="scss" scoped>
  .list {
    @include inner;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
</style>
