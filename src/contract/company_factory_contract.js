import {company_factory_abi} from './company_factory_abi'
import {web3} from '../web3'
const address = "0xD19b953DD39e04784B100901dF996c7Fe8dF9e9D";

export default {
  contract : new web3.eth.Contract(company_factory_abi, address),
  web3:web3
}