<template>
  <v-app>
    <v-main>
      <v-sheet
        class="pa-0 ma-0"
        color="#FFDEC8"
      >
        <v-row>
          <v-col cols="6" style="position: relative; display: inline-block;">
            <div style="position: absolute; top: 21%; left: 50%; transform: translate(-50%, -50%); padding: auto;" class="fontTitle">
              Clinic Patient's Dashboard
            </div>
            <v-img :src="require('@/assets/images/logo.svg')" class="ma-7" />
          </v-col>
          <v-col cols="6" style="height: 100%!important;" align-self="center">
            <Nuxt />
          </v-col>
        </v-row>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<style scoped>
.fontTitle {
  font-size: 32px!important;
  line-height: 78px!important;
}
</style>
