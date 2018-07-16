<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap class="login-form-container">
        <v-flex xs2></v-flex>
        <v-flex xs8>
          <v-card>
            <v-card-title primary-title>
              <div class="fluid">
                <h1 class="lg-header">Login company</h1>
                <br>
                <div class="lg-form-container">
                  <v-form v-model="valid">
                    <v-text-field
                      v-model="formData.id"
                      label="Identification Code"
                      :rules="idRules"
                    ></v-text-field>
                    <v-text-field
                      v-model="formData.email"
                      :rules="emailRules"
                      label="E-mail"
                    ></v-text-field>
                  </v-form>
                  <v-btn :disabled="!valid" color="blue darken-1" class="white--text sep-btn" @click="submit()">
                    Submit
                  </v-btn>
                </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        <v-flex xs4></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import keypair from 'keypair'
import forge from 'node-forge'
import contractOption from '../../contract/company_factory_contract.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      loading: true,
      valid: false,
      formData: {
        email: '',
        id: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      idRules: [
        v => !!v || 'Id is required'
      ],
      error: false,
    }
  },
  
  methods: {
    submit() {
      contractOption.contract.methods.getCompanyById(this.formData.id).call().then(address=>{
        var checkAddress = !(/^0x0+$/.test(address))
        if(checkAddress){
          this.company.address = address;
          this.$router.push({name:'ProfilePage'})
        }else{
          alert("Company doesn't exist");
        }
      })
    }
  },
  computed:{
    ...mapState([
      'company'
    ])
  }
}
</script>
