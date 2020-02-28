<template>
  <ul class="footer-navi">
    <li class="footer-navi-item"><router-link to="/">Home</router-link></li>
    <li class="footer-navi-item"><router-link to="/about">About</router-link></li>
    <li class="footer-navi-item"><router-link to="/list">List</router-link></li>
    <li class="footer-navi-item"><router-link to="/detail">Detail</router-link></li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
          &.router-link-exact-active {
            font-weight: bold;
            color: #42b983;
          }
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
