/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
//form validation
import Form from 'vform'
import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
  } from 'vform/src/components/bootstrap5'
window.Form = Form;

Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)

//sweetalert
import Swal from 'sweetalert2';

window.Swal = Swal;
//routes
import { routes } from './routes/route';
const router = new VueRouter({
    // mode: 'history',
    routes
});

//vuex
import Vuex from 'vuex'

window.Vuex = Vuex;
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categoryData: []
  },
  getters: {
    test: state => {

      return state.categoryData;
    }
  },
  actions:{
    categoryData(data){
        axios.get('/index-category').then(success=>{
            console.log(success.data.categories);
            data.commit('categoryData', success.data.categories);
        }).catch(error=>{
            console.log(error);
        });
    }
  },
  mutations: {
    categoryData(state, data){
        return state.categoryData = data;
    }
  }
});

Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('home', require('./components/backend/Home.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#content',
    router,
    store
});
