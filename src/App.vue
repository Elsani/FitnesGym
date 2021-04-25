<template>
  <div id="app">
    <appNavbar></appNavbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components:{
    appNavbar:Navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body {  
  width: 100%;
  height: 100vh;
  background-image: url('./assets/images/112.jpg');
  background-size: cover;
  position: relative;
  overflow: hidden;
}
</style>
