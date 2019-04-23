<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <label for="firstname">First Name</label>
                    <input type="text" id="firstname" v-model="firstName" class="form-control"/>
                </div>
                <div class="col-md-12 col-xs-12">
                    <label for="lastname">Last Name</label>
                    <input type="text" id="lastname" v-model="lastName" class="form-control"/>
                </div>
                <div class="col-md-12 col-xs-12">
                    <label for="age">Age</label>
                    <input type="number" id="age" v-model="age" class="form-control"/>
                </div>
                <div class="col-xs-12 col-md-12">
                    <label for="country">Country</label>
                    <select id="country" class="form-control" v-model="selectedCountry">
                        <option :value="option.code" :key="option.code" v-for="option in countries">{{option.name}}</option>
                    </select>
                </div>
                <div class="col-xs-12 col-md-12 p-3">
                    <button class="btn btn-block btn-lg btn-primary" @click="createPerson()">Create Person</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Countries from '@/providers/Countries';

export default {
    name: "Editor",
    data () {
        return {
            countries: [],
            selectedCountry: 0,
            firstName: '',
            lastName: '',
            age: 0
        }
    },
    created () {
        const that = this;
        Countries.getAll().then((data) => {
            that.countries = data;
        });
    },
    methods: {
        createPerson () {
            
        }
    }
}
</script>