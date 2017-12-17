<template>

<section class="hero is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="../assets/excelente_logo.png" alt="Logo">
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
      <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Dados</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Nome" v-model="Notificacao.firstname" required>
        <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="CPF" v-model="Notificacao.CPF" required>
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="celular" v-model="Notificacao.phonenumber">
        </p>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">ID-Excelente</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Registro interno" v-model="Notificacao.registro">
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Horário</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
    <h3>Defina o horário de almoço</h3>
     <div class="field is-horizontal">
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Início almoço" v-model="Notificacao.inicioAlmoco">
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Fim almoço" v-model="Notificacao.fimAlmoco">
      </p>
    </div>
  </div>
</div>
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
           <button type="submit" class="button is-primary">Salvar</button>
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
      Notificacao: {
        firstname: null,
        CPF: null,
        registro: null,
        phonenumber: null,
        seen: false,
        inicioAlmoco: "12:00:00",
        fimAlmoco: "13:00:00"
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
        .collection("notificacoes")
        .add({
          firstname: this.Notificacao.firstname,
          CPF: this.Notificacao.CPF,
          registro: this.Notificacao.registro,
          phonenumber: this.Notificacao.phonenumber,
          inicioAlmoco: this.Notificacao.inicioAlmoco,
          fimAlmoco: this.Notificacao.fimAlmoco
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          let toast = Vue.toasted.show("Dados adicionados com sucesso.", {
            theme: "primary",
            position: "top-center",
            duration: 2000
          });
          // this.Notificacao.firstname = "";
          // this.Notificacao.CPF = "";
          // this.Notificacao.registro = "";
          // this.Notificacao.phonenumber = "";
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