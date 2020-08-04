<template>
  <div class="set">
    <back-header textconent="设置"></back-header>
    <nav-list :navlist="setlist"></nav-list>
  </div>
</template>

<script>
import backheader from './backheader' 
import navlist from './navlist'

export default {
  name: '',
  data() {
    return {
      setlist: [
        {
          id: 0,
          name: '个人资料'
        },
        {
          id: 1,
          name: '实名认证'
        },
        {
          id: 2,
          name: '城市设置'
        }
      ]
    }
  },
  components:{
    'back-header': backheader,
    'nav-list': navlist
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.set{
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 250, 250);
}
.navlist{
  margin-top: 10px;
}
</style>
