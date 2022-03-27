import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: [],
        filterBy: { country: '' ,
        price: {
            minPrice:30,
            maxPrice:2000
        
        },
        guests:{
            adults:0,
            kids:0,
            Infants:0,
        },
        stayTime:'',
        type:[]
     },

    },
    getters: {
        stays(state) {
            return state.stays;

        },
        filterBy(state){
            return state.filterBy
        }



    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },

        setFilter(state, { filterBy }) {
            if(filterBy.country) state.filterBy.country = filterBy.country
            if(filterBy.price) state.filterBy.price = filterBy.price
            if(filterBy.type) state.filterBy.type = filterBy.type 
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
        setFilter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        },
 


    },
}
