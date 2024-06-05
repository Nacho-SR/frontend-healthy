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
        <v-tab-item :key="0" align="center">
          <div v-if="citasAyer.length === 0">No hay citas para ayer.</div>
          <div v-else>
            <v-card
              v-for="cita in citasAyer"
              :key="cita.id"
              flat
              color="transparent"
              elevation="7"
              style="max-width: 85%; margin-bottom: 35px;"
            >
              <v-row align="center" justify="center" style="margin-top: 15px;">
                <v-col class="w-1 pa-0">
                  <v-img :src="require('@/assets/images/yo.jpg')" class="patient-img" rounded/>
                </v-col>
                <v-col class="mar-1 pa-0" justify="center" align="left">
                  <v-row align="center" class="mar-1">
                    <v-card-title class="pad-lateral">{{ cita.pacienteNombre }}</v-card-title>
                  </v-row>
                  <v-row class="mar-1">
                    <v-card-title class="pad-lateral">Edad: {{ cita.pacienteEdad }}</v-card-title>
                    <v-card-title class="pad-lateral">Sexo: {{ cita.pacienteSexo }}</v-card-title>
                  </v-row>
                  <v-row>
                    <v-card-text class="pad-lateral">Teléfono de contacto: {{ cita.pacienteTelefono }}</v-card-text>
                    <v-card-text class="pad-lateral">Correo electrónico: {{ cita.pacienteEmail }}</v-card-text>
                    <v-card-text class="pad-lateral">Dirección: {{ cita.pacienteDireccion }}</v-card-text>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-tab-item>

        <v-tab-item :key="1" align="center">
          <div v-if="citasHoy.length === 0">No hay citas para hoy.</div>
          <div v-else>
            <v-card
              v-for="cita in citasHoy"
              :key="cita.id"
              flat
              color="transparent"
              elevation="7"
              style="max-width: 85%; margin-bottom: 35px;"
            >
              <v-row align="center" justify="center" style="margin-top: 15px;">
                <v-col class="w-1 pa-0">
                  <v-img :src="require('@/assets/images/yo.jpg')" class="patient-img" rounded/>
                </v-col>
                <v-col class="mar-1 pa-0" justify="center" align="left">
                  <v-row align="center" class="mar-1">
                    <v-card-title class="pad-lateral">{{ cita.pacienteNombre }}</v-card-title>
                  </v-row>
                  <v-row class="mar-1">
                    <v-card-title class="pad-lateral">Edad: {{ cita.pacienteEdad }}</v-card-title>
                    <v-card-title class="pad-lateral">Sexo: {{ cita.pacienteSexo }}</v-card-title>
                  </v-row>
                  <v-row>
                    <v-card-text class="pad-lateral">Teléfono de contacto: {{ cita.pacienteTelefono }}</v-card-text>
                    <v-card-text class="pad-lateral">Correo electrónico: {{ cita.pacienteEmail }}</v-card-text>
                    <v-card-text class="pad-lateral">Dirección: {{ cita.pacienteDireccion }}</v-card-text>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-tab-item>

        <v-tab-item :key="2" align="center">
          <div v-if="citasManana.length === 0">No hay citas para mañana.</div>
          <div v-else>
            <v-card
              v-for="cita in citasManana"
              :key="cita.id"
              flat
              color="transparent"
              elevation="7"
              style="max-width: 85%; margin-bottom: 35px;"
            >
              <v-row align="center" justify="center" style="margin-top: 15px;">
                <v-col class="w-1 pa-0">
                  <v-img :src="require('@/assets/images/yo.jpg')" class="patient-img" rounded/>
                </v-col>
                <v-col class="mar-1 pa-0" justify="center" align="left">
                  <v-row align="center" class="mar-1">
                    <v-card-title class="pad-lateral">{{ cita.pacienteNombre }}</v-card-title>
                  </v-row>
                  <v-row class="mar-1">
                    <v-card-title class="pad-lateral">Edad: {{ cita.pacienteEdad }}</v-card-title>
                    <v-card-title class="pad-lateral">Sexo: {{ cita.pacienteSexo }}</v-card-title>
                  </v-row>
                  <v-row>
                    <v-card-text class="pad-lateral">Teléfono de contacto: {{ cita.pacienteTelefono }}</v-card-text>
                    <v-card-text class="pad-lateral">Correo electrónico: {{ cita.pacienteEmail }}</v-card-text>
                    <v-card-text class="pad-lateral">Dirección: {{ cita.pacienteDireccion }}</v-card-text>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </div>
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
        <v-card-title>
          <span class="text-h5">Agendar cita</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="6"
                sm="6"
                justify="center"
                align="center"
              >
                <v-select
                  v-model="cita.pacienteId"
                  :items="patientNames"
                  label="Paciente*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                justify="center"
                align="center"
              >
                <label for="fecha">Fecha:</label>
                <input type="date" v-model="cita.fecha" required />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <label for="hora">Hora:</label>
                <v-select v-model="cita.hora" :items="horasDisponibles(cita.fecha)" label="Hora*" required></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-col cols="6">
            <v-btn block color="green" @click="agendarCita">
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
      tab: 1,
      items: [
        'Ayer', 'Hoy', 'Mañana'
      ],
      cita: {
        pacienteId: '',
        doctorId: this.$store.getters.getActualUser.email,
        fecha: '',
        hora: ''
      },
      patients: [],
      patientNames: [],
      citas: [],
      citasAyer: [],
      citasHoy: [],
      citasManana: []
    }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get('/get-all-patients')
      console.log('API Response:', res) // Verifica la estructura de la respuesta
      this.patients = res.patients || [] // Ajusta según la estructura de la respuesta
      this.patientNames = this.patients.map(patient => patient.nombre)
    } catch (error) {
      console.error('Error obteniendo pacientes:', error)
      this.patients = [] // Asigna un array vacío en caso de error
    }
    this.loadCitas()
  },
  methods: {
    async loadCitas () {
      try {
        const url = '/myCitas'
        const data = {
          doctorId: this.cita.doctorId
        }
        const res = await this.$axios.post(url, data)
        console.log('API Response:', res) // Verifica la estructura de la respuesta
        this.citas = res.data.citas || [] // Ajusta según la estructura de la respuesta

        // Filtrar las citas por día
        const hoy = new Date()
        const ayer = new Date(hoy)
        const manana = new Date(hoy)
        ayer.setDate(hoy.getDate() - 1)
        manana.setDate(hoy.getDate() + 1)

        this.citasAyer = this.citas.filter(cita => new Date(cita.fecha).toDateString() === ayer.toDateString())
        this.citasHoy = this.citas.filter(cita => new Date(cita.fecha).toDateString() === hoy.toDateString())
        this.citasManana = this.citas.filter(cita => new Date(cita.fecha).toDateString() === manana.toDateString())
      } catch (error) {
        console.error('Error obteniendo las citas:', error)
        this.citas = [] // Asigna un array vacío en caso de error
      }
    },
    agendarCita () {
      const timeRegex = /^([0-9]{1,2}):([0-9]{2}) (a.m.|p.m.)$/i
      const match = timeRegex.exec(this.cita.hora)

      if (!match) {
        console.error('Error: Invalid time format. Please use HH:MM AM/PM.')
        return // Exit if time format is invalid
      }

      let hours = parseInt(match[1])
      const minutes = parseInt(match[2])
      const ampm = match[3].toUpperCase()

      const date = new Date()
      date.setHours(hours)
      date.setMinutes(minutes)

      // Adjust for AM/PM
      if (ampm === 'P.M.' && hours < 12) {
        hours += 12 // Convert 12 PM to 12:00:00 in 24-hour format
      }

      date.setHours(hours)

      const selectedDate = new Date(this.cita.fecha)
      selectedDate.setHours(selectedDate.getHours() + 6)
      selectedDate.setHours(date.getHours())
      selectedDate.setMinutes(date.getMinutes())
      console.log(selectedDate)

      // Convert the timestamp to ISO string for Firebase
      const newfecha = selectedDate.toISOString()

      // Verificar disponibilidad de la cita
      const url = '/agendar'
      const data = {
        doctorId: this.cita.doctorId,
        pacienteId: this.cita.pacienteId,
        fecha: newfecha
      }
      console.log(data)
      this.$axios.post(url, data)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'Cita agendada successfully') {
            this.loadCitas() // Cargar citas nuevamente después de agendar una nueva
            this.showDialog = false
          }
          if (res.data.message === 'Ya existe una cita programada a esa hora.') {
            alert(res.data.message)
          }
        })
        .catch((error) => {
          console.log('data =>', data)
          console.log('@@ error => ', error)
        })
    },
    horasDisponibles (fecha) { // New function to calculate available hours
      if (!fecha) {
        return [] // No selected date, return empty array
      }

      const availableHours = []
      const startTime = 9 * 60 * 60 * 1000
      const startLunch = 14 * 60 * 60 * 1000
      const endLunch = 16 * 60 * 60 * 1000
      const endTime = 20 * 60 * 60 * 1000 // 8:00 PM in milliseconds
      const interval = 50 * 60 * 1000 // 50 minutes in milliseconds

      const selectedDate = new Date(fecha)
      selectedDate.setHours(selectedDate.getHours() + 6)

      for (let time = startTime; time < startLunch; time += interval) {
        const hour = new Date(time + selectedDate.getTime()) // Adjust time based on selected date
        const formattedHour = hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // Check for existing appointments (implementation depends on your logic)
        const isAvailable = true // this.isAppointmentAvailable(this.cita.doctorId, fecha, formattedHour); // Replace with your logic

        if (isAvailable) {
          availableHours.push(formattedHour)
        }
      }
      for (let time = endLunch; time < endTime; time += interval) {
        const hour = new Date(time + selectedDate.getTime()) // Adjust time based on selected date
        const formattedHour = hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // Check for existing appointments (implementation depends on your logic)
        const isAvailable = true // this.isAppointmentAvailable(this.cita.doctorId, fecha, formattedHour); // Replace with your logic

        if (isAvailable) {
          availableHours.push(formattedHour)
        }
      }

      return availableHours
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
