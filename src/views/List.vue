<template>
    <div>
        <div class="row mb-4">
            <div class="col-xs-12 col-md-6" :key="person.id" v-for="person in people">
                <person :person="person" :countries="countries"></person>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Person from '@/components/Person';
    import {FETCH_PEOPLE_FROM_DATABASE} from "@/stores/Person/PersonActions";
    import {FETCH_COUNTRIES_FROM_API} from "@/stores/Countries/CountriesActions";

    export default {
        name: 'List',
        data () {
            return {
                people: [],
                countries: {}
            }
        },
        created () {
            this.$store.dispatch(FETCH_PEOPLE_FROM_DATABASE).then(() => {
                this.people = this.$store.getters.getPeople;
            });
            this.$store.dispatch(FETCH_COUNTRIES_FROM_API).then(() => {
                this.countries = this.$store.getters.getCountriesAsObject;
            });
        },
        components: {
            Person
        },
    };
</script>