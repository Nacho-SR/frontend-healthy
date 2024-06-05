<template>
  <v-card rounded color="#FFAD76" class="pa-5 ma-15">
    <v-card-title class="pa-2 ma-5">
      <v-row class="rowCard fontTitle">
        Welcome
      </v-row>
      <v-row class="rowCard fontTitle">
        Back
      </v-row>
    </v-card-title>
    <v-card-text justify="center" align="center" style="padding: 0%;">
      <v-row class="ma-2 pa-2" style="width: 85%;">
        <v-text-field
          v-model="email"
          rounded
          label="E-Mail"
          outlined
          hide-details
        />
      </v-row>
      <v-row class="ma-2 pa-2" style="width: 85%;">
        <v-text-field
          v-model="password"
          rounded
          label="Password"
          outlined
          hide-details
          type="password"
        />
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-col cols="12">
        <v-row class="rowCard ma-1">
          <v-btn
            block
            color="#134700"
            min-width="20%!important"
            max-width="40%"
            @click="login"
          >
            <span style="text-transform: none; color: white;">Log-In</span>
          </v-btn>
        </v-row>
        <v-row class="ma-1 pa-1" justify="center" align="center">
          <div>
            If you didn't have account
            <a @click="showDialog=true">Sign-Up</a>
          </div>
        </v-row>
      </v-col>
    </v-card-actions>
    <v-dialog
      v-model="showDialog"
      persistent
      width="500"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>Agregar Usuario</v-card-title>
        <v-card-text>
          <v-row width="100%">
            <v-text-field
              v-model="nombre"
              calss="pa-2 ma-2"
              label="Nombre"
              placeholder="Nombre"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="apaterno"
              calss="pa-2 ma-2"
              label="Apellido paterno"
              placeholder="Apellido paterno"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="amaterno"
              calss="pa-2 ma-2"
              label="Apellido materno"
              placeholder="Apelido materno"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="direccion"
              calss="pa-2 ma-2"
              label="Direccion"
              placeholder="Direccion"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="telefono"
              calss="pa-2 ma-2"
              label="Telefono"
              placeholder="Telefono"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="emailNuevo"
              calss="pa-2 ma-2"
              label="Correo"
              placeholder="Escribe tu Correo"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="passwordNuevo"
              class="pa-2 ma-2"
              label="Password"
              placeholder="Escribe tu Password"
              outlined
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-col cols="6">
            <v-btn block color="green" @click="registrarUsuario">
              <span style="text-transform: none; color: white">
                Registrar
              </span>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block color="red" @click="showDialog = false">
              <span style="text-transform: none; color: white">
                Cancelar
              </span>
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      emailNuevo: null,
      passwordNuevo: null,
      nombre: null,
      apaterno: null,
      amaterno: null,
      direccion: null,
      telefono: null,
      email: null,
      password: null,
      showDialog: false
    }
  },
  methods: {
    async login () {
      await console.log('@@@ datos =>', this.email, this.password)
      const sendData = {
        email: this.email,
        password: this.password
      }
      await this.$auth.loginWith('local', {
        data: sendData
      }).then(async (res) => {
        const result = await res.data
        if (result.message === 'success') {
          this.$store.commit('setToken', result.token)
          this.$store.commit('setUser', result.actualUser)
          this.$router.push('/dashboard')
        }
      }).catch((err) => {
        console.log('@@@ error =>', err)
      })
    },
    registrarUsuario () {
      const url = '/register'
      const data = {
        nombre: this.nombre,
        apaterno: this.apaterno,
        amaterno: this.amaterno,
        direccion: this.direccion,
        telefono: this.telefono,
        email: this.emailNuevo,
        password: this.passwordNuevo
      }
      this.$axios.post(url, data)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'User registered successfully') {
            this.showDialog = false
          }
        })
        .catch((error) => {
          console.log('@@ error => ', error)
        })
    }
  }
}
</script>

<style scoped>
.rowCard {
  width: 100%;
  display: flex;
  justify-content: center;
}
.fontTitle {
  font-size: 52px!important;
  line-height: 78px!important;
}
</style>
