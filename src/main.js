// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyB5Rm3187ezAUsGZvcK2hVN_X9gVM99BlY",
  authDomain: "vuejs-http-c77c5.firebaseapp.com",
  databaseURL: "https://vuejs-http-c77c5.firebaseio.com",
  projectId: "vuejs-http-c77c5",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
