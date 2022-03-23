import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: [],
        filterBy: { country: '' },
    },
    getters: {
        stays(state) {
            var filterdStays = state.stays;
             if (state.filterBy.country.length)
                 return filterdStays.filter((stay) =>
                     new RegExp(state.filterBy.country, 'i').test(stay.address.country)
                 );
             return filterdStays;
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
            const stays = await stayService.query()
            try {
                commit({ type: 'setStay', stays })
            } catch (err) {
                console.error('Cannot Load stays', err)
                throw err

            }
        },
        setFilter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
             dispatch({ type: 'loadStays' })
        },

    },
}
