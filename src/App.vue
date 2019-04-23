<template>
    <div class="container px-4 py-4 bg-light">
        <heading></heading>
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';

export default {
    name: "app",
    components: {
        Heading,
        Navbar
    }
}
</script>