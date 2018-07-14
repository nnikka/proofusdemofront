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
                    <div>Public key: {{publicKey}}</div>
                    <br>
                    <div>Private key: {{privateKey}}</div>
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
    var publicKey = `
                      -----BEGIN PUBLIC KEY-----
                      MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC864U41PhHDZek0pBdNDgl6lDO
                      BGKMJSzmYTtM/ZYfgkf+XbxyMAp63I0YaMnWKGahgngYyhN+D+i0m0Kqcy40dmIH
                      /bwy7XUVBs4IMH00upqZ7BgWsvo/qHrAi1p8Go32a9GCM0K0rS4IoQPY594PpEAP
                      Wcy5dFspT27fK7n+5QIDAQAB
                      -----END PUBLIC KEY-----`;
                          var privateKey = `-----BEGIN RSA PRIVATE KEY-----
                      MIICXAIBAAKBgQC864U41PhHDZek0pBdNDgl6lDOBGKMJSzmYTtM/ZYfgkf+Xbxy
                      MAp63I0YaMnWKGahgngYyhN+D+i0m0Kqcy40dmIH/bwy7XUVBs4IMH00upqZ7BgW
                      svo/qHrAi1p8Go32a9GCM0K0rS4IoQPY594PpEAPWcy5dFspT27fK7n+5QIDAQAB
                      AoGAQiI4isKS/1yUv1Au1VHYbf1uuA/055aD90oGVldXXERhK3xo4ZhLsuLOScM1
                      FNEjzFo97H+g/zpWfhLz7XNQstabRcdEvLbubI977gWvQ3hETbrGIpMNqgHPJzeC
                      Xbtae/hYLMVpuM+6aGrvNgfksftob3/n0nTYHdE5IMfwdqkCQQDpDRxaEGku5KhB
                      5pDWMAUPxUD9YRWdCkJSQchRjmtEBLtjTGUByx6tKH6HBj+6YpfgZFVAvP+V9uu9
                      lJZovMBjAkEAz4XstFvIAeHdpnr88o6bcSscuynsKUikz4DXeqfJW/18+KDopBUe
                      xAUAkXsTr71IUVJxrMlES2eJO3PTftdSFwJBAJlwXWNa/LW4LKO+90teMGbyu1hX
                      7FAJ6iKYVxiDSVJuPyYgrTwiDN97Ets5nQnNUiuWQ58tEKYe/ZVDWEg7RfsCQF7n
                      PTfCHXaW53miFxmKFBYuBCan5mN+4DgxENn7738NLuC5HYskSXyVWQwu//LHmlHu
                      ZSQCqyPcxoqUzqzcJaMCQBH6MxZv2napyhk6NolHQOSDtNOwNs4wFvXn6ux24s8I
                      6zqAiYHM4chp6SVW+DGBDh1xD75//jLsP4uHfPoHULg=
                      -----END RSA PRIVATE KEY-----`;
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var encrypted = encrypt.encrypt("jordan123");
    var decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    var uncrypted = decrypt.decrypt(encrypted);
    console.log(uncrypted)

  },
  computed:{
    getPublicKey(){
      return this.formData.id + this.formData.name + this.formData.description + this.formData.email;
    },
    getPrivateKey(){

    }
  },
  
  methods: {
    submit() {

    }
  }
}
</script>
