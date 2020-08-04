<template>
  <div class="form_list">
    <div class="form_list_item">
      <div class="form_list_left"></div>
      <div class="form_list_right">
        <div class="form_list_title">
          <p>{{formlist.name}}</p>
        </div>
        <div class="form_list_content">
          <div>90's(90-95)</div>
          <div>￥ {{formlist.price}} 起</div>
          <div>7月28日 发团</div>
          <div>去付款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ['formlist'],
  data() {
    return {};
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.form_list{
  display flex
  align-items center
  width 94vw
  height 100px
  background-color white
  border-radius 3px
  margin 0 auto
  margin-top 10px
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
}
.form_list_item{
  display flex
  align-items center
  justify-content space-between
}
.form_list_left{
  background-image url(../assets/images/img2/bl-3@2x.png)
  background-size cover
  width 30vw
  height 88px
  margin 6px
}
.form_list_right{
  width calc(64vw - 18px)
  height 88px
}
.form_list_title{
  font-size 16px
  color black
  align-self flex-start
}
.form_list_content{
  display flex
  flex-wrap wrap
  justify-content space-between
  height 67px
}
.form_list_content>div{
  width 80px
  height 22px
  line-height 22px
  margin-top 10px
}
.form_list_content>div:nth-of-type(odd){
  text-align left 
}
.form_list_content>div:nth-of-type(even){
  text-align center 
}
.form_list_content>div:nth-of-type(2){
  font-size 16px
  font-weight bold
}
.form_list_content>div:nth-of-type(4){
  border 1px solid #388EF4
  box-sizing:content-box
  border-radius 20px 
  line-height 22px
}
</style>
