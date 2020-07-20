<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
    <h2>Vue</h2>
      <v-spacer></v-spacer>
    <v-btn @click="cerrarSesion"> <!-- viene de vuex por lo tanto se importa-->
        <span class="mr-2">Cerrar sesion</span>
        <v-icon>fas fa-adress-book</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
     <routerView/>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods: {
    ...mapActions(['cerrarSesion'])
  }
}
</script>
