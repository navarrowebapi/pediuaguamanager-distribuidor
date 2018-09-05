 <template>
  <nav>
      <div class="nav-wrapper green">
        <div class="container">
          <router-link to="/" class="brand-logo">Gerenciador do Distribuidor</router-link>    
         <div class="navbar-end">
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
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
   
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push("Auth");
    }
  }
};
</script>