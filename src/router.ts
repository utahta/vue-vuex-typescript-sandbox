import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from './components/Counter'
import Jiro from './components/Jiro'

Vue.use(VueRouter);

const routes = [
    { path: '/counter', component: Counter },
    { path: '/jiro', component: Jiro }
];

export default new VueRouter({
    routes
})
