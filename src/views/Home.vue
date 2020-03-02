<template>
  <div class="">
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { housekeepers } from '@/data/data';

@Component({
  name: 'Home',
})
export default class Home extends Vue {
  lists = housekeepers;
}
</script>

<style lang="scss" scoped></style>
