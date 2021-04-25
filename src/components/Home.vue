<template>
<div class="app">
  <div class="side-bar">
      <a href="https://www.facebook.com/FitnessSWE">
      <img src="../assets/images/menu.png" class="menu">
      </a>
    <div class="social-links">
      <a href="https://www.facebook.com/FitnessSWE">
      <img src="../assets/images/fb.png">
      <img src="../assets/images/ig.png">
      <img src="../assets/images/tw.png">
      </a>
    </div>
    <div class="useful-links">
      <img src="../assets/images/share.png">
      <img src="../assets/images/info.png">
    </div>
    </div>
      <div class="content">
        <h1>SCHWEISS SCHWEISST ZUSAMMEN.</h1>
        <router-link to="register"><a class="button">Register Now </a></router-link>
          </div>
            <div class="bubbles">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
            <img src="../assets/images/bubbleee.png">
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style scoped>
.hero{
  background-image:'/src/assets/images/bubble.png';
}
.side-bar {
 width: 50px;
 height: 100vh;
 background: linear-gradient(#8c8d8d, #070707);
 position: absolute;
 right: 0;
 top: 20;
}
.social-links img, .useful-links img{
  width: 25px;
  margin: 5px auto;
  cursor: pointer;
}
.social-links{
  width: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.useful-links{
  width: 50px;
  text-align: center;
  position: absolute;
  bottom: 60px;
}
/* Qitu per Bubble Madhesia */
.bubbles img{
  width: 80px;
  animation: bubble 7s linear infinite;
}
/* qitu eshte contenti  */
.content{
  color: #fbfcfd;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
  z-index: 2;

}
/* Qitu eshte buttoni pak ma SHADOW me u dok*/
.button {
  display: inline-block;
  text-decoration: none;
  padding: 10px 30px;
  color: #fff;
  /* border: 1px solid #fff; */
  margin-top: 30px;
  margin-left: 45%;
  transition: 0.5s ease;
   animation: animate 2s 1;
   box-shadow: 0 0 5px #fff,
                0 0 25px #fff,
                0 0 50px #fff,
                0 0 100px #fff;
}
.button:hover {
  background-color: #fff;
  color: #000;
}
/* Qitu eshte animacioin i Textit h1  */
h1{
  animation: animate 2s 1;
  font-size: 80px;
  margin: 10px 0 30px;
  line-height: 80px;
}
/* Qitu eshte animacioin i Textit h1  */
@keyframes animate {
  0%{
    transform: scale(0);
  }
  100%{
    tramsform: scale(1);
  }
}
/* Qitu eshte forma e Bubbles  */
.bubbles {
    /* width: 100px; */
    display: flex;
    align-items: center;
    justify-content: space-around;

}
@keyframes bubble {
  0% {
    transform: translateY(-15vh);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateY(80vh);
    opacity: 0;
  }
}
/* Qitu eshte secila levizje e bubbles ne sekonda nga lart ne posht  */
.bubbles img:nth-child(1) {
    width: 20px;
    animation-delay: 5.35s;
    
}
.bubbles img:nth-child(2) {
    animation-delay: 1.3s;
}
.bubbles img:nth-child(3) {
  width: 40px;
  animation-delay: 3.60s;
}
.bubbles img:nth-child(4) {
  width: 60px;
    animation-delay: 5.20s;
}
.bubbles img:nth-child(5) {
  width: 120px;
    animation-delay: 3.0s;
}
.bubbles img:nth-child(6) {
  width: 100px;
    animation-delay: 1.9s;
}
.bubbles img:nth-child(7) {
    animation-delay: 4.26s;
}
.bubbles img:nth-child(8) {
    animation-delay: 0.021s;
}
</style>