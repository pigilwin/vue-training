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
    import DatabaseHelper from '@/providers/DatabaseHelper';
    import Countries from '@/providers/Countries';

    export default {
        name: 'List',
        data () {
            return {
                people: [],
                countries: {}
            }
        },
        created () {
            this.loadData();
        },
        methods: {
            loadData () {
                let db = new DatabaseHelper();
                db.getData().then((data) => {
                    this.people = data;
                });
                Countries.getAll().then((row) => {
                    row.forEach((country) => {
                        this.countries[country.code] = country.name;
                    });
                });
            }
        },
        components: {
            Person
        },
    };
</script>