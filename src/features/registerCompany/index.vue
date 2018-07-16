<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap class="login-form-container">
        <v-flex xs2></v-flex>
        <v-flex xs8>
          <v-card>
            <v-card-title primary-title>
              <div class="fluid">
                <h1 class="lg-header">Register company</h1>
                <br>
                <div class="lg-form-container">
                  <v-form v-model="valid">
                    <v-text-field
                      v-model="formData.id"
                      type="number"
                      label="Identification Code"
                      :rules="idRules"
                    ></v-text-field>
                    <v-textarea
                      v-model="formData.description"
                      label="Description"
                      :rules="descriptionRules"
                    ></v-textarea>
                    <v-text-field
                      v-model="formData.name"
                      label="Name"
                      :rules="nameRules"
                    ></v-text-field>
                    <v-text-field
                      v-model="formData.phone"
                      label="Phone"
                       type="number"
                      :rules="phoneRules"
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

              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <!-- <div>Public key: {{publicKey}}</div>
                    <br>
                    <div>Private key: {{privateKey}}</div> -->
                  </div>
                </v-card-title>
              </v-card>

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


export default {
  data() {
    return {
      loading: true,
      valid: false,
      publicKey:'',
      privateKey:'',
      formData: {
        email: '',
        name: '',
        phone: '',
        id: '',
        description: '',
        phone: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      nameRules: [
        v => !!v || 'Name is required'
      ],
      idRules: [
        v => !!v || 'Id is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required'
      ],
      phoneRules: [
        v => !!v || 'Phone is required'
      ],
      error: false,
    }
  },
  beforeMount () {
    
  },
  computed:{

  },
  
  methods: {
    submit() {
      contractOption.web3.eth.getAccounts().then(accounts=>{
        var account = accounts[0];
        contractOption.contract.methods
                    .deployContract(
                            parseInt(this.formData.id),
                            this.formData.name,
                            this.formData.description,
                            this.formData.email,
                            parseInt(this.formData.phone)
                    ).send({from:account,gas:1000000}).then(address=>{
                      var r = confirm("You've been registered successfully! Click ok or add another company");
                      if (r == true) {
                        this.$router.push({name: "LoginCompany"})     
                      }
                    })
      },(err)=>{

      })
      
    }
  }
}
</script>
