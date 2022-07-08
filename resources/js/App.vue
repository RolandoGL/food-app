<template>
  <div class="container">
    <nav-bar></nav-bar>
  <home></home>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
export default {
components:{
  NavBar,
  Home
}
}
</script>

<style scoped>
.container {
    margin-top: 20px;
    }
@media (min-width: 992px) {
  .container {
        margin-top: 0;
        display: flex;
    }
}
</style>