<template>
  <ul class="stars">
    <li class="stars-item"><font-awesome-icon icon="star" /></li>
    <li class="stars-item"><font-awesome-icon icon="star" /></li>
    <li class="stars-item"><font-awesome-icon icon="star" /></li>
    <li class="stars-item"><font-awesome-icon icon="star" /></li>
    <li class="stars-item"><font-awesome-icon icon="star-half" /></li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Stars extends Vue {
  @Prop() private star!: 1|2|3|4|5

  @Prop() private half!: boolean
}
</script>

<style lang="scss" scoped>
  .stars {
    display: flex;
    margin-bottom: 10px;
    path {
      fill: map-get($colors, heighlight);
    }
  }
</style>
