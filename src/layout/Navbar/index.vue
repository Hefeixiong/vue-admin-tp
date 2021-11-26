<template>
  <div class="navbar">
    <hamburger
        id="hamburger-container"
        :is-active="sidebar.open"
        class="hamburger-container"
        @toggle-click="toggleSideBar"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Hamburger from '@/components/Hamburger/index'

@Component({
  name: 'Navbar',
  components: {
    Hamburger
  }
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped>

</style>