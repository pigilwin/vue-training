<template>
    <div class="row mt-5">
        <div class="col-md-12 col-xs-12">
            <h2 class="text-center">Creating a new person</h2>
        </div>
        <div class="col-md-12 col-xs-12">
            <person-editor></person-editor>
        </div>
    </div>
</template>

<script>
import Editor from '@/components/Editor.vue'
export default {
    name: "Create",
    components: {
        "person-editor": Editor
    }
}
</script>

<style scoped>

</style>