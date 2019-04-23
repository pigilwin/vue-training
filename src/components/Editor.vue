<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <label for="firstname">First Name</label>
                    <input id="firstname" class="form-control" type="text"/>
                </div>
                <div class="col-md-12 col-xs-12">
                    <label for="lastname">Last Name</label>
                    <input id="lastname" class="form-control" type="text"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Editor"
}
</script>