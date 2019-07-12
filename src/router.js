import Vue from 'vue';
import Home from './components/Home.vue';
import Test from './components/Test.vue';

import Router from 'vue-router'
Vue.use(Router);



export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },

    ]
});