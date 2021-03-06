import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './router'
import VueFire from 'vuefire'
import Vue2Filters from 'vue2-filters'
import { config } from "./helpers/firebaseConfig";
import NavBar from './components/NavBar.vue'


Vue.use(Vue2Filters)
Vue.use(VueRouter)
Vue.use(VueFire)
Vue.component('navbar', NavBar)

export const serverBus = new Vue();

export const globalStore = new Vue({
  data: {
    globalvar: ''
  }
})

new Vue({
  router,
  created() {
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user.email)
      if (user) {
        globalStore.globalvar = user.email;
        serverBus.$emit('serverSelected', user.email);
        this.$router.push('/distribuidores/')
        //this.$router.push({ name: 'distribuidores', params: { id: user.email }})
      } else {
        this.$router.push('/auth')
      }
    });
  },
  el: '#app',
  render: h => h(App)
})
