import {company_factory_abi} from './company_factory_abi'
import {web3} from '../web3'
const address = "0xCa81476cD93999A0F8751634786248b8B7FB91f4";

export default {
  contract : new web3.eth.Contract(company_factory_abi, address),
  web3:web3
}