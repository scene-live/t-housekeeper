<template>
  <ul class="footer-navi">
    <li class="footer-navi-item"><a href="#">Home</a></li>
    <li class="footer-navi-item"><a href="#">About</a></li>
    <li class="footer-navi-item"><a href="#">List</a></li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FooterNavi extends Vue {}
</script>scriptts

<style lang="scss" scoped>
  .footer {
    &-navi {
      display: flex;
      &-item {
        &:before {
          content: '/'
        }
        a {
          padding: 0 10px;
        }
        &:first-child {
          a {
            padding-left: 0;
          }
          &:before {
            content: ''
          }
        }
      }
    }
  }
</style>
