<template>
  <div>
    <h1>Profile Info</h1>
    <br>
    <br>
    <v-layout row wrap>
      <v-flex >
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Add Product</h3>
              <br>
              <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark @click="goToRegisterCompany()" >Add product</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {company_abi} from '../../contract/company_abi'
import {web3} from '../../web3'
export default {

  beforeMount(){
    if(this.company.address){
      let companyContract = new web3.eth.Contract(company_abi,this.company.address)
      companyContract.methods.description().call().then(nikoloz=>{
        console.log(nikoloz)
      })
    }
  },
  computed:{
    ...mapState([
      'company'
    ])
  },
  methods: {
    goToRegisterCompany() {
      this.$router.push({name: 'RegisterProduct'})
    }
  }
}
</script>
