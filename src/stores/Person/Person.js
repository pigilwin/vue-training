import DatabaseHelper from '@/providers/DatabaseHelper';
import { LOAD_PEOPLE } from './PersonMutations';
import { FETCH_PEOPLE_FROM_DATABASE } from "./PersonActions";

export default  {
    state: {
        people: []
    },
    mutations: {
        [LOAD_PEOPLE] (state, loadedPeople) {
            state.people = loadedPeople;
        }
    },
    actions: {
        [FETCH_PEOPLE_FROM_DATABASE] (context) {
            let db = new DatabaseHelper();
            return new Promise((resolve) => {
                db.getData().then((data) => {
                    context.commit(LOAD_PEOPLE, data);
                    resolve();
                });
            });
        }
    },
    getters: {
        getPeople (state) {
            return state.people;
        }
    }
}
