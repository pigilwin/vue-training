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
                <div class="col-xs-12 col-md-12 p-3">
                    <button class="btn btn-block btn-lg btn-primary" @click="person()">Create Person</button>
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
    data () {
        return {
            countries: [],
            selectedCountry: 0,
            firstName: '',
            lastName: '',
            age: 0,
            id: 0
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
    },
    methods: {
        person () {
            const database = new DatabaseHelper();
            const that = this;
            const isValidated = this.lastName > 0 && this.firstName > 0 && this.age > 0 && this.selectedCountry > 0;

            if (isValidated) {
                if (id === 0) {
                    database.addPerson(this.firstName, this.lastName, this.age, this.selectedCountry).then(() => {
                        that.$snack.success({
                            text: 'Created person'
                        });
                    });
                } else {
                    database.updatePerson(this.id, this.firstName, this.lastName, this.age, this.selectedCountry).then(() => {
                        that.$snack.success({
                            text: 'Updated person'
                        });
                    });
                }
            } else {
                that.$snack.danger({
                    text: 'Form is in a invalid state'
                });
            }
        }
    },
    components: {
        FeedBackMessage
    }
}
</script>