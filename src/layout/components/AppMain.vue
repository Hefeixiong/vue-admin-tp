<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  name: 'AppMain'
})
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  overflow: hidden;
}
</style>
