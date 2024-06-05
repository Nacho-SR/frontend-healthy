<template>
  <v-sheet color="transparent">
    <v-row class="ma-2">
      <v-col cols="10" />
      <v-col
        cols="2"
        class="ma-0 pa-0"
        align="end"
        justify="center"
      >
        <v-btn href="/" rounded outlined color="#FF3234">Log-out</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <div style="margin-left: 30px; margin-bottom: 30px;">
        <h1>¡Bienvenido Dr. {{ actualUser.nombre }} {{ actualUser.apaterno }}!</h1>
      </div>
    </v-row>

    <v-row class="ma-5">
      <v-col>
          <h3>Próxima cita</h3>
        <div class="cita-container">
          <NextCita :citasHoy="citasHoy" />
        </div>
      </v-col>
      <v-col>
        <h3>Informacion de {{ actualUser.nombre }}</h3>
        <div class="cita-container">
          <InfoUser :user="actualUser" />
        </div>
      </v-col>
    </v-row>

    <v-row class="ma-3">
      <v-col>
        <h3>Medicamentos</h3>
        <v-row>
          <MyMedicine
            v-for="medicina in medicinas"
            :key="medicina.id"
            :medicina="medicina"
            ref="medicinas"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  layout: 'dashboard',
  auth: true,
  data () {
    return {
      actualUser: this.$store.getters.getActualUser,
      patients: [],
      patientNames: [],
      cita: {
        pacienteId: '',
        doctorId: this.$store.getters.getActualUser.email,
        fecha: '',
        hora: ''
      },
      medicinas: [],
      citas: [],
      citasHoy: []
    }
  },
  watch: {
    citas: {
      handler: function () {
        const hoy = new Date()
        this.citasHoy = this.citas.filter(cita => new Date(cita.fecha).toDateString() === hoy.toDateString())
      },
      immediate: true,
      deep: true
    }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get('/get-all-patients')
      console.log('API Response:', res) // Verifica la estructura de la respuesta
      this.patients = res.patients || [] // Ajusta según la estructura de la respuesta
      console.log(this.patients)
      this.patientNames = this.patients.map(patient => patient.nombre)
    } catch (error) {
      console.error('Error obteniendo pacientes:', error)
      this.patients = [] // Asigna un array vacío en caso de error
    }
    await this.loadCitas()
    await this.loadMedicines()
  },
  methods: {
    async loadMedicines () {
      try {
        const url = '/getMyMedicine'
        const data = {
          doctorId: this.cita.doctorId
        }

        const res = await this.$axios.post(url, data)
        console.log('API Response:', res) // Verifica la estructura de la respuesta
        this.medicinas = res.data.myMedicine || []
        console.log(this.medicinas)
      } catch (error) {
        console.error('Error obteniendo las medicinas:', error)
        this.medicinas = [] // Asigna un array vacío en caso de error
      }
    },
    async loadCitas () {
      try {
        const url = '/myCitas'
        const data = {
          doctorId: this.cita.doctorId
        }
        const res = await this.$axios.post(url, data)
        console.log('API Response:', res) // Verifica la estructura de la respuesta
        this.citas = res.data.citas || [] // Ajusta según la estructura de la respuesta

        // Agregar datos del paciente a cada cita
        this.citas.forEach((cita) => {
          const paciente = this.patients.find(p => p.id === cita.pacienteId)
          if (paciente) {
            cita.pacienteNombre = paciente.nombre
            cita.pacienteEdad = paciente.edad
            cita.pacienteSexo = paciente.sexo
            cita.pacienteTelefono = paciente.telefono
            cita.pacienteEmail = paciente.email
            cita.pacienteDireccion = paciente.direccion
          }
        })

        // Filtrar las citas por día
        const hoy = new Date()

        this.citasHoy = this.citas.filter(cita => new Date(cita.fecha).toDateString() === hoy.toDateString())
      } catch (error) {
        console.error('Error obteniendo las citas:', error)
        this.citas = [] // Asigna un array vacío en caso de error
      }
    }
  }
}
</script>

<style scoped>
.cita-container {
  display: flex;
  justify-content: flex-start;
}
</style>
