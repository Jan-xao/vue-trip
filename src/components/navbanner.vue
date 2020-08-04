<template>
  <div class="nav_banner">
    <div
      v-for="(item,index) in bannerList"
      :key="item.id"
      :class="tabIndex == index ? 'active' : ''"
      @click="changeTab(index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["bannerList"],
  data() {
    return {
      tabIndex: 0, // 选项卡当前的索引
    };
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    changeTab(index) {
      //修改选项卡的索引，让它等于当前tab的index值
      this.tabIndex = index;
    },
  },
};
</script>

<style lang="stylus" scoped>
.nav_banner{
  height 40px
  display flex
  align-items center
  justify-content space-around
}
.nav_banner>div{
  box-sizing border-box
  width 18vw
  height 22px
  // text-align center
  // line-height 22px
  background white
  border-radius 20px
  display flex
  justify-content center
  align-items center
}
.nav_banner .active{
  border  1px solid #388ef4
}
</style>
