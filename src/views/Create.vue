<template>
    <div class="row mt-5">
        <div class="col-md-12 col-xs-12">
            <h2 class="text-center">Creating a new person</h2>
        </div>
        <div class="col-md-12 col-xs-12">
            <person-editor
                :edit="this.edit"
                @invalidForm="showInvalidFormMessage()"
                @newPersonCreated="newPersonCreated()"
                @personUpdated="personUpdated()"

            ></person-editor>
        </div>
    </div>
</template>

<script>
import Editor from '@/components/Editor.vue'
export default {
    name: "Create",
    data () {
      return {
        edit: true
      }
    },
    methods: {
      showInvalidFormMessage () {
        this.$snack.danger({
          text: 'Invalid Form',
          button: 'Ok'
        });
      },
      newPersonCreated () {
        this.$snack.success({
          text: 'New person created',
          button: 'Ok'
        });
        this.$router.push('people');
      },
      personUpdated () {
        this.$snack.success({
          text: 'Person updated',
          button: 'Ok'
        });
        this.$router.push('people');
      }
    },
    components: {
        "person-editor": Editor
    }
}
</script>

<style scoped>

</style>
