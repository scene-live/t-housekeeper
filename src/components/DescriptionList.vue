<template>
  <dl class="description-list">
    <dt class="description-list-term">最寄り駅</dt>
    <dd class="description-list-desc">{{ station }}</dd>
    <dt class="description-list-term">対応エリア</dt>
    <dd class="description-list-desc">{{ area }}</dd>
    <dt class="description-list-term">価格</dt>
    <dd class="description-list-desc">{{ price }}/h</dd>
  </dl>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DescriptionList extends Vue {
  @Prop() private station!: string

  @Prop() private area!: string

  @Prop() private price!: string
}
</script>

<style lang="scss" scoped>
  .description {
    &-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      &-term {
        flex-basis: 6em;
        &:after {
          content: '：'
        }
      }
      &-desc {
        flex-basis: calc(100% - 6em);
      }
    }
  }
</style>
