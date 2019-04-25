<template>
    <div class="card">
        <div class="card-header">
            <h1>{{current.firstname}} {{current.lastname}}</h1>
        </div>
        <div class="card-body">
            <p>Age: {{current.age}}</p>
            <p>Location: {{activeCountries[current.location]}}</p>
        </div>
        <div class="card-footer">
            <router-link :to="{name: 'view', params: {id: current.id}}" class="btn btn-primary btn-block">Go</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Person",
        props: {
            person: {
                type: Object,
                default: {
                    id: '',
                    firstname: '',
                    lastname: '',
                    age: '',
                    country: ''
                }
            },
            countries: {
                type: Object
            }
        },
        created () {
            this.current = this.person;
            this.activeCountries = this.countries;
        },
        data () {
            return {
                current: {},
                activeCountries: {}
            };
        }
    }
</script>