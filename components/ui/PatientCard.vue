<template>
  <v-card
        elevation="7"
        style="max-width: 85%;"
        v-if="patient"
      >
        <v-row>
          <v-col class="w-1">
            <v-img :src="require('@/assets/images/yo.jpg')" class="patient-img" rounded/>
          </v-col>
          <v-col class="mar-1" justify="center">
            <v-row align="center" class="mar-1">
              <v-card-title class="pad-lateral">{{ patient.nombre }}</v-card-title>
            </v-row>
            <v-row class="mar-1">
              <v-card-title class="pad-lateral">Edad: {{ patient.edad }}</v-card-title>
              <v-card-title class="pad-lateral">Sexo: {{ patient.sexo }}</v-card-title>
            </v-row>
            <v-row>
              <v-card-text class="pad-lateral">Telefono de contacto: {{ patient.telefono }}</v-card-text>
              <v-card-text class="pad-lateral">Correo electrónico: {{ patient.email }}</v-card-text>
              <v-card-text class="pad-lateral">Dirección: {{ patient.direccion }}</v-card-text>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
</template>

<script>
export default {
  props: {
    patient: Object
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
</style>
