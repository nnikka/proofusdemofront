import Web3 from 'web3'
const Abi = [ { constant: true,
  inputs: [],
  name: 'getDeployedCompanies',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x567390a5' },
{ constant: false,
  inputs: [ [Object], [Object], [Object], [Object], [Object] ],
  name: 'deployContract',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
  signature: '0x8eea2ae7' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'companiesList',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0x9c1f5bd2' },
{ constant: true,
  inputs: [ [Object] ],
  name: 'companiesArray',
  outputs: [ [Object] ],
  payable: false,
  stateMutability: 'view',
  type: 'function',
  signature: '0xf9a248c7' } ];

const address = "0xc158175d9d3aBeCD0d286818eBA0504Bf0fA865C";


const web3 = new Web3(window.web3.currentProvider)

export default {
  contract : new web3.eth.Contract(Abi, address),
  web3:web3
}
