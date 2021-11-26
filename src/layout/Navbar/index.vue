<template>
  <div class="navbar">
    <hamburger
        id="hamburger-container"
        :is-active="sidebar.open"
        class="hamburger-container"
        @toggle-click="toggleSideBar"/>
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container"/>

    <div class="right-menu">
      <template>

        <div class="avatar-wrapper">
<!--          <img-->
<!--              :src="avatar+'?imageView2/1/w/80/h/80'"-->
<!--              class="user-avatar"-->
<!--          >-->
          <i class="el-icon-caret-bottom" />
        </div>
        <a
            href="https://github.com/Hefeixiong/vue-admin-tp"
            target="_blank">
          <el-dropdown-item>GitHub</el-dropdown-item>
        </a>
      </template>
    </div>
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