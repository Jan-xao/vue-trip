<template>
  <div>
    <!------超值特惠-------->
    <div id="super_price">
        <!--标题部分-->
        <div>
            <h2>超值特惠</h2>
            <span>查看更多&gt;</span>
        </div>
        <!-----特惠酒店列表---->
        <div class="jd_list">
            <div v-for="item in jdlist" :key="item.id">
                <!-- 这里添加背景不能直接使用background -->
                <p :style="{ backgroundImage: 'url('+item.imgsrc+')' }"></p>
                <p>{{item.name}}</p>
                <p>
                    <span>{{item.price}}</span>
                    <span> 起</span>
                </p>
            </div>
        </div>
        <img id="gg" src="../assets/images/img1/x-banner@2x.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
        jdlist: [
            {
                id: 0,
                name: '欧洲第一大酒店度假村跟团...',
                price: '¥367.00',
                imgsrc: require(`@/assets/images/img1/222.jpg`)
            },
            {
                id: 1,
                name: '戛纳马丁内斯酒店',
                price: '¥358.00',
                imgsrc: require('../assets/images/img1/111.jpg')
            },
            {
                id: 2,
                name: '巴哈马天堂岛亚特兰蒂斯酒店',
                price: '¥520.00',
                imgsrc: require('../assets/images/img1/tupian-3@2x.png')
            },
            {
                id: 3,
                name: '加勒比海安圭拉岛Altamer酒店',
                price: '¥618.00',
                imgsrc: require('../assets/images/img2/bl-3@2x.png')
            },
            {
                id: 4,
                name: '阿联酋迪拜阿拉伯塔酒店',
                price: '¥399.00',
                imgsrc: require('../assets/images/img2/lb-2@2x.png')
            },
            {
                id: 5,
                name: '瑞士日内瓦威尔逊总统酒店',
                price: '¥550.00',
                imgsrc: require('../assets/images/img2/lb-5@2x.png')
            }
        ]
    }
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
/*-----------超值特惠1----------*/
/* #super_price{
    padding-top: 1rem;
    position: absolute;
} */
#super_price>div:first-child h2{
    font-size: 2rem;
    font-weight: lighter;
    height: 4rem;
    line-height: 4rem;
    text-indent: 1rem;
    color: black;
    display: inline-block;
}
#super_price>div:first-child span{
    display: inline-block;
    height: 4rem;
    line-height: 4rem;
    position: absolute;
    right: 10%;
}
/* ---超值特惠-酒店列表---- */
.jd_list{
    display:flex;   /* 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。 */
    justify-content:center; /* 项目位于容器的中心。 */
    flex-wrap:wrap;
}
.jd_list>div{
    display: inline-block;
    width: 30%;
    margin:1%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
    border-radius: 0.5rem;
}
.jd_list>div p{
   padding-left:0.5rem
}
.jd_list>div p:nth-child(2){
    font-size: 1.2rem;
    color: black;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.jd_list>div p:last-child span:first-child{
    color: red;
   
}
.jd_list>div p:last-child span{
    line-height: 2.5rem;
}
.jd_list>div p:first-child{
    /* background-image: url("../assets/images/img1/222.jpg"); */
    height: 6rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0.5rem 0.5rem 0 0;
}
#gg{
    width: 94%;
    margin: 3%;
    padding-bottom: 60px;
}
</style>
