<template>
  <div class="commoninfo">
    <back-header textconent="我的行程"></back-header>
  </div>
</template>

<script>
import backheader from './backheader'

export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  computed: {},
  watch: {},
  methods: {},
  components: {
    'back-header': backheader,
  }
}
</script>

<style scoped>
.commoninfo{
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 250, 250);
}
</style>
