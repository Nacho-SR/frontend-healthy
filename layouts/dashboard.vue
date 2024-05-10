<template>
  <v-app>
    <v-navigation-drawer
      app
      permanent
      color="#FFDEC8"
      width="220px"
    >
      <v-sheet
        color="#FFDEC8"
        align="center"
        justify="start"
        height="180px"
      >
        <v-img
          :src="require('@/assets/images/logo_dash.svg')"
          :style="{ transform: 'scale(1.3)' }"
          max-height="200px"
          max-width="200px"
        />
      </v-sheet>

      <v-list>
        <v-list-item
          v-for="[icon, text, ruta] in links"
          :key="icon"
          link
          :to="ruta"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
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
      ['mdi-account', 'Usuarios', '/dashboard/usuarios'],
      ['mdi-view-dashboard-outline', 'Panel de control', '/dashboard'],
      ['mdi-calendar-month-outline', 'Agendar', '/dashboard/schedule'],
      ['mdi-bed-outline', 'Pacientes', '/dashboard/patients'],
      ['mdi-cart-outline', 'Ordenes', '/dashboard/orders'],
      ['mdi-microscope', 'Laboratorio', '/dashboard/laboratory']
    ]
  })
}
</script>
