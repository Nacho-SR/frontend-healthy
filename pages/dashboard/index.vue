<template>
  <v-row>
    <v-col cols="11" />
    <v-col
      cols="1"
      class="ma-0 pa-0"
      align="center"
      justify="center"
    >
      <v-btn href="/" rounded outlined color="#FF3234">Log-out</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'dashboard',
  auth: true
}
</script>
