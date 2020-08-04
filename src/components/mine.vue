<template>
  <div class="mine">
    <div class="box">
      <div class="photo"></div>
      <div>
        <span>用户名: <span id="username">{{userPerson}}</span></span>
      </div>
    </div>
    <div class="noneicon">
      <nav-list class="noicon" :navlist="firstlist"></nav-list>
    </div>
    <div class="firstlist">
      <div class="firstlist-item" v-for="item in bannerlist" :key="item.id">
        <div>
          <span class="iconfont" :style="{color: item.color}" v-html="item.icon"></span>
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
    <nav-list :navlist="twolist"></nav-list>
    <nav-list :navlist="thirdlist"></nav-list>
    <div class="loginout" @click="loginout">
        <span>退出登录</span>
    </div>

    <v-bottom></v-bottom>
  </div>
</template>

<script>
import navlist from "./navlist"
import bottom from "./bottom";
import { mapState } from "vuex";

export default {
  name: "",
  data() {
    return {
      firstlist: [
        {
          id: 0,
          name: '我的订单',
          icon: '',
          gopath: '/myform'
        }
      ],
      bannerlist: [
        {
          id: 0,
          name: '电子票',
          icon: '&#xe668;',
          color: '#F4D848'
        },
        {
          id: 1,
          name: '优惠券',
          icon: '&#xe69f;',
          color: '#FF6000'
        },
        {
          id: 2,
          name: '钱包',
          icon: '&#xe606;',
          color: '#FE8A95'
        },
        {
          id: 3,
          name: '积分',
          icon: '&#xe639;',
          color: '#8FCCFE'
        }
      ],
      twolist: [
        {
          id: 0,
          name: '常用信息',
          icon: '&#xe6b8;',
          gopath: '/commoninfo'
        },
        {
          id: 1,
          name: '我的收藏',
          icon: '&#xe730;',
          gopath: '/mycollection'
        },
        {
          id: 2,
          name: '我的游记',
          icon: '&#xe828;',
          gopath: '/mytravels'
        },
        {
          id: 3,
          name: '我的关注',
          icon: '&#xe7ce;',
          gopath: '/myfocus'
        },
        {
          id: 4,
          name: '浏览历史',
          icon: '&#xe6f3;',
        }
      ],
      thirdlist: [
        {
          id: 0,
          name: '设置',
          icon: '&#xe6b8;',
          gopath: '/set'
        },
        {
          id: 1,
          name: '意见反馈',
          icon: '&#xe730;'
        }
      ]
    };
  },
  created() {},
  computed: {
    ...mapState(["userPerson"])
  },
  watch: {},
  methods: {
    loginout() {
      let x = confirm("您确认退出吗?");
      if (x) {
        // 清空 token 必须有 token
        window.sessionStorage.clear()
        this.$router.push("login");
        
        // 退出后禁止返回
        history.pushState(null, null, document.URL);
        window.addEventListener(
          "popstate",
          function() {
            history.pushState(null, null, document.URL);
          },
          false
        );
      } else {
        return;
      }
    }
  },
  components: {
    "v-bottom": bottom,
    "nav-list": navlist
  }
};
</script>

<style scoped>
.mine{
  padding-bottom: 70px;
  background-color: rgb(250, 250, 250);
}
.iconfont{
  margin: 0 !important;
}
.box {
  width: 100%;
  height: 180px;
  background: url(../assets/images/img2/bl-3@2x.png) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  font-size: 1.2rem;
}
.box>div{
  margin: 0 auto
}
.box>div{
  line-height: 30px;
  text-align: center;
}
.photo{
  width: 80px;
  height: 80px;
  background-image: url("../assets/images/img1/photo.png");
  background-size: contain;
  border-radius: 50%;
  border: 2px solid white;
}
#username{
  color: rgb(255, 255, 255);
}
/* 全部订单开始 */
.form{
  width: 100%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-bottom: rgb(226, 226, 226) 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form span{
  font-family:Helvetica;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px;
}
/* 全部订单结束 */
/* 为navlist设置样式 */
.navlist:not(.noicon){
  margin-top: 10px;
}
/* 给组件外面套个div然后使用>>>做样式穿透 */
.noneicon>>>.navlist:nth-of-type(1){
  border-top: none;
}
/* 第一个列表项开始 */
.firstlist{
  margin-top: 10px;
  width: 100%;
  height: 90px;
  border-top: rgb(226, 226, 226) 1px solid;
  border-bottom: rgb(226, 226, 226) 1px solid;
  display: flex;
}
.firstlist-item{
  background-color: white;
  position: relative;
  flex: 1;
}
.firstlist-item>div{
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.firstlist-item span{
  font-size: 32px;
  
}
.firstlist-item>p{
  text-align: center;
  line-height: 30px;
}
/* 第一个列表项结束 */
.loginout{
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-top: rgb(226, 226, 226) 1px solid;
  border-bottom: rgb(226, 226, 226) 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
