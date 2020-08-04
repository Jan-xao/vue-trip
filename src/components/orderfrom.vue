<template>
  <div class="orderfrom">
    <div id="header">
        <p @click="goback"></p>
        <p>订单支付</p>
    </div>
    <div id="top">
        <p>
            支付时间剩余<span>30</span>分<span>56</span>秒
        </p>
        <p>应支付金额:¥322.00</p>
    </div>
    <div id="top1">
        <p>[引爆假期] 泰国曼谷风景旅游度假村胜酒店(不含早)</p>
        <p>
            <span>10月26日</span>
            <span>3晚</span>
            <span>10月29日</span>
        </p>
        <p>展示全部信息<span></span></p>
    </div>
    <div id="center">
        <p>
            <span></span>
            <span>银行卡支付</span>
            <span></span>
        </p> 
    </div>
    <div id="bottom">
        <p>
            <span></span>
            <span>微信支付</span>
            <span></span>
        </p> 
        <p>
            <span></span>
            <span>支付宝支付</span>
            <span></span>
        </p> 
        <div>

        </div>
    </div>
    <div id="footer">
        <p>立即支付&nbsp;¥360.00</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
        
    }
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
  }
}
</script>

<style scoped>
.orderfrom{
  width: 100vw;
  height: 100vh;
}
#header{
    position: fixed;
    width: 100%;
    height: 2.4rem;
    line-height: 2.2rem;
    color:white;
    background: #58d68d;
}
#header>p{
    height: 1.2rem;
    line-height: 1.2rem;
    display: inline-block;
    vertical-align: middle;
}
#header>p:nth-of-type(1){ 
    width: 1.2rem;
    background: url("../assets/images/img2/fh.png") no-repeat;
    background-size: contain;
    margin-left: 0.5rem;
    
}
#header>p:nth-of-type(2){
    /* display: flex;
    justify-content:center;
    flex-wrap:wrap; */
    width: 45%;
    text-align: center;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}
/* ----------top部分---------- */
#top{
    height: 8rem;
    background: #58d68d;
    box-sizing: border-box;
    padding-top:2.5rem;
    font-size: 0.7rem;
}
#top>p:nth-of-type(1){
    float: left;
    position: relative;
    left:3%;
    height: 1.5rem;
    line-height: 1.5rem;
    background:url("../assets/images/img2/sj.png") no-repeat;
    background-size: contain;
    color: white;
    
    padding-left: 8%;
}
#top>p:nth-of-type(1) span{
    color:#ffed4f;
    font-size: 1rem;
    line-height: normal;
}
#top>p:nth-of-type(2){
    float: right;
    position: relative;
    right: 3%;
    color: white;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: right;
}
/*-------top1部分--------*/
#top1{
    position: absolute;
    height:9.5rem;
    width: 94%;
    background: white;
    border-radius: 0.3rem;
    font-weight: bold;
    box-sizing: border-box;
    padding:0.5rem;
    top: 4.5rem;
    left:50%;
    transform: translateX(-50%);
}
#top1>p:nth-of-type(2){
    display: flex;
    height: 5vh;
    line-height: 5vh;
    margin-top: 1rem;
}
#top1>p:nth-of-type(2)>span:nth-of-type(2){
    display: block;
    width:5vh;
    height: 5vh;
    background: #58d68d;
    border-radius: 50%;
    margin:0 auto;
    text-align: center;
    font-size: 0.7rem;
    color: white;
    font-weight: normal;
}
#top1>p:nth-of-type(3){  
    width: 6rem;
    height: 1.2rem;
    background: white;
    border: 0.8px #dcdcdc solid;
    border-radius: 5px;
    font-size: 0.6rem;
    font-weight: normal;
    line-height: 1.2rem;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 1.2rem;
}
#top1>p:nth-of-type(3)>span{
    display: inline-block;
    width:0.6rem;
    height: 0.6rem;
    background: url("../assets/images/img2/kb42.png") no-repeat;
    background-size: contain;
    margin-left: 0.2rem;
    position: relative;
    top:0.3rem;
    
}
/* ----------center部分--------- */
#center{
    position: absolute;
    height:2.5rem;
    width: 94%;
    background: white;
    border-radius: 0.3rem;
    top: 45vh;
    left:50%;
    transform: translateX(-50%);
    
}
#center>p{
    width:100%;
    height:2.5rem;
    line-height: 2.5rem;
    font-size: 0.9rem;
    
}
#center>p:nth-of-type(1)>span:nth-of-type(1){
    display: inline-block;
    vertical-align: middle;
    width: 1.6rem;
    height: 1.6rem;
    background: url("../assets/images/img2/brank2@2x.png") no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 0.5rem;
}
#center>p:nth-of-type(1)>span:nth-of-type(3){
    float:right;
    width: 1.6rem;
    height: 1.6rem;
    background: url("../assets/images/img2/select.png") no-repeat;
    background-size: 90%;
    background-position: center;
    position: relative;
    top:50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
}

/* ----------bottom部分--------- */
#bottom{
    position: absolute;
    height:7.6rem;
    width: 94%;
    background: white;
    border-radius: 0.3rem;
    top: 56vh;
    left:50%;
    transform: translateX(-50%);
    padding-top: 0.2rem;
}
#bottom>p{
    width:100%;
    height:2.2rem;
    line-height: 2.2rem;
    font-size: 0.9rem;
    
}
#bottom>p:nth-of-type(1)>span:nth-of-type(1){
    display: inline-block;
    vertical-align: middle;
    width: 1.6rem;
    height: 1.6rem;
    background: url("../assets/images/img2/weixin@2x.png") no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 0.5rem;
}
#bottom>p:nth-of-type(1)>span:nth-of-type(3){
    float:right;
    width: 1.6rem;
    height: 1.6rem;
    background: url("../assets/images/img2/select.png") no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    top:50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
}
#bottom>p:nth-of-type(2)>span:nth-of-type(1){
    display: inline-block;
    vertical-align: middle;
    width: 1.6rem;
    height: 1.6rem;
    background: url("../assets/images/img2/zhifubao@2x.png") no-repeat;
    background-size: contain;
    background-position: center;
    margin-left: 0.5rem;
}
#bottom>p:nth-of-type(2)>span:nth-of-type(3){
    float:right;
    width: 1.6rem;
    height: 1.6rem;
    background: url("../assets/images/img2/cg.png") no-repeat;
    background-size: 90%;
    background-position: center;
    position: relative;
    top:50%;
    transform: translateY(-50%);
    margin-right: 0.5rem;
}


/* ----------footer部分--------- */
#footer{
    position: fixed;
    bottom: 0;
    height: 8vh;
    width: 100%;
    background: #58d68d;
    color: white;
    font-size: 1rem;
}
#footer>p{
    display: block;
    line-height: 8vh;
    text-align: center;
}

</style>
