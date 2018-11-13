<template>
  <section class="container">

  <h1>Distribuidor ÁguaJá</h1>
  <!-- <button class="button is-primary"    v-on:click="userFilterKey = 'geral'" :class="{ active: userFilterKey == 'geral' }">Geral</button> -->
  <button type="button" class="button is-warning"  @click="geral()">Todos</button>
  <button type="button" class="button is-success"  @click="atendidos()">Atendidos</button>

<div class='columns is-multiline'>
  <div v-for="ped in orderBy(ordenarDataMarca, 'timeStamp', -1 )" :key="ped['.key']" class='column is-3'>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ped.nome}} ({{ped.celular}})
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <div v-if="ped.qtde10 > 0" class="columns">
            <div class="column">
              <figure class="image is-64x64">
              <img src="/src/assets/20litros.png">
            </figure>
            </div>
            <div class="column">
              <p><br> 10 litros Qtde: <b>{{ped.qtde10}}</b></p>
            </div>
          </div>

          <div v-if="ped.qtde20 > 0" class="columns">
            <div class="column">
              <figure class="image is-64x64">
              <img src="/src/assets/10litros.png">
            </figure>
            </div>
            <div class="column">
              <p><br> 20 litros Qtde: <b>{{ped.qtde20}}</b></p>
            </div>
          </div>
          
          <div class="level-item has-text-centered">
              <figure class='image is-64x64'><img :src = ped.marcaEscolhida /></figure>
          </div>
          chegada: <time datetime="2016-1-1">{{moment(ped.timeStamp).format("DD/MM/YYYY HH:mm:ss")}}</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="atender(ped['.key'])">Atender</a>  
        <a href="#" class="card-footer-item"></a>
        <a href="#" class="card-footer-item">Espera</a>
      </footer>
    </div>
  </div>
</div>  

<!-- <table class="table table-striped">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Qtde 10 litros</th>
              <th>Qtde 20 litros</th>
              <th>Data e hora</th>
              <th>Atender</th>
              <th>Tempo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ped in userFilter" :key="ped['.key']">
              <td>{{ped.idCliente}}</td>
              <td>{{ped.qtde10}}</td>
              <td>{{ped.qtde20}}</td>
              <td>{{moment(ped.timeStamp).format("DD-MM-YYYY HH:mm:ss")}}</td>
              <td><button type="button" class="button is-warning"  @click="atender(ped['.key'])">Atender</button></td>
              <td>{{ moment(ped.timeStamp).fromNow()}}</td>
            </tr>
          </tbody>
        </table> -->
  </section>

</template>

<script>
import * as moment from "moment";
import "moment/locale/pt-br";
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyALMI7pi-U_ZNxERQzwmuYi-oU7tELAl4c",
  authDomain: "pediuaguamobileapp.firebaseapp.com",
  databaseURL: "https://pediuaguamobileapp.firebaseio.com",
  projectId: "pediuaguamobileapp",
  storageBucket: "",
  messagingSenderId: "836786935618"
};

firebase.initializeApp(config);
var pedidosDb = firebase.database().ref("pedidos");

export default {
  name: "home",
  firebase: {
    pedidos: pedidosDb
  },
  data() {
    return {
      pedidosPorDataMarca: "",
      pedidos: "",
      userFilterKey: "todos",
      teste: false,
      moment: moment
    };
  },
  created() {},
  methods: {
    atender: function(key) {
      pedidosDb.child(key).update({
        atendido: true
      });
    },
    geral: function() {
      this.teste = false;
    },
    atendidos: function() {
      this.teste = true;
    }
  },
  computed: {
    userFilter() {
      return this.pedidos;
      // return this[this.userFilterKey];
    },
    ordenarDataMarca() {
      this.pedidos.forEach(element => {
        if (element.marcaEscolhida == 1) {
          element.marcaEscolhida = "./src/assets/ibira.png";
        } else if (element.marcaEscolhida == 2) {
          element.marcaEscolhida = "./src/assets/bonafont.png";
        } else if (element.marcaEscolhida == 3) {
          element.marcaEscolhida = "./src/assets/aguaboa.png";
        } else if (element.marcaEscolhida == 4) {
          element.marcaEscolhida = "./src/assets/indaia.png";
        } else if (element.marcaEscolhida == 5) {
          element.marcaEscolhida = "./src/assets/prata.png";
        }
      });

      return this.pedidos.filter(
        ped => ped.atendido == this.teste && ped.idDistribuidor == 1001
      );
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
  margin: 30px 0;
}
.user-list {
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
  .column {
    height: 120px;
  }
  .inner {
    .left {
      width: 50%;
      float: left;
      text-align: left;
    }
    .right {
      width: 50%;
      float: left;
      text-align: left;
      p {
        width: 100%;
        text-align: left;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: #4b75ff;
    }
  }
  .user-list__header {
    font-size: 20px;
    font-weight: 700;
  }
  .user-list__sub {
    font-size: 15px;
    margin-top: 10px;
  }
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
.animated-background__header {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: #eeeeee;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, #eeeeee),
    color-stop(18%, #dddddd),
    color-stop(33%, #eeeeee)
  );
  background: -webkit-linear-gradient(
    left,
    #eeeeee 8%,
    #dddddd 18%,
    #eeeeee 33%
  );
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  -webkit-background-size: 800px 104px;
  background-size: 800px 104px;
  height: 20px;
  width: 400px;
  position: relative;
}
.animated-background__sub {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: #eeeeee;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, #eeeeee),
    color-stop(18%, #dddddd),
    color-stop(33%, #eeeeee)
  );
  background: -webkit-linear-gradient(
    left,
    #eeeeee 8%,
    #dddddd 18%,
    #eeeeee 33%
  );
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  -webkit-background-size: 800px 104px;
  background-size: 800px 104px;
  height: 20px;
  width: 200px;
  position: relative;
}
</style>