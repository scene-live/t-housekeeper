<template>
  <div clasa="review">
    <div class="review-box">
      <div class="review-header">
        <p class="review-image"><img :src="image" width="60" height="60"></p>
        <div class="review-info">
          <p class="review-name">{{ name }}</p>
          <p><time>{{ date }}</time></p>
        </div>
      </div>
      <div class="review-content">
        <Stars :star="stars" :half="half" />
        <p>
          {{ review }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Stars from '@/components/Stars.vue';

@Component({
  components: {
    Stars,
  },
})
export default class Review extends Vue {
  @Prop() private name !: string

  @Prop() private date !: string

  @Prop() private image !: string

  @Prop() private stars !: number

  @Prop() private half !: boolean

  @Prop() private review !: string
}
</script>

<style lang="scss" scoped>
  .review {
    &-header {
      display: flex;
      margin-bottom: 5px;
      align-items: center;
    }
    &-image {
      flex-basis: 60px;
      img {
        border-radius: 50%;
      }
    }
    &-info {
      margin-left: 20px;
    }
    &-name {
      font-size: 1.6rem;
      font-weight: bold;
    }
    &-box {
      background: map-get($colors, secodary);
      padding: 10px 20px;
      margin-bottom: 15px;
    }
    &-content {
      background: map-get($colors, base);
      padding: 10px;
    }
  }
</style>
