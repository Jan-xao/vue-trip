<template>
  <div>
    <div id="header">
      <span></span>
      <form action="">
          <input type="search" placeholder="请输入您要搜索的内容">
      </form>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vheader',
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
#header{
    width: 100%;
    padding: 1rem 0;
    background-color: transparent;
    position: fixed;
    top: 0;
    z-index: 2;
}
#header *{
    vertical-align: top;
}
#header span{
    width: 10%;
    height: 2.5rem;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
}
#header span:nth-of-type(1){
    background-image: url("../assets/images/img1/saoyisao@2x.png");
    background-size: contain;
    margin-left: 5%;
}
#header span:nth-of-type(2){
    background-image: url("../assets/images/img1/xiaoxi@2x.png");
    background-size: contain;

}
#header form{
    display: inline-block;
    width: 70%;
    height: 2.5rem;
    background-color: white;
    border-radius: 2rem;
}
#header form:before{
    content: "";
    display: inline-block;
    width: 12%;
    height: 1.8rem;
    background-image: url("../assets/images/img1/sousuo@2x.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    top: 0.4rem;
}
#header form input{
    height: 2.5rem;
    width:75%;
    font-size: 1.3rem;
}
</style>
