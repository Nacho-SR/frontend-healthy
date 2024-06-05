<template>
  <v-card v-if="proximaCita" class="cita-card" outlined>
    <v-card-text>
      <p><strong>Nombre:</strong> {{ proximaCita.pacienteNombre }}</p>
      <p><strong>Hora:</strong> {{ formatHour(proximaCita.fecha) }}</p>
      <p><strong>Edad:</strong> {{ proximaCita.pacienteEdad }}</p>
      <p><strong>Sexo:</strong> {{ proximaCita.pacienteSexo }}</p>
      <p><strong>Teléfono:</strong> {{ proximaCita.pacienteTelefono }}</p>
      <p><strong>Correo:</strong> {{ proximaCita.pacienteEmail }}</p>
    </v-card-text>
  </v-card>
  <v-card v-else class="ma-4" outlined>
    <v-card-title>No hay más citas para el día de hoy</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    citasHoy: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      proximaCita: null
    }
  },
  watch: {
    citasHoy: {
      handler: 'findProximaCita',
      immediate: true
    }
  },
  methods: {
    findProximaCita () {
      const now = new Date()
      this.proximaCita = this.citasHoy
        .filter(cita => new Date(cita.fecha) > now)
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))[0] || null
    },
    formatHour (fecha) {
      const date = new Date(fecha)
      let hours = date.getHours()
      const minutes = date.getMinutes().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'p.m.' : 'a.m.'
      hours = hours % 12
      return `${hours}:${minutes} ${ampm}`
    }
  }
}
</script>

<style scoped>
.cita-card {
  width: 280px;
  height: 285px;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  padding: 10px 16px;
  font-size: 0.8em;
}

.content p {
  margin: 4px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

</style>
