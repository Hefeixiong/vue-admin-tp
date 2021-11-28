<template>
  <div :class="classObj" class="app-wrapper">
    <div
        v-if="classObj.mobile && sidebar.opened"
        class="drawer-bg"
        @click="handleClickOutside"/>
      <sidebar class="sidebar-container"/>
      <div class="main-container">
        <navbar/>
        <app-main/>
      </div>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import { mixins } from 'vue-class-component'
import {AppMain, Navbar, Sidebar} from '@/layout/components';
import ResizeMixin from './mixin/resize'
import {AppModule, DeviceType} from '@/store/modules/app';

@Component({
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
})
export default class index extends mixins<ResizeMixin> {
  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.seidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === DeviceType.Mobile
    }
  }

  private handleClickOutside() {
    AppModule.CloseSideBar(false)
  }
}
</script>

<style lang="scss" scoped>

</style>
