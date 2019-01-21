<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }

</script>

<style lang="scss">
  @import "common/style/common";

  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
