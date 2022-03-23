import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: [],
        filterBy: { country: '' },
    },
    getters: {
        stays(state) {
            return state.stays
        },
        stayToShow({ stay, filterBy }) {
            const copyStay = JSON.parse(JSON.stringify(stay))
            return copyStay
        },

        ratedStays(state) {
            return state.filterBy
        }

    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },

        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },

    },
    actions: {
        async loadStays({ commit, state }) {
            const stays = await stayService.query(state.filterBy)

            try {
                commit({ type: 'setStay', stays })
            } catch (err) {
                console.error('Cannot Load stays', err)
                throw err

            }
        },
        setFilter({ commit, dispatch }, { filterBy }) {
            console.log('filterBy', filterBy);
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        },

    },
}
