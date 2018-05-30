<template>
  <section class="container">

        <h1>Distribuidor ÁguaJá</h1>
  <!-- <button class="button is-primary"    v-on:click="userFilterKey = 'geral'" :class="{ active: userFilterKey == 'geral' }">Geral</button> -->
  <button class="button is-primary"   v-on:click="userFilterKey = 'all'"      :class="{ active: userFilterKey == 'all' }">Todos</button> 
  <button class="button is-danger"      v-on:click="userFilterKey = 'atendido'"   :class="{ active: userFilterKey == 'atendido' }">Atendidos</button>

<table class="table table-striped">
          <thead>
            <tr>
              <!-- <th>ID interno</th>
              <th>Distribuidor</th> -->
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
              <!-- <td>{{ped['.key']}}</td>
              <td>{{ped.idDistribuidor}}</td> -->
              <td>{{ped.idCliente}}</td>
              <td>{{ped.qtde10}}</td>
              <td>{{ped.qtde20}}</td>
              <td>{{moment(ped.timeStamp).format("DD-MM-YYYY HH:mm:ss")}}</td>
              <td><button type="button" class="button is-warning"  @click="atender(ped['.key'])">Atender</button></td>
              <td>{{ moment(ped.timeStamp).fromNow()}}</td>
            </tr>
          </tbody>
        </table>


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
      pedidos: "",
      userFilterKey: "all",
      moment: moment
    };
  },
  created() {},

  methods: {
    atender: function(key) {
      pedidosDb.child(key).update({
        atendido: true
      });
    }
  },
  computed: {
    userFilter() {
      return this[this.userFilterKey];
    },
    geral() {
      //console.log(firebase.auth().currentUser.uid);

      return this.pedidos.filter(ped => ped.atendido == false);
    },
    all() {
      return this.pedidos.filter(
        ped => ped.atendido == false && ped.idDistribuidor == 1001
      );
    },
    atendido() {
      return this.pedidos.filter(ped => ped.atendido == true);
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