require('./bootstrap');
import Vue from '~@vue';
window.Vue = require('vue');
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
const app = new Vue({
    el: '#app',
    router: router,
    data() {
        return {
            mounted: function(){
                alert('hi');
            }
        }
    },
    render: h => h(App),
});