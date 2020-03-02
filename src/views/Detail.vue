<template>
  <div class="detail">
    <section class="detail-header">
      <p class="detail-image"><img src="/t-housekeeper/boy.svg" alt=""></p>
      <div class="detail-info">
        <h1 class="detail-name">多賀 亮</h1>
        <Stars class="stars-detail" star="4" half="true" />
        <DescriptionList
          class="description-detail"
          station="本町"
          area="大阪市内"
          price="¥3,000~"
        />
      </div>
    </section>
    <section class="detail-box">
      <h2 class="heading-02">
        <font-awesome-icon class="heading-icon" icon="user"></font-awesome-icon>
        プロフィール
      </h2>
      <p>
        プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。
        プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。
        プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。
        プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。
        プロフィールが入ります。プロフィールが入ります。プロフィールが入ります。
      </p>
    </section>
    <section class="detail-box">
      <h2 class="heading-02">
        <font-awesome-icon class="heading-icon" icon="lightbulb"></font-awesome-icon>
        アピールポイント
      </h2>
      <p>
        アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。
        アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。
        アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。
        アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。
        アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。アピールポイントが入ります。
        アピールポイントが入ります。
      </p>
    </section>
    <section class="detail-box">
      <h2 class="heading-02">
        <font-awesome-icon class="heading-icon" icon="check-square"></font-awesome-icon>
        希望条件
      </h2>
      <p>
        希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。
        希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。
        希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。
        希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。希望条件が入ります。
      </p>
    </section>
    <section class="detail-box">
      <h2 class="heading-02">
        <font-awesome-icon class="heading-icon" icon="file-signature"></font-awesome-icon>
        レビュー
      </h2>
      <Review
        name="川上 竜平"
        date="2020/03/03"
        image="/t-housekeeper/female.svg"
        stars="5"
        half="false"
        review="いつも美味しいご飯を作ってもらっています。"
      />
      <Review
        name="多賀 ryo"
        date="2020/03/03"
        image="/t-housekeeper/maturewoman.svg"
        stars="4"
        half="true"
        review="綺麗に掃除してくれます。"
      />
    </section>
    <section class="detail-box">
      <h2 class="heading-02">
        <font-awesome-icon class="heading-icon" icon="calendar-check"></font-awesome-icon>
        依頼する
      </h2>
      <Calendar />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calendar from '@/components/Calendar.vue';
import Stars from '@/components/Stars.vue';
import DescriptionList from '@/components/DescriptionList.vue';
import Review from '@/components/Review.vue';


@Component({
  components: {
    Calendar,
    Stars,
    DescriptionList,
    Review,
  },
})
export default class Detail extends Vue {}
</script>

<style lang="scss" scoped>
$marginBottom: 30px;
  .detail {
    @include inner;
    &-header {
      display: flex;
      @media #{$not_sp} {
        margin-bottom: $marginBottom;
      }
    }
    &-image {
      @media #{$sp} {
        flex-basis: 150px;
      }
      @media #{$not_sp} {
        flex-basis: 300px;
        img {
          border-radius: 50%;
        }
      }
    }
    &-info {
      margin-left: 30px;
    }
    &-name {
      font-weight: bold;
      font-size: 1.8rem;
      @media #{$not_sp} {
        font-size: 3rem;
      }
    }
    &-box {
      margin-bottom: $marginBottom;
    }
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
