<template>
  <div class="wrapper">
    <!---轮播广告--->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="banner banner1"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner banner2"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner banner3"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: '',
  data() {
    return {
      swiperOptions:{
        loop : true,
        autoplay: true,   //  自动播放的时间间隔  默认：3000
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
.banner{
  width:100%;
  height: 250px;
}
.banner1{
  background: url("../assets/images/img1/banner@2x.png") no-repeat;
  background-size: cover;
}
.banner2{
  background: url("../assets/images/img1/111.jpg") no-repeat;
  background-size: cover;
}
.banner3{
  background: url("../assets/images/img1/222.jpg") no-repeat;
  background-size: cover;
}
/* 小白点颜色 */
.swiper-container{
  /* --swiper-theme-color: #ff6600; */
  --swiper-pagination-color: white;/* 两种都可以 */
}
</style>
