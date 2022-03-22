import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: []

    },
    getters: {
        stays({ stays }) {
            return stays
        },
        stayToShow({ stay, filterBy }) {
            const copyStay = JSON.parse(JSON.stringify(stay))
            return copyStay
        },

    },
    mutations: {
        setStay(state, { stay }) {
            state.stay = stay
        },



    },
    actions: {
        loadStays({ commit, state }) {
            stayService.query(state.filterBy).then((stay) => {
                commit({ type: 'setStay', stay })
            })
        },

    },
}
