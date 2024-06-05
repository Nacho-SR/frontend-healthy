<template>
  <v-col cols="12" sm="6" md="4">
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="medicina.image"
        height="200px"
      ></v-img>
      <v-card-title>{{ medicina.nombre }}</v-card-title>
      <v-card-subtitle>{{ medicina.descripcion }}</v-card-subtitle>
      <v-card-actions class="justify-center">
        <v-btn icon @click="decrement" :disabled="quantity === 0">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <span>{{ quantity }}</span>
        <v-btn icon @click="increment" :disabled="quantity >= medicina.existencia">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
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
  },
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    addMedicina () {
      // Lógica para agregar medicina al carrito
      this.$emit('add-to-cart', { id: this.medicina.id, quantity: this.quantity, descripcion: this.medicina.descripcion, nombre: this.medicina.nombre })
    },
    increment () {
      if (this.quantity < this.medicina.existencia) {
        this.quantity++
        this.emitQuantityUpdate()
      }
    },
    decrement () {
      if (this.quantity > 0) {
        this.quantity--
        this.emitQuantityUpdate()
      }
    },
    emitQuantityUpdate () {
      this.$emit('quantity-update', { id: this.medicina.id, quantity: this.quantity })
    },
    resetQuantity () {
      this.quantity = 0
      this.emitQuantityUpdate()
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
.v-card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
span {
  width: 30px;
  text-align: center;
}
</style>
