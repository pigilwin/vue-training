<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <label for="firstname">First Name</label>
                    <input type="text" id="firstname" v-model="firstName" class="form-control"/>
                    <feed-back-message :valid="firstName.length > 0" success="Valid first name" error="Invalid first name"></feed-back-message>
                </div>
                <div class="col-md-12 col-xs-12">
                    <label for="lastname">Last Name</label>
                    <input type="text" id="lastname" v-model="lastName" class="form-control"/>
                    <feed-back-message :valid="lastName.length > 0" success="Valid last name" error="Invalid last name"></feed-back-message>
                </div>
                <div class="col-md-12 col-xs-12">
                    <label for="age">Age</label>
                    <input type="number" id="age" v-model="age" class="form-control"/>
                    <feed-back-message :valid="age > 0" success="Valid age" error="Invalid age"></feed-back-message>
                </div>
                <div class="col-xs-12 col-md-12">
                    <label for="country">Country</label>
                    <select id="country" class="form-control" v-model="selectedCountry">
                        <option :value="option.code" :key="option.code" v-for="option in countries">{{option.name}}</option>
                    </select>
                    <feed-back-message :valid="selectedCountry > 0" error="Invalid country" success="Valid Country"></feed-back-message>
                </div>
                <div class="col-xs-12 col-md-12 p-3" v-if="edit">
                    <button class="btn btn-block btn-lg btn-primary" @click="savePerson()">{{decideButtonLabel()}}</button>
                </div>
                <div class="col-xs-12 col-md-12 p-3" v-if="!edit">
                    <router-link class="btn btn-block btn-lg btn-primary" :to="{name: 'edit', params: {id: id}}">Edit</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Countries from '@/providers/Countries';
import DatabaseHelper from "@/providers/DatabaseHelper";
import FeedBackMessage from "@/components/FeedBackMessage";

export default {
    name: "Editor",
    props: {
        person: {
            type: Object,
            default: function() {
              return {
                id: '',
                firstname: '',
                lastname: '',
                age: '',
                country: ''
              }
            }
        },
        edit: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            countries: [],
            selectedCountry: 0,
            firstName: '',
            lastName: '',
            currentAge: 0,
            id: ''
        }
    },
    created () {
        const that = this;
        Countries.getAll().then((data) => {
            that.countries = [{
                code: 0,
                name: 'Unknown'
            }];
            that.countries = that.countries.concat(data);
        });
        this.mapPerson(this.person);
    },
    methods: {
        savePerson () {
            const database = new DatabaseHelper();
            const isValidated = this.lastName.length > 0 && this.firstName.length > 0 && this.age > 0 && this.selectedCountry > 0;

            if (!isValidated) {
                this.$emit('invalidForm');
                return;
            }
            if (this.id.length === 0) {
                database.addPerson(this.firstName, this.lastName, this.age, this.selectedCountry).then(() => {
                  this.$emit('newPersonCreated');
                });
            } else {
                database.updatePerson(this.id, this.firstName, this.lastName, this.age, this.selectedCountry).then(() => {
                  this.$emit('personUpdated');
                });
            }
        },
        decideButtonLabel () {
            if (this.id.length === 0) {
                return 'Create Person';
            }
            return 'Update Person';
        },
        mapPerson (person) {
            this.id = person.id;
            this.firstName = person.firstname;
            this.lastName = person.lastname;
            this.age = person.age;
            this.selectedCountry = person.location;
        }
    },
    watch: {
        person: {
            immediate: true,
            handler (newVal) {
                this.mapPerson(newVal);
            }
        }
    },
    components: {
        FeedBackMessage
    }
}
</script>
