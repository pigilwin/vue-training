<template>
    <nav class="nav justify-content-center">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/people" class="nav-link">List People</router-link>
        <router-link to="/create" class="nav-link">Create person</router-link>
        <router-link to="/settings" class="nav-link">Settings</router-link>
    </nav>
</template>

<script>
export default {
    name: "navbar"
}
</script>