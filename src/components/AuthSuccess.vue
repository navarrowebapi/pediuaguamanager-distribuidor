<template>
<div>
    <h1>Autenticação com Sucesso</h1>
    <button @click="logOut">Logout</button>
    <p>{{name }}</p>
</div>
</template>

<script>
import firebase from "firebase";
export default {
    data(){
        return{
            name:''
        }
    },
    created(){
        this.user = firebase.auth().currentUser;
        this.$router.push('distribuidores') 
        if(this.user){
            this.name = this.user.displayName;
            
        }
    },
    methods:{
        logOut(){
            firebase.auth().signOut();
            this.$router.push('Auth') 
        }
    }
}
</script>