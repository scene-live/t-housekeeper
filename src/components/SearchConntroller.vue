<template>
  <div class="search-controller">
    <p class="search-controller-number">検索結果：60件</p>
    <div class="search-controller-sort">
      <Select
        name="sort"
        label="並び順"
        :options="['新着', 'レビュー', 'レビュー数']"
        class="is-horizon"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Select from '@/components/Select.vue';

@Component({
  components: {
    Select,
  },
})
export default class SearchConntroller extends Vue {}
</script>

<style lang="scss" scoped>
  .search {
    &-controller {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 10px;
      &-number {
        font-size: 1.8rem;
        @media #{$sp} {
          flex-basis: 100%;
        }
        @media #{$pc} {
          font-size: 2rem;
        }
      }
      &-sort {
        flex-basis: 224px;
        @media #{$sp} {
          margin-left: calc(100% - 224px);
        }
        @media #{$pc} {
          flex-basis: 29%;
        }
      }
    }
  }
</style>
