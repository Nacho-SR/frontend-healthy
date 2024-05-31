<template>
  <v-sheet color="transparent">
    <v-row align="center" justify="center" style="margin-top: 35px;">
      <v-card
        elevation="7"
        style="max-width: 85%;"
        v-if="receta"
      >
        <v-row>
          <v-col class="mar-1" justify="center">
            <v-row align="center" class="mar-1">
              <v-card-title class="pad-lateral">Dr. {{ receta.doctor }}</v-card-title>
            </v-row>
            <v-row class="mar-1">
              <v-card-title class="pad-lateral">Medicamento: {{ receta.medicamento }}</v-card-title>
              <v-card-title class="pad-lateral">{{ receta.dosis }} cada {{ receta.cada }} durante {{ receta.periodo }}</v-card-title>
            </v-row>
            <v-row>
              <v-card-text class="pad-lateral">Indicaciones extra: {{ receta.indicaciones }}</v-card-text>
              <v-card-text class="pad-lateral">{{ receta.fecha-hora }}</v-card-text>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    receta: Object
  }
}
</script>

<style scoped>
  .pad-lateral {
    padding-top: 3px; /* Espaciado superior */
    padding-bottom: 3px; /* Espaciado inferior */
  }
</style>
