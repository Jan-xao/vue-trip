<template>
  <div>
    <v-header></v-header>
    <v-banner></v-banner>
    <nav-header></nav-header>
    <special-offer></special-offer>
    <special-value></special-value>
  </div>
</template>

<script>
import vheader from './header'
import vbanner from './vbanner'
import navheader from './navheader'
import specialoffer from './specialoffer'
import specilavalue from './specialvalue'

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
    'v-header': vheader,
    'v-banner': vbanner,
    'nav-header': navheader,
    'special-offer': specialoffer,
    'special-value': specilavalue,
  }
}
</script>

<style lang="stylus" scoped>

</style>
