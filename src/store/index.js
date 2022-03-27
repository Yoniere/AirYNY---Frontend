import { createStore } from 'vuex'
import stayStore from './modules/stay-store'
import orderStore from './modules/order-store'


const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stayStore,
        orderStore

    },
})

export default store