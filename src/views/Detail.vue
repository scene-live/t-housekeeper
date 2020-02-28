<template>
  <div class="detail">
    <h1>名前</h1>
    <h2 class="heading-02">
      <font-awesome-icon class="heading-icon" icon="user"></font-awesome-icon>
      プロフィール
    </h2>
    <h2 class="heading-02">
      <font-awesome-icon class="heading-icon" icon="lightbulb"></font-awesome-icon>
      アピールポイント
    </h2>
    <h2 class="heading-02">
      <font-awesome-icon class="heading-icon" icon="check-square"></font-awesome-icon>
      希望条件
    </h2>
    <h2 class="heading-02">
      <font-awesome-icon class="heading-icon" icon="file-signature"></font-awesome-icon>
      レビュー
    </h2>
    <h2 class="heading-02">
      <font-awesome-icon class="heading-icon" icon="calendar-check"></font-awesome-icon>
      依頼する
    </h2>
    <Calendar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calendar from '@/components/Calendar.vue';

@Component({
  components: {
    Calendar,
  },
})
export default class Detail extends Vue {}
</script>

<style lang="scss" scoped>
  .detail {
    @include inner;
  }
  .heading {
    &-02 {
      color: map-get($colors, heading);
      font-weight: bold;
      border-bottom: 1px solid map-get($colors, heading);
      font-size: 2rem;
      margin-bottom: 20px;
    }
    &-icon {
      margin-right: 0.2em;
    }
  }
</style>
