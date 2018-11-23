 <template>
  <nav>
      <div class="nav-wrapper green">
        <div class="container">
          <router-link to="/" class="brand-logo">Gerenciador do Distribuidor</router-link>    
         <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
          <p class="control">
            <b>Bem Vindo(a)  {{usuario}}</b>
          </p>
        </div>
      </div>
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-link"      v-on:click=logOut() >Sair</button>
          </p>
        </div>
      </div>
    </div>
      </div>
      </div>
    </nav>
  </template>

  
<script>
import firebase from "firebase";
import { serverBus } from '../main';
import { globalStore } from "../main";
export default {
  data() {
    return {
      name: "",
      usuario: globalStore.globalvar,
      server:null
    };
  },
  created() {
    serverBus.$on("serverSelected", server => {
      this.server = server;
      console.log(this.server);
      this.usuario = this.server;
    });
    // console.log("MOUNTED " + globalStore.globalvar);
    // this.usuario = globalStore.globalvar;
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push("Auth");
    }
  }
};
</script>