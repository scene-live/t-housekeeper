<template>
  <div class="card">
    <a href="/#/detail">
      <header class="card-header">
        <p class="card-image"><img :src="image" :alt="name" width="150" height="150"></p>
        <div class="card-info">
          <h1 class="card-title">{{ name }}</h1>
          <Stars  star="4" half="true" />
          <DescriptionList
            station="本町"
            area="大阪市内"
            price="¥3,000~"
          />
        </div>
      </header>
      <LabelList
        :disabled="disabled"
      />
      <p class="card-comment">{{ comment }}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Stars from '@/components/Stars.vue';
import DescriptionList from '@/components/DescriptionList.vue';
import LabelList from '@/components/LabelList.vue';

@Component({
  components: {
    Stars,
    DescriptionList,
    LabelList,
  },
})
export default class Card extends Vue {
  @Prop() private name!: string

  @Prop() private image!: string

  @Prop() private comment!: string

  @Prop() private disabled!: string[]
}
</script>

<style lang="scss" scoped>
  $cardImage: (
    width: 150px,
    marginRight: 20px,
  );
  $cardImageArea: map-get($cardImage, width) + map-get($cardImage, marginRight);
  .card {
    background: #fff;
    border-radius: 5px;
    padding: 15px 10px;
    box-shadow: 0 0 1px 1px rgba(20, 20, 20, .1);
    width: 100%;
    margin-bottom: 25px;
    opacity: 0;
    transform: translateY(50px);
    transition: 1.6s;
    &:nth-child(odd) {
      transition: .8s;
    }
    &.is-shown {
      opacity: 1;
      transform: translateY(0);
    }
    a {
      display: block;
      @media #{$not_sp} {
        &:hover {
          opacity: .6;
          text-decoration: none;
        }
      }
    }
    &-header {
      border-bottom: 1px solid #eee;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
    }
    &-info {
      flex-basis: calc(
        100% - (#{map-get($cardImage, width)} + #{map-get($cardImage, marginRight)})
      );
      .is-small & {
        flex-basis: 100%;
      }
    }
    &-title {
      font-size: 2rem;
      padding-top: 5px;
      margin-bottom: 10px;
    }
    &-image {
      max-width: map-get($cardImage, width);
      margin: 0 map-get($cardImage, marginRight) 0 0;
      .is-small & {
        flex-basis: 100%;
        margin: 0 auto 10px;
      }
      img {
        border-radius: 50%;
      }
    }
  }
</style>
