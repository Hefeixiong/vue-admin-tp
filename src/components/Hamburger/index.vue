<template>
  <div :class="[{'is-active': isActive}]" @click="toggleClick">
  <svg-icon name="hamburger" width="20" height="20"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import SvgIcon from 'vue-svgicon';

@Component({
  name: 'Hamburger',
  components: {SvgIcon}
})
export default class index extends Vue {
  @Prop({default: false}) private  isActive!: boolean

  private toggleClick() {
    this.$emit('toggle-click')
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  vertical-align: middle;
}
.is-active {
  transform: rotate(180deg);
}
</style>