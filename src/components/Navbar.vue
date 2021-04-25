<template>
<div class="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a href="./Home.vue">
    <img class="logo" src="../assets/images/310218.svg">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon topnav-right"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="./Home.vue">Fitnes Gym</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active navbar-right">
        </li>
        <template v-if="user.loggedIn">
              <div class="nav-item">
              </div>
              <li class="nav-item">
                <a class="nav-link" @click.prevent="signOut">Sign out</a>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <router-link to="login" class="nav-link">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="register" class="nav-link">Register</router-link>
              </li>
            </template>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
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
.logo{
  width: 45px;
  margin: 10px;
}
</style>