<template>
  <div>
    <input
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Selecciona un paciente..."
    />
    <ul v-if="patients.length && query">
      <li v-for="patient in PacientesFiltrados" :key="patient.nombre" @click="selectPatient(patient)">
        {{ patient.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      patients: [],
      PacientesFiltrados: []
    }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get('/get-all-patients')
      console.log('API Response:', res) // Verifica la estructura de la respuesta
      this.patients = res.patients || [] // Ajusta según la estructura de la respuesta
    } catch (error) {
      console.error('Error obteniendo pacientes:', error)
      this.patients = [] // Asigna un array vacío en caso de error
    }
  },
  methods: {
    onInput () {
      this.PacientesFiltrados = this.patients.filter(patient =>
        patient.nombre.toLowerCase().includes(this.query.toLowerCase())
      )
    },
    selectPatient (patient) {
      this.$emit('select-patient', patient)
    }
  }
}
</script>
