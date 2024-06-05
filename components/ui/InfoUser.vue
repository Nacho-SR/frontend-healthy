<template>
  <v-card class="user-info-card" outlined>
    <v-card-text>
      <p><strong>Nombre:</strong> {{ user.nombre }} {{ user.apaterno }} {{ user.amaterno }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Teléfono:</strong> {{ user.telefono }}</p>
      <p><strong>Dirección:</strong> {{ user.direccion }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.user-info-card {
  width: 480px;
  height: 285px;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  padding: 10px 16px;
  font-size: 1.0em;
}

.content p {
  margin: 4px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
