<template>
  <div>
    <SearchConditions
        :conditions="conditions"
        @deleteCondition="deleteCondition"
      />
    <SearchConntroller />
    <div class="l-list">
      <Card
        :class="['col-2', index < 6 ? 'is-shown' : '']"
        v-for="(list, index) in lists"
        :key="index"
        :name="list.name"
        :image="list.image"
        :comment="list.comment"
        :disabled="list.disabled"
        v-keeper-scroll="showCard"
      />
      <Loading :isLoading="isLoading"/>
      <div v-keeper-scroll="showKeepers"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { housekeepers } from '@/data/data';
import SearchConntroller from '@/components/SearchConntroller.vue';
import Card from '@/components/Card.vue';
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
    SearchConditions,
    SearchConntroller,
    Card,
    Loading,
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

  showCardHeight = window.innerHeight * 0.8;

  mounted() {
    this.getKeeper();
    this.getConditions();
  }

  getConditions() {
    const queries = window.location.search.slice(1);
    if (!queries) return;

    const conditions: string[] = [];
    queries.split('&').forEach((q) => {
      if (!q.split('=')[1]) return;
      conditions.push(decodeURIComponent(q.split('=')[1]));
    });
    this.conditions = conditions;
  }

  showCard(event: Event, element: HTMLElement) {
    if (window.scrollY + this.showCardHeight >= element.offsetTop) element.classList.add('is-shown');
  }

  showKeepers() {
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

<style lang="scss" scoped></style>
