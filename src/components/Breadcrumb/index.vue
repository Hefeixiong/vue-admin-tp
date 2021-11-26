<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group>
      <el-breadcrumb-item>
        <span>xxx</span>
        <a href="">xxxx</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  name: 'Breadcrumb'
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped>

</style>