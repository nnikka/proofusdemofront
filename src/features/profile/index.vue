<template>
    <div>

        <h1>Profile Info</h1>
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
    }
}
</script>
