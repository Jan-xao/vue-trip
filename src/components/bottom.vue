<template>
  <div class="bottom">
    <div class="contain">
      <router-link 
        tag="div"
        v-for="item in buttons" 
        :key="item.id" 
        :to="{ path: item.gopath }"
      >
        <span class="iconfont" :style="{color: item.color}" v-html="item.icon"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  data() {
    return {
      buttons: [
        {
				  id: 1,
				  content:'首页',
          gopath: '/home',
          icon: '&#xe601;',
          color: '#07C160'
        },
        {
				  id: 2,
          content:'行程',
          gopath: '/trip',
          icon: '&#xe614;',
          color: '#FFA162'
        },
        {
				  id: 3,
          content:'订单',
          gopath: '/myform',
          icon: '&#xe600;',
          color: '#1296DB'
        },
        {
          id: 4,
          content:'我的',
          gopath: '/mine',
          icon: '&#xe602;',
          color: '#1296DB'
        }]
    }
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
.bottom{
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255);
  border-top: whitesmoke 1px solid;
}
.contain{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.contain>div{
  width: 40px;
  height: 40px;
  background-color: rgb(250, 250, 250);
  border-radius: 3px;
  line-height: 40px;
  text-align: center;
  color: white;
}
</style>
