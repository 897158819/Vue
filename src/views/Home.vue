<template>
  <div class="home">
    <div class="header">
      <header-nav/>
    </div>
    <div clas="main">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderNav from './Header.vue'
import FooterComponent from './footer.vue'
export default {
  components:{
    "header-nav":HeaderNav,
    "footer-component":FooterComponent
  }
}
</script>

<style scoped>

</style>
