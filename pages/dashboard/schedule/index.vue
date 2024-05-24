<template>
  <v-sheet color="transparent" style="margin-bottom: 20px;">
    <v-row class="ma-0 pa-0">
      <v-col cols="10" />
      <v-col
        cols="2"
        align="center"
        justify="center"
        class="ma-0 pa-0"
      >
        <v-btn @click="showDialog=true" rounded outlined color="#82E7EA">Nueva cita</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#f46a00"
        rounded
        outlined
        height="50px"
      >
        <v-tab
          v-for="item in items"
          :key="item"
          class="custom-tab-button ma-2"
          active-class="custom-active-tab"
          rounded
          style="margin-top: 40px;"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="theme--light.v-tabs-items">
        <v-tab-item
          v-for="item in items"
          :key="item"
          align="center"
        >
          <v-card flat color="transparent" elevation="7" style="max-width: 85%; margin-bottom: 35px;">
            <v-row align="center" justify="center" style="margin-top: 15px;">
              <v-col class="w-1 pa-0">
                <v-img :src="require('@/assets/images/yo.jpg')" class="patient-img" rounded/>
              </v-col>
              <v-col class="mar-1 pa-0" justify="center" align="left">
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
        <v-card-title>Nueva Cita</v-card-title>
        <v-card-text>
          <v-row width="100%">
            <v-text-field
              v-model="paciente"
              calss="pa-2 ma-2"
              label="Paciente"
              placeholder="Nombre del paciente"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="dia"
              calss="pa-2 ma-2"
              label="Dia"
              placeholder="Selecciona el dia de la cita"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="mes"
              calss="pa-2 ma-2"
              label="Mes"
              placeholder="Selecciona el mes de la cita"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="anio"
              calss="pa-2 ma-2"
              label="Año"
              placeholder="Selecciona el año de la cita"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="hora"
              calss="pa-2 ma-2"
              label="Hora"
              placeholder="Hora de la cita"
              outlined
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-col cols="6">
            <v-btn block color="green">
              <span style="text-transform: none; color: white">
                Agendar
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
export default {
  layout: 'dashboard',
  auth: true,
  data () {
    return {
      showDialog: false,
      tab: null,
      items: [
        'Ayer', 'Hoy', 'Mañana'
      ]
    }
  }
}
</script>

<style>
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

  .v-tab {
    /*border: 1px solid #f77d2c;*/
    border: 1px solid #f46a00;
    border-radius: 20px; /* Bordes redondeados */
    transition: box-shadow 0.3s; /* Transición suave para lxa sombra */
  }

  /* Cambio de sombra al pasar el cursor */
  .v-tab:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra personalizada */
  }

  .theme--light.v-tabs-items {
    background-color: rgb(255 255 255 / 0%);
  }
</style>
