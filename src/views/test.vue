<template>
  <div>
    <svg-icon name="hamburger" width="20" height="20"/>
    <breadcrumb>xxx</breadcrumb>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import SvgIcon from 'vue-svgicon';
import Breadcrumb from '@/components/Breadcrumb/index.vue';

@Component({
  components: {
    SvgIcon,
    Breadcrumb
  }
})
export default class test extends Vue {}
</script>

<style lang="scss" scoped>

</style>