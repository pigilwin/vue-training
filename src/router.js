import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Create from './views/Create.vue';
import List from './views/List.vue';
import View from './views/View.vue';
import Edit from './views/Edit.vue';

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
            path: '/people',
            name: 'list',
            component: List,
            children: [
                {
                    path: ':id',
                    name: 'view',
                    component: View
                }
            ]
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        }
    ],
});
