<template>
  <div id="app">
    <Header />
    <div class="l-contents is-full">
      <div :class="['l-main', 'is-message']">
        <router-view/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Full extends Vue {}

</script>
