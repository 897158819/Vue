<template>
  <div class="home">
    <div class="header">
      <header-nav/>
    </div>
    <div clas="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from './Header.vue'
export default {
  components:{
    "header-nav":HeaderNav
  }
}
</script>

<style scoped>

</style>
