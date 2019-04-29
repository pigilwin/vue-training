import Vue from 'vue';
import Vuex from 'vuex';
import Person from './stores/Person/Person';
import Countries from './stores/Countries/Countries';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    person: Person,
    countries: Countries
  }
});