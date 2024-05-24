<template>
  <v-sheet color="transparent">
    <v-row align="center" justify="center" style="margin-top: 35px;">
      <v-card
        elevation="7"
        style="max-width: 85%;"
      >
        <v-row>
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
  </v-sheet>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .pad-lateral {
    padding-top: 3px; /* Espaciado superior */
    padding-bottom: 3px; /* Espaciado inferior */
  }
</style>
