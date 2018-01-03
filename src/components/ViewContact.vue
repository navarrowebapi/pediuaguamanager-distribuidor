<template>
  <section class="container">
    <div class="columns">
      <div class="column is-8">
        <h1>Distribuidores</h1>

        <div class="loader-section" v-if="loading">
          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">View Person</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/user">Ver Distribuidor</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="user-list" v-for="d in dists">
          <div class="columns">
            <div class="column is-8">
              <p class="user-list__header">{{d.Nome}} {{d.CNPJ}}</p>
              <div class="inner">
                <div class="left">
                  <p class="user-list__sub"><strong>Email</strong>: {{d.Email}}</p>
                </div>
                <div class="right">
                  <p class="user-list__sub"><strong>Fixo</strong>: {{d.Fixo}}</p>
                </div>
              </div>
            </div>
            <!-- <div class="column is-4 right">
              <router-link class="button is-primary" v-bind:to="{ name: 'view-contact', params: { d: d.id }}">View Person</router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import db from "./firebaseInit";
// var ref = db.collection("distribuidor");

// var observer = ref.onSnapshot(
//   docSnapshot => {
//     console.log(`Received doc snapshot: ${docSnapshot}`);
//     dists = docSnapshot;
//   },
//   err => {
//     console.log(`Encountered error: ${err}`);
//   }
// );

export default {
  name: "home",

  data() {
    return {
      dists: [],
      loading: true
    };
  },
  updated() {
    //window.location.reload();
  },
  created() {
    // db.collection("distribuidor").doc("VRRsIl2VhBeQZ6fJ4Smv")
    // .onSnapshot(function(doc) {
    //     console.log("Current data: ", doc.data().CNPJ );
    // });  
    db.collection("distribuidor").onSnapshot(querySnapshot => {
      this.loading = false;
       this.dists = [];
      //this.dists = doc.data();
      querySnapshot.forEach(doc => {
        // let data = {
        //   id: doc.id,
        //   Nome: doc.data().Nome,
        //   CNPJ: doc.data().CNPJ,
        //   Email: doc.data().Email,
        //   Fixo: doc.data().Fixo,
        //   Celular: doc.data().Celular
        // };
        this.dists.push(doc.data())
        //this.dists.push(doc.data());
        //window.location.reload();
      });
    });
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