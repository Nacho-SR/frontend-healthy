<template>
  <v-app>
    <v-card
      elevation="20"
      width="220px"
      style="border-radius: 15px;"
    >
      <v-navigation-drawer
        app
        permanent
        color="#ffdec8"
      >
        <v-sheet
          color="transparent"
          align="center"
          justify="top"
          height="160px"
        >
          <v-img
            :src="require('@/assets/images/logo_dash.svg')"
            :style="{ transform: 'scale(1.3)' }"
            max-height="170px"
            max-width="170px"
          />
        </v-sheet>

        <v-list rounded>
          <v-list-item
            v-for="[icon, text, ruta] in links"
            :key="icon"
            link
            :to="ruta"
            color="#ffa569"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-col align="center" class="abajote">
          <v-avatar class="ma-2">
            <v-img :src="require('@/assets/images/yo.jpg')"/>
          </v-avatar>
          <v-list-item-title>Nombre Completo</v-list-item-title>
          <v-list-item-subtitle>email@example.com</v-list-item-subtitle>
        </v-col>
      </v-navigation-drawer>
    </v-card>

    <v-main>
      <v-container
        class="ma-0 pa-3 paginas"
        fluid
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      /*  ['mdi-account', 'Usuarios', '/dashboard/usuarios'], */
      ['mdi-view-dashboard-outline', 'Panel de control', '/dashboard'],
      ['mdi-calendar-month-outline', 'Citas', '/dashboard/schedule'],
      ['mdi-bed-outline', 'Pacientes', '/dashboard/patients'],
      ['mdi-cart-outline', 'Ordenes', '/dashboard/orders'],
      ['mdi-microscope', 'Laboratorio', '/dashboard/laboratory']
    ]
  })
}
</script>

<style scoped>
.v-text-field--outlined fieldset {
  content:#ffa569 !important;
}

.abajote {
  position:absolute;
  bottom: 5px;
}

.paginas {
  background-color: #fff4ec;
}

</style>
