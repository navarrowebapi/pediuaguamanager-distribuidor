import VueRouter from "vue-router";
import Auth from "./components/Auth.vue";
import AuthSuccess from "./components/AuthSuccess.vue";
import ViewContact from './components/ViewContact'
import NewContact from './components/NewContact'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component : Auth},

        { path: '/auth', component : Auth},

        { path: '/success', component : AuthSuccess},
        
        { path: '/add', component : NewContact},

        { path: '/distribuidores', component : ViewContact},

        // { name: 'distribuidores', path: '/distribuidores/:id', component : ViewContact},

    ]

});

export default router;
