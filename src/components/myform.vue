<template>
  <div class="myform">
    <back-header textconent="我的订单"></back-header>
    <nav-banner :bannerList="bannerList"></nav-banner>
    <form-list v-for="item in formlists" :key="item.id" :formlist="item">
    </form-list>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import backheader from "./backheader";
import navbanner from "./navbanner";
import formlist from "./formlist";
import bottom from "./bottom";
export default {
  name: "",
  data() {
    return {
      bannerList: [
        {
          id: 1,
          name: "全部",
        },
        {
          id: 2,
          name: "待付款",
        },
        {
          id: 3,
          name: "待出行",
        },
        {
          id: 4,
          name: "待点评",
        },
      ],
      formlists: [
        {
          id: 0,
          name: "贝加尔湖.奇幻蓝冰",
          price: 980,
        },
        {
          id: 1,
          name: "格莱美大酒店",
          price: 520,
        },
        {
          name: "贝加尔湖.奇幻蓝冰",
          price: 980,
        },
      ],
    };
  },
  components: {
    "back-header": backheader,
    "nav-banner": navbanner,
    "form-list": formlist,
    "v-bottom": bottom,
  },
  created() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="stylus" scoped>
.myform{
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 250, 250);
}
</style>
