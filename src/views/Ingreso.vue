<template>
        <v-layout justify-center mt-10  >
            <v-flex xs12 sm8 md6 xl4>
                <v-card>

                    <v-card-text class="display-1 text-uppercase white--text
                     text-center" :class="registro ? 'cyan darken-3' : 'secondary' ">
                     <span v-if="!registro">Ingreso</span>
                     <span v-if="registro">Registro</span>
                    </v-card-text>

                    <v-card-text>
                        <v-btn block color="error" @click="google">
                             <v-icon left dark>fab fa-google</v-icon>
                            Google
                        </v-btn>

                        <v-btn block color="info" class="mt-2" @click="facebook">
                             <v-icon left dark>fab fa-facebook-f</v-icon>
                            Facebook
                        </v-btn>
                    </v-card-text>

                    <v-card-text>
                        <v-btn block @click="registro =true" v-if="!registro">¿No tienes cuenta? Registrate aqui! </v-btn>
                        <v-btn block @click="registro =false" v-if="registro">¿Ya tienes cuenta? Ingresa aqui! </v-btn>
                    </v-card-text>

                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
import {firebase, auth, db} from '@/firebase'
import mapMutations from 'vuex'
export default {
    data() {
        return {
            registro: false
        }
    },
    methods: {
        ...mapMutations(['nuevoUsuario',]),
        facebook(){
            console.log('facebook')
            const provider = new firebase.auth.FacebookAuthProvider();
             this.ingresar(provider);
        },
         google(){
            console.log('google');
            const provider = new firebase.auth.GoogleAuthProvider();
            
            this.ingresar(provider);
        },
        async ingresar(provider){
            firebase.auth().languageCode = 'es';

            try {
                const result = await firebase.auth().signInWithPopup(provider); 
                const user = result.user;
                console.log(user);
                //construir usuario
                const usuario = {
                    nombre: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    foto: user.photoURL
                }
                this.nuevoUsuario(usuario) // este usuario se actualizara cada vez que nos loguiemos
                // guardar en firestore
                await db.collection('usuarios').doc(usuario.uid).set( // set toma un objeto que seria el usuario
                    usuario
                )
                console.log('Usuario guardado en DB');

            } catch (error) {
                console.log(error);
            }
           
        }
    },
}
</script>