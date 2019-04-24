<template>
    <div class="row mb-4">
        <div class="col-xs-12 col-md-12">
            <editor></editor>
        </div>
    </div>
</template>

<script>
    import DatabaseHelper from '@/providers/DatabaseHelper';
    import Editor from "@/components/Editor"
    export default {
        name: "Edit",
        data () {
          return {
            id: '',
            firstname: '',
            lastname: '',
            age: 0,
            country: 0
          };
        },
        created () {
          const db = new DatabaseHelper();
          const id = this.$route.params.id;
          db.getOne(id).then((row)=> {
            const data = row.data();
            this.id = id;
            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.age = data.age;
            this.country = data.country;
          });
        },
        components: {
            Editor
        }
    }
</script>
