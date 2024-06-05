<template>
  <v-col cols="12" sm="6" md="4">
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="medicina.image"
        height="200px"
      ></v-img>
      <v-card-title>{{ medicina.nombre }}</v-card-title>
      <v-card-subtitle>{{ medicina.descripcion }}</v-card-subtitle>
      <v-card-title>En inventario: {{ medicina.quantity }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    medicina: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
  text-align: center;
}
.v-card-subtitle {
  text-align: center;
}
span {
  width: 30px;
  text-align: center;
}
</style>
