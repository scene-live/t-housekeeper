<template>
  <div class="list">
    <main class="l-main">
      <SearchConditions
        :conditions="conditions"
        @deleteCondition="deleteCondition"
      />
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
        <Loading :isLoading="isLoading"/>
        <div v-keeper-scroll="onScroll"></div>
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
import Loading from '@/components/Loading.vue';
import SearchConditions from '@/components/SearchConditions.vue';

interface Keeper {
  name: string;
  image: string;
  comment: string;
  disabled: string[];
}


@Component({
  name: 'List',
  components: {
    SearchConntroller,
    Card,
    Search,
    Select,
    Loading,
    SearchConditions,
  },
})
export default class List extends Vue {
  lists: Keeper[] = [];

  scrollY = 0;

  count = 8;

  start = 0;

  end = this.count;

  isLoading = false;

  conditions: string[] = [];

  mounted() {
    this.getKeeper();
    this.getConditions();
  }

  getConditions() {
    const queries = window.location.search.slice(1);
    if (!queries) return;

    const conditions: string[] = [];
    queries.split('&').forEach((q) => {
      conditions.push(decodeURIComponent(q.split('=')[1]));
    });
    console.log(conditions);
    this.conditions = conditions;
  }

  onScroll() {
    if (window.pageYOffset >= this.scrollY && !this.isLoading) {
      this.isLoading = true;
      this.scrollY = window.innerHeight + window.pageYOffset;
      window.setTimeout(this.getKeeper, 1000);
    }
  }

  getKeeper() {
    if (this.lists.length >= housekeepers.length) {
      this.isLoading = false;
      return;
    }

    this.lists = [...this.lists, ...housekeepers.slice(this.start, this.end)];
    this.start += this.count;
    this.end += this.count;
    this.isLoading = false;
  }

  deleteCondition(conditions: string[]) {
    this.conditions = conditions;
    this.start = 0;
    this.end = this.count;
    this.lists = [];
    this.isLoading = true;
    window.setTimeout(this.getKeeper, 1000);
  }
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
