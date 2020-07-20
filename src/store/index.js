import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {}
  },
  mutations: {
    nuevoUsuario(state, payload){ //con la mutacion se actualiza el state usuario
      state.usuario = payload
    }
  },
  actions: {
    setUsuario({commit}, user){ //user viene del main que se manda como parametro
      const usuario = {
        nombre: user.displayName,
        email: user.email,
        uid: user.uid,
        foto: user.photoURL
    }
      commit('nuevoUsuario', usuario)
    },
    cerrarSesion({commit}){
      auth.signOut()
      commit('nuevoUsuario', null)
      router.push({name: 'ingreso'}) //cada vez que cierre sesion se manda al ingreso
    }
 
  }
  
})
