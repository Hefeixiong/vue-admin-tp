<template>
  <div class="navbar">
    <hamburger
        id="hamburger-container"
        :is-active="sidebar.open"
        class="hamburger-container"
        @toggle-click="toggleSideBar"/>
    <breadcrumb/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue';

@Component({
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb
  }
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped>

</style>