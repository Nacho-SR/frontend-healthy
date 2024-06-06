<template>
  <div>
    <v-select
      v-model="selectedPatient"
      :items="nombres"
      label="Paciente:"
      item-text="nombre"
      return-object
      @change="selectPatient"
      placeholder="Selecciona un paciente..."
    />
  </div>
</template>

<script>
export default {
  props: {
    patients: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectedPatient: null
    }
  },
  computed: {
    nombres () {
      console.log('pacientes en la barra', this.patients)
      // Verificamos si this.patients está definido antes de intentar acceder a sus propiedades
      if (this.patients && this.patients.length > 0) {
        return this.patients
      } else {
        return []
      }
    }
  },
  methods: {
    selectPatient () {
      this.$emit('select-patient', this.selectedPatient)
    }
  }
}
</script>
