import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: [],
        filterBy: {
            country: '',
            guests: {
                adults: 0,
                kids: 0,
                Infants: 0,
            },
            stayTime: '',
            type: [],
            price: {
                minPrice: 30,
                maxPrice: 500
            },
        },
    },
    getters: {
        stays(state) {
            return state.stays;

        },
        filterBy(state) {
            return JSON.parse(JSON.stringify(state.filterBy))
        }



    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },

        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        ratedStays(state, { filterBy }) {
            state.filterBy.country = filterBy
        },

        uniqueStays(state, { filterBy }) {
            state.filterBy.country = filterBy
        }
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
        async setFilter({ commit, dispatch }, { filterBy }) {
            try {
                commit({ type: 'setFilter', filterBy })
                dispatch({ type: 'loadStays' })
            } catch {
                console.error(err)
            }

        }



    }
}