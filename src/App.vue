<template>
  <div id="app">
    <v-container class="container-toped">
      <router-view/>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'https://unpkg.com/vuetify/dist/vuetify.min.css';
@import '../static/style.css';
body {
  font-family: Roboto,sans-serif!important;
}
</style>


