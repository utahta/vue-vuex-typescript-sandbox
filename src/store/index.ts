import Vue from 'vue'
import Vuex from 'vuex'
import {app} from './modules/app'
import {jiro} from './modules/jiro'
import {counter} from './modules/counter'

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        jiro,
        counter
    },
    strict: debug
})
