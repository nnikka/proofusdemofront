import Vue from 'vue'
import Vuex from 'vuex'
import company from './company'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    company
  }
})