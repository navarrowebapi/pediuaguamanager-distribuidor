import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import router from './router'
import VueFire from 'vuefire'
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)
Vue.use(VueRouter)
Vue.use(VueFire)
new Vue({
  router,
  created() {
    // firebase.initializeApp(config);

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.$router.push('/success')
    //   } else {
    //     this.$router.push('/auth')
    //   }
    // });
  },
  el: '#app',
  render: h => h(App)
})
