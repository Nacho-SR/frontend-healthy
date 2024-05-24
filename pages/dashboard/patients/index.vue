<template>
  <v-sheet color="transparent">
    <v-row class="ma-1">
      <v-col cols="10" />
      <v-col
        cols="2"
        class="ma-0 pa-0"
      >
        <v-btn
          rounded
          outlined
          color="#82E7EA"
          @click="showDialog=true"
          justify="center"
          align="center"
          class="ma-1"
        >
          Nuevo paciente
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-top: 35px;">
      <v-card
        elevation="7"
        style="max-width: 85%;"
      >
        <v-row>
          <v-col class="w-1">
            <v-img :src="require('@/assets/images/yo.jpg')" class="patient-img" rounded/>
          </v-col>
          <v-col class="mar-1" justify="center">
            <v-row align="center" class="mar-1">
              <v-card-title class="pad-lateral">Nombre del paciente</v-card-title>
            </v-row>
            <v-row class="mar-1">
              <v-card-title class="pad-lateral">Edad: X</v-card-title>
              <v-card-title class="pad-lateral">Sexo: X</v-card-title>
            </v-row>
            <v-row>
              <v-card-text class="pad-lateral">Telefono de contacto: xxx-xxx-xxxx</v-card-text>
              <v-card-text class="pad-lateral">Correo electrónico: example@some.com</v-card-text>
              <v-card-text class="pad-lateral">Dirección: Av. de la calle #11 Colonia, Irp, Gto.</v-card-text>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row style="margin-top: 45px;">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#f46a00"
        rounded
        fixed-tabs
        height="50px"
        style="margin-left: 80px; margin-right: 80px;"
      >
        <v-tab
          v-for="item in items"
          :key="item"
          class="tabs"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="theme--light.v-tabs-items">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat color="transparent">
            <v-card-text>
              <RecetasPatient></RecetasPatient>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
    <v-dialog
      v-model="showDialog"
      persistent
      width="500"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>Agregar Paciente</v-card-title>
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
        </v-card-text>
        <v-card-actions>
          <v-col cols="6">
            <v-btn block color="green">
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
  </v-sheet>
</template>

<script>
import RecetasPatient from '~/components/ui/recetasPatient.vue';

export default {
  layout: 'dashboard',
  auth: true,
  data () {
    return {
      emailNuevo: null,
      passwordNuevo: null,
      nombre: null,
      apaterno: null,
      amaterno: null,
      direccion: null,
      telefono: null,
      showDialog: false,
      tab: null,
      items: [
        'Recetas', 'Revisiones', 'Documentos', 'Pagos'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style scoped>
.patient-img {
  margin: 0;
  padding: 0;
  object-fit: cover;
  border-radius: 5px;
}

.pad-lateral {
  padding-top: 3px; /* Espaciado superior */
  padding-bottom: 3px; /* Espaciado inferior */
}

.mar-1{
  margin-top: 0;
  margin-bottom: 0;
}

.w-1 {
  max-width: 18%;
  min-width: 50px;
}

.tabs {
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 5px;
  margin-bottom: 5px
}

.v-tab {
  border-radius: 25px; /* Bordes redondeados */
  transition: box-shadow 0.3s; /* Transición suave para lxa sombra */
}

.v-tab:hover {
  box-shadow: 0 2px 4px rgba(244, 106, 0); /* Sombra personalizada */
}

.theme--light.v-tabs-items {
  background-color: rgb(255 255 255 / 0%);
}
</style>
