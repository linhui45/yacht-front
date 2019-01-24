<template>
  <div>
    <!--页头部分-->
    <y-header></y-header>
    <!--中心部分-->
    <router-view class="main"></router-view>
    <!--页尾部分-->
    <!--<y-footer></y-footer>-->
  </div>
</template>

<script>
  import YFooter from "../components/Footer"
  import YHeader from "../components/Header"

  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      YFooter,
      YHeader
    }
  }
</script>

<style scoped lang="scss">

</style>
