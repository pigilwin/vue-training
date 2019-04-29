import {FETCH_COUNTRIES_FROM_API} from "./CountriesActions";
import {LOAD_COUNTRIES} from "./CountriesMutations";
import Countries from '@/providers/Countries';

export default {
    state: {
        countries: []
    },
    mutations: {
        [LOAD_COUNTRIES] (state, countries) {
            state.countries = countries;
        }
    },
    actions: {
        [FETCH_COUNTRIES_FROM_API] (context) {
            return new Promise((resolve) => {
                Countries.getAll().then((data) => {
                    let countries = [{
                        code: 0,
                        name: 'Unknown'
                    }];
                    context.commit(LOAD_COUNTRIES, countries.concat(data));
                    resolve();
                });
            });
        }
    },
    getters: {
        getCountries (state) {
            return state.countries;
        },
        getCountriesAsObject (state) {
            let countries = {};
            state.countries.forEach((country) => {
                countries[country.code] = country.name;
            });
            return countries;
        }
    }
}