<template>
  <div class="backheader">
    <div>
      <span class="iconfont" @click="goback">&#xe603;</span>
      <span>{{textconent}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backheader',
  props: ['textconent'],
  data() {
    return {}
  },
  created() {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
.backheader{
  width: 100%
  height: 40px
  background-color: white;
  display: flex
  align-items: center
    div{
      width 100%
      height 30px
      text-align center
      line-height 30px
      font-size 16px
      font-weight bold
    }
      span:nth-of-type(1){
        display block
        position absolute
        left 10px
        height 30px
      }
}
</style>
