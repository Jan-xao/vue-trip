<template>
  <div class="navlist">
    <div class="navlist-item" 
      v-for="item in navlist" 
      :key="item.id"
      @click="goto(item.gopath)">
      <div>
        <span>
          <span class="iconfont" v-html="item.icon"></span>
          {{item.name}}
        </span>
      </div>
      <div>
        <span>
          <span class="iconfont">&#xe6a7;</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:['navlist'],
  data() {
    return {}
  },
  created() {},
  computed: {},
  watch: {},
  methods: {
    goto(gopath){
      if(gopath === undefined){
        return
      }
      this.$router.push(gopath)
    }
  }
}
</script>

<style lang="stylus" scoped>
.navlist{
  border: rgb(226, 226, 226) 1px solid;
}
.navlist-item{
  width: 100%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-top: rgb(226, 226, 226) 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navlist-item:nth-of-type(1){
  border-top: none;
}
.navlist-item span{
  font-family:Helvetica;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 10px;
}
</style>
