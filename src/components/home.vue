<template>
  <div class="home">
    <router-view></router-view>
    <v-bottom></v-bottom>
  </div>
</template>

<script>
import bottom from './bottom'

export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
  components: {
    'v-bottom': bottom
  }
}
</script>

<style scoped>

</style>
