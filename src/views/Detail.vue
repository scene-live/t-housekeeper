<template>
  <div class="detail">
    <p>This is Detail page.</p>
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
</style>
