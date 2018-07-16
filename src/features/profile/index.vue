<template>
    <div>

        <h1>Profile Info</h1>
        <p>company id:{{id}}</p>
        <p>address created from:{{address}}</p>
        <p>phone:{{phone}}</p>
        <p>email:{{email}}</p>
        <p>description:{{description}}</p>
        <p>name:{{name}}</p>
        <p>Am i confirmed:{{isConfirmed}}</p>
        <p></p>
    
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

    data(){
        return{
            id:'',
            description:'',
            phone:'',
            email:'',
            address:'',
            name:'',
            isConfirmed:'',
        }
    },
    beforeMount(){
        if(this.company.address){
            let companyContract = new web3.eth.Contract(company_abi,this.company.address)
            companyContract.methods.getCompanyInfo().call().then(companyInfo=>{
                this.address = companyInfo[0];
                this.id = companyInfo[1];
                this.phone = companyInfo[2];
                this.name = companyInfo[3];
                this.description = companyInfo[4];
                this.email = companyInfo[5];
                this.isConfirmed = companyInfo[6];
                
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
