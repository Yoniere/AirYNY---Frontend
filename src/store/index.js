import { createStore } from 'vuex'
import stayStore from './modules/stay-store'


const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stayStore,

    },
})

export default store
