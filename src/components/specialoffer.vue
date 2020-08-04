<template>
  <div>
    <!---------特价------------>
    <div id="sp_price">
        <div class="left">
            <div>
                <p class="hh">倒计时:20:36:30</p>
            </div>
        <p>[引爆假期] 泰国曼谷风景旅游度假村胜酒店...</p>
        <p>
            <span>¥666.00</span>
            <span>起</span>
        </p>
        </div>
        <div class="right">
            <div>
                <h2>特价酒店</h2>
                <span></span>
            </div>
            <p></p>
            <span>意大利5天4晚酒店（适合情侣）</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
/*------------- 特价 ------------*/
#sp_price{
    display:flex;   /* 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。 */
    height: 16rem;
    justify-content:center; /* 项目位于容器的中心。 */
    flex-wrap:wrap; /* 规定灵活的项目在必要的时候拆行或拆列。 */
}

#sp_price>div{
    /* border: red 1px solid; */
    width: 46%;
    display: inline-block;
    vertical-align: top;
    margin: 1%;
    
}
#sp_price .left{
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
}
#sp_price .left>div{
    background: url("../assets/images/img1/djstp.png");
    height: 8rem;
    background-size: cover;
    background-repeat: no-repeat;
}
.hh{
    width: 48%;
    background: #58d68d;
    color: white;
    /* text-indent:5px; */
    text-align: center;
    height: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    border-radius: 5px 0 1rem 0;
}
#sp_price .left>p:nth-child(2){  
    font-size: 1.2rem;
    text-indent: 0.6rem;      /* 行缩进 */
    margin: 0.8rem 0.3rem 0 0.3rem;
}
#sp_price .left>p:nth-child(3){  
    font-size: 1.2rem;
    text-indent: 0.5rem;      /* 行缩进 */
    line-height: 3rem;
}
#sp_price .left>p:nth-child(3) span:first-child{
    font-size: 1.2rem;
    color: red;
    text-indent: 1rem;      /* 行缩进 */
    height: 4rem;
    line-height: 3rem;
    /* margin-top: 0.8rem; */
}
/* --------特价右侧 --------*/
#sp_price .right{
    background: url("../assets/images/img1/z26.png");
    background-size: 107%;
    background-position: center;
    border-radius: 0.5rem;
    position: relative;
}

#sp_price .right>div{
    background-color: #48d68d;
    height: 5rem;
    border-radius: 0.5rem;
    background-image: url("../assets/images/img1/jiudian-3@2x.png");
    background-repeat: no-repeat;
    background-size: 25%;
    background-position: 90% center;
}
#sp_price .right>div h2{
    color: white;
    font-size: 1.7rem;
    font-weight: lighter;
    line-height: 5rem;
    text-indent: 1rem;
    display: inline-block;
}
#sp_price .right>div span{
    display: inline-block;
    width: 2rem;
    height: 5rem;
    background-image: url("../assets/images/img1/箭头@2x.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
}
.right>div h2,span{
    vertical-align: top;
}
.right>p{
    width: 100%;
    height: 2rem;
    background-color: #555555;
    border-radius: 0 0 0.5rem 0.5rem;
    position: absolute;
    bottom: 0;
    opacity: 0.6;/* 透明度 */
}
.right>span{
    display: inline-block;
    height: 2rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    color:white;
    text-align: center;
    line-height: 2rem;
}
</style>
