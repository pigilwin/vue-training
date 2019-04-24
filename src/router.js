import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Create from './views/Create.vue';
import List from './views/List.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/create',
            name: 'create',
            component: Create
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/edit/:id',
            name: 'edit'
        }
    ],
});
