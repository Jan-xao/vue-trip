import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './mock/mockServer' // 引入加载模块
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import cookie from './until/cookie'
Vue.prototype.cookie = cookie
Vue.prototype.goback = function(){
  router.go(-1)
}

import 'swiper/css/swiper.css'
import './assets/css/reset.css'
import './assets/css/iconfont.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
