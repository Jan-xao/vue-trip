<template>
  <div class="trip">
    <back-header textconent="我的行程"></back-header>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import backheader from './backheader'
import bottom from './bottom'

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
    'v-bottom': bottom
  }
}
</script>

<style scoped>
.trip{
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 250, 250);
}
</style>
