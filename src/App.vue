<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  components: {
  }
}
</script>

<style lang="scss"> 
</style>
