<template>
  <v-sheet color="transparent">
    <v-row class="ma-1">
      <v-col cols="8">
        <div></div>
      </v-col>
      <v-col cols="4">
        <v-btn
          outlined
          color="primary"
          @click="agregarAlCarrito"
        >
          Agregar al carrito
        </v-btn>
        <v-btn
          icon
          @click="mostrarCarrito = !mostrarCarrito"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <MedicineCard
        v-for="medicina in medicinasBD"
        :key="medicina.id"
        :medicina="medicina"
        @quantity-update="handleQuantityUpdate"
        ref="medicinas"
      />
    </v-row>

    <v-dialog v-model="mostrarCarrito" persistent max-width="600px">
      <v-card>
        <v-card-title>
          Carrito
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="item in carritoArray"
              :key="item.id"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.nombre }}</v-list-item-title>
                <v-list-item-subtitle>Cantidad: {{ item.quantity }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="eliminarItemCarrito(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="confirmarCarrito">Confirmar</v-btn>
          <v-btn color="red" @click="cancelar">Cerrar</v-btn>
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
      medicinasBD: [],
      carrito: {},
      mostrarCarrito: false,
      userId: this.$store.getters.getActualUser.email
    }
  },
  computed: {
    carritoArray () {
      return Object.keys(this.carrito).map((id) => {
        const medicina = this.medicinasBD.find(m => m.id === id)
        return {
          ...medicina,
          quantity: this.carrito[id]
        }
      })
    }
  },
  mounted () {
    this.obtenerMedicinas()
  },
  methods: {
    obtenerMedicinas () {
      const url = '/getAllMedicines'
      this.$axios.get(url)
        .then((res) => {
          console.log('response => ', res)
          if (res.data.message === 'success') {
            this.medicinasBD = res.data.medicines
          }
        })
        .catch((error) => {
          console.log('error => ', error)
        })
    },
    handleQuantityUpdate ({ id, quantity, descripcion, nombre }) {
      if (quantity > 0) {
        this.$set(this.carrito, id, quantity, descripcion, nombre)
      } else {
        this.$delete(this.carrito, id)
      }
    },
    agregarAlCarrito () {
      console.log('Carrito agregado: ', this.carritoArray)
      if (this.carritoArray.length === 0) {
        alert('Aún no has seleccionado ningun producto.')
      } else {
        alert('Productos agregados. Entra a tu carrito para confirmar la compra.')
      }
    },
    confirmarCarrito () {
      const carritoArray = this.carritoArray.map(item => ({
        id: item.id,
        descripcion: item.descripcion,
        nombre: item.nombre,
        quantity: item.quantity
      }))

      const url = '/comprar'
      const data = { userId: this.userId, carrito: carritoArray }
      console.log(data)

      this.$axios.post(url, data)
        .then((res) => {
          // console.log(res.data.myMedicine)
          this.obtenerMedicinas()
          this.resetAllQuantities()
          this.mostrarCarrito = false
        })
        .catch((error) => {
          console.error('Error procesando la compra: ', error)
        })
    },
    cancelar () {
      this.mostrarCarrito = false
    },
    eliminarItemCarrito (id) {
      this.$delete(this.carrito, id)
      this.$refs.medicinas.forEach((comp) => {
        if (comp.medicina.id === id) {
          comp.resetQuantity()
        }
      })
    },
    resetAllQuantities () {
      this.$refs.medicinas.forEach(comp => comp.resetQuantity())
    }
  }
}
</script>

<style scoped>
.v-row {
  margin-top: 20px;
}
</style>
