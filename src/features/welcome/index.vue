<template>
  <div>
    <v-layout row wrap>
      <v-flex >
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Register Company</h3>
              <br>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark @click="changeRoute(routeNames.RegisterCompany)">Register now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <v-layout row wrap>
      <v-flex >
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Login Company</h3>
              <br>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark @click="changeRoute(routeNames.LoginCompany)">Login now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      routeNames: {
        RegisterCompany: 'RegisterCompany',
        LoginCompany: 'LoginCompany'
      }
    }
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push({name: routeName})
    }
  }
}
</script>
