<template>
  <div>
    <!--二级导航，酒店，机票,火车票-->
    <div id="center_nav">
        <ul>
            <li v-for="item in list.navlist" :key="item.id"> 
                <p></p>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: '',
  data() {
    return {
        navlist:[]
    }
  },
  created() {},
  computed: {
    ...mapState(['list'])
  },
  watch: {},
  methods: {}
}
</script>

<style scoped>
/*----------------��������--------------------*/
#center_nav{
    background-color: #ffffff;
    border-radius: 1.5rem 1.5rem 0 0;
    position: relative;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
}
#center_nav ul{
    display:flex;   /* 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。 */
    height: 15rem;
    justify-content:center; /* 项目位于容器的中心。 */
    flex-wrap:wrap; /* 规定灵活的项目在必要的时候拆行或拆列。 */
}
#center_nav ul li{
    display: inline-block;
    width: 19%;
    text-align: center;
    letter-spacing:2px;
    font-weight: 500;   /* 100, 200, 300, 400(normal), 500, 600, 700(bold、 lighter、 bolder )*/
    height:5rem;
}
/* 给所有列表里第一个p标签设置统一样式 */
#center_nav ul li:nth-child(1) p:first-child{
    height: 6rem;   /* 块元素没有内容就没有高度
                    行内元素没有内容就没有宽度 */
    background: url("../assets/images/img1/jd.png") no-repeat;
    background-size: contain;   /* 使其宽度和高度完全适应内容区域。 */
    background-position: center;
}
#center_nav ul li:nth-child(2) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/jp.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(3) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/hcp.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(4) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/qcp.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(5) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/jdmp.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(6) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/hd.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(7) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/yhj.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(8) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/tjjd.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(9) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/fj.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
#center_nav ul li:nth-child(10) p:first-child{
    height: 6rem;
    background: url("../assets/images/img1/gd.png") no-repeat;
    background-size: contain;  
    background-position: center;
}
</style>
