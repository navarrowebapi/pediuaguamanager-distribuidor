<template>
<div>
    <div id="firebaseui-auth-container"></div>
</div>
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
import { config } from "../helpers/firebaseConfig";

export default {
  name: "auth",
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/distribuidores",
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
    };

    if(firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
    
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#firebaseui-auth-container', uiConfig);

  }
};
</script>


