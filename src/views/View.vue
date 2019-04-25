<template>
    <div class="row mb-4">
        <div class="col-xs-12 col-md-12">
            <editor :person="person"></editor>
        </div>
    </div>
</template>

<script>
    import Editor from "@/components/Editor";
    import DatabaseHelper from '@/providers/DatabaseHelper';
    export default {
        name: "Edit",
        data () {
            return {
                person: {
                    id: '',
                    firstname: '',
                    lastname: '',
                    age: '',
                    country: ''
                }
            };
        },
        created () {
            const db = new DatabaseHelper();
            const id = this.$route.params.id;
            db.getOne(id).then((row)=> {
                this.person = row.data();
                this.person.id = id;
            });
        },
        watch: {
            '$route.params.id': {
                immediate: true,
                handler (id) {
                    const db = new DatabaseHelper();
                    db.getOne(id).then((row)=> {
                        this.person = row.data();
                        this.person.id = id;
                    });
                }
            }
        },
        components: {
            Editor
        }
    }
</script>