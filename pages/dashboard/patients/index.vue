<template>
  <v-sheet color="transparent">
    <v-row class="ma-1">
      <v-col cols="10">
        <div>
          <BarraPacientes @select-patient="displayPatient" />
        </div>
      </v-col>
      <v-col
        cols="2"
        class="ma-0 pa-0"
      >
        <v-btn
          rounded
          outlined
          color="#82E7EA"
          @click="showDialog=true"
          justify="center"
          align="center"
          class="ma-1"
        >
          Nuevo paciente
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="margin-top: 35px;">
      <PatientCard :patient="selectedPatient" />
    </v-row>
    <v-row style="margin-top: 45px;">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#f46a00"
        rounded
        fixed-tabs
        height="50px"
        style="margin-left: 80px; margin-right: 80px;"
      >
        <v-tab
          v-for="item in items"
          :key="item"
          class="tabs"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="theme--light.v-tabs-items">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat color="transparent">
            <v-row
              v-if="item == 'Recetas'"
              align="center"
              justify="center"
            >
              <v-card-text
                v-for="receta in consultas"
                :key="receta"
              >
                <RecetasPatient :receta="receta" />
              </v-card-text>
            </v-row>
            <v-row
              v-if="item == 'Revisiones'"
              align="center"
              justify="center"
            >
              <v-simple-table
                fixed-header
                height="300px"
              >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Fecha y hora
                      </th>
                      <th class="text-left">
                        Tratamiento
                      </th>
                      <th class="text-left">
                        Doctor
                      </th>
                      <th class="text-left">
                        Comentario
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in consultas"
                      :key="item.doctor"
                    >
                      <td>{{ item.fecha-hora }}</td>
                      <td>{{ item.tratamiento }}</td>
                      <td>{{ item.doctor }}</td>
                      <td>{{ item.comentario }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-row>
            <v-row
              v-if="item == 'Documentos'"
              align="center"
              justify="center"
            >
              <v-simple-table
                fixed-header
                height="300px"
              >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Fecha y hora
                      </th>
                      <th class="text-left">
                        Tratamiento
                      </th>
                      <th class="text-left">
                        Descarga
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in consultas"
                      :key="item.doctor"
                    >
                      <td>{{ item.fecha-hora }}</td>
                      <td>{{ item.tratamiento }}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-row>
            <v-row
              v-if="item == 'Pagos'"
              align="center"
              justify="center"
            >
              <v-simple-table
                fixed-header
                height="300px"
              >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Fecha y hora
                      </th>
                      <th class="text-left">
                        Tratamiento
                      </th>
                      <th class="text-left">
                        Pago
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in consultas"
                      :key="item.doctor"
                    >
                      <td>{{ item.fecha-hora }}</td>
                      <td>{{ item.tratamiento }}</td>
                      <td>${{ item.pago }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
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
        <v-card-title>Agregar Paciente</v-card-title>
        <v-card-text>
          <v-row width="100%">
            <v-text-field
              v-model="nombre"
              calss="pa-2 ma-2"
              label="Nombre"
              placeholder="Nombre"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="edad"
              calss="pa-2 ma-2"
              label="Edad"
              placeholder="Edad"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="sexo"
              calss="pa-2 ma-2"
              label="Sexo"
              placeholder="Sexo"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="telefono"
              calss="pa-2 ma-2"
              label="Telefono"
              placeholder="Telefono"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="email"
              calss="pa-2 ma-2"
              label="Email"
              placeholder="Correo electronico"
              outlined
            />
          </v-row>
          <v-row width="100%">
            <v-text-field
              v-model="direccion"
              calss="pa-2 ma-2"
              label="Direccion"
              placeholder="Direccion"
              outlined
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-col cols="6">
            <v-btn block color="green" @click="registrarPaciente">
              <span style="text-transform: none; color: white">
                Registrar
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
      nombre: null,
      edad: null,
      sexo: null,
      telefono: null,
      email: null,
      direccion: null,
      showDialog: false,
      tab: null,
      selectedPatient: null,
      items: [
        'Recetas', 'Revisiones', 'Documentos', 'Pagos'
      ],
      consultas: null
    }
  },
  methods: {
    registrarPaciente () {
      const url = '/register-patient'
      const data = {
        nombre: this.nombre,
        edad: this.edad,
        sexo: this.sexo,
        telefono: this.telefono,
        email: this.email,
        direccion: this.direccion
      }
      this.$axios.post(url, data)
        .then((res) => {
          console.log('@@ res => ', res)
          if (res.data.message === 'Patient registered successfully') {
            this.showDialog = false
          }
        })
        .catch((error) => {
          console.log('@@ error => ', error)
        })
    },
    displayPatient (patient) {
      this.selectedPatient = patient
      this.consultas = patient.consultas
    }
  }
}
</script>

<style scoped>

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

  .tabs {
    margin-left: 70px;
    margin-right: 70px;
    margin-top: 5px;
    margin-bottom: 5px
  }

  .v-tab {
    border-radius: 25px; /* Bordes redondeados */
    transition: box-shadow 0.3s; /* Transición suave para lxa sombra */
  }

  .v-tab:hover {
    box-shadow: 0 2px 4px rgba(244, 106, 0); /* Sombra personalizada */
  }

  .theme--light.v-tabs-items {
    background-color: rgb(255 255 255 / 0%);
  }
</style>
