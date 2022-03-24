import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: [],
        filterBy: { country: '' },
    },
    getters: {
        stays(state) {
            var filterdStays = state.stays;
            console.log(state)
            if (state.filterBy.country.length)
                return filterdStays.filter((stay) =>
                    new RegExp(state.filterBy.country, 'i').test(stay.address.country)
                );
            return filterdStays;
        },



    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },

        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
            console.log('state.filterBy', state.filterBy);
        },
        ratedStays(state, { filterBy }) {

            state.filterBy.country = filterBy
        }


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
