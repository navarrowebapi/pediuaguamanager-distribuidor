<template>

<section class="hero is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="../assets/logo.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <!-- <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Novo
            </a> -->
            <a class="navbar-item ">
                  <button class="button is-danger" @click="logOut">Sair</button>
            </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container">

<form @submit.prevent="saveContact">
      <div class="field-label is-normal">
      <label class="label">Dados da Empresa</label>
    </div>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Nome" v-model="Distribuidor.Nome" required>
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="CNPJ" v-model="Distribuidor.CNPJ" required>
        </p>
      </div>
  </div>
</div>

<div class="field is-horizontal">
      <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="CEP" v-model="Distribuidor.CEP" required>
          <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fa fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
       
        <label class="label">Marcas comercializadas</label>

        <div id="marcasagua" >
          <input type="checkbox" id="aguaboa" value="aguaboa" v-model="Distribuidor.Marcas">
          <label for="jack">ÁguaBoa</label>
          <input type="checkbox" id="Bioleve" value="Bioleve" v-model="Distribuidor.Marcas">
          <label for="john">Bioleve</label>
          <input type="checkbox" id="Bonafont" value="Bonafont" v-model="Distribuidor.Marcas">
          <label for="mike">Bonafont</label>
            <input type="checkbox" id="Cristal" value="Cristal" v-model="Distribuidor.Marcas">
          <label for="jack">Cristal</label>
          <input type="checkbox" id="Vitalícia" value="Vitalícia" v-model="Distribuidor.Marcas">
          <label for="john">Vitalícia</label>
          <input type="checkbox" id="Sofiazinha" value="Sofiazinha" v-model="Distribuidor.Marcas">
          <label for="mike">Sofiazinha</label>
              <input type="checkbox" id="Prata" value="Prata" v-model="Distribuidor.Marcas">
          <label for="jack">Prata</label>
          <input type="checkbox" id="Nestlé" value="Nestlé" v-model="Distribuidor.Marcas">
          <label for="john">Nestlé</label>
          <input type="checkbox" id="SantaRita" value="SantaRita" v-model="Distribuidor.Marcas">
          <label for="mike">SantaRita</label>
          <br>
          <!-- <span>Marcas definidas: {{ Distribuidor.Marcas }}</span> -->
        </div>

      </div>
</div>


  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Rua" v-model="Distribuidor.Rua" required>
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="Número" v-model="Distribuidor.Numero" required>
        </p>
      </div>
  </div>
</div>

  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Bairro" v-model="Distribuidor.Bairro" required>
          <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="Cidade" v-model="Distribuidor.Cidade" required>
        </p>
      </div>
      <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="Estado" v-model="Distribuidor.Estado" required>
        </p>
      </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
             <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="E-mail" v-model="Distribuidor.Email" required>
        </p>
      </div>
         <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="Fixo" v-model="Distribuidor.Fixo" required>
        </p>
      </div>

  </div>
</div>




<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">

      <div class="field">
        <p class="control ">
          <input class="input" type="text" placeholder="Cel" v-model="Distribuidor.Celular" required>
        </p>
      </div>
    <div class="field">
      <div class="control">
           <button type="submit" class="button is-primary ">Salvar</button>
      </div>
    </div>
  </div>
</div>
</form>  
    </div>
  </div>

</section>

</template>

<script>
import Vue from "vue";
import Toasted from "vue-toasted";
import firebase from "firebase";
import db from "./firebaseInit";
Vue.use(Toasted);

export default {
  name: "new-contact",
  data() {
    return {
      Distribuidor: {
        Nome: null,
        CNPJ: null,
        CEP: null,
        Rua: null,
        Numero: null,
        Bairro: null,
        Cidade: null,
        Estado: null,
        Fixo: null,
        Celular: null,
        Email: null,
        Marcas: []
      }
    };
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
      this.$router.push("Auth");
    },
    saveContact() {
      db
        .collection("distribuidor")
        .add({
          Nome: this.Distribuidor.Nome,
          CNPJ: this.Distribuidor.CNPJ,
          CEP: this.Distribuidor.CEP,
          Rua: this.Distribuidor.Rua,
          Numero: this.Distribuidor.Numero,
          Bairro: this.Distribuidor.Bairro,
          Cidade: this.Distribuidor.Cidade,
          Estado: this.Distribuidor.Estado,
          Fixo: this.Distribuidor.Email,
          Celular: this.Distribuidor.Celular,
          Email: this.Distribuidor.Email,
          Marcas: this.Distribuidor.Marcas
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          let toast = Vue.toasted.show("Dados adicionados com sucesso.", {
            theme: "primary",
            position: "top-center",
            duration: 2000
          });
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          let toast = Vue.toasted.show(
            "Erro ao salvar dados. Provável falta de Internet, tente novamente. Caso o erro persista, contate o adm.",
            {
              theme: "primary",
              position: "top-center",
              duration: 2000
            }
          );
        });
    }
  }
};
</script>

<style scoped>
section {
  height: 100vh;
}

h1 {
  font-size: 30px;
  margin: 30px 0;
}

.input {
  height: 40px;
}

.hero.is-medium .hero-body {
  padding-bottom: 2rem;
  padding-top: 2rem;
}
</style>