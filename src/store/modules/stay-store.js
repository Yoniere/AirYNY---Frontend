import { stayService } from '../../services/stay-service.js'

export default {
    state: {
        stays: []

    },
    getters: {
        stays( state ) {
            console.log( state.stays);
            return state.stays
        },
        stayToShow({ stay, filterBy }) {
            const copyStay = JSON.parse(JSON.stringify(stay))
            return copyStay
        },

    },
    mutations: {
        setStay(state, { stays }) {
            state.stays = stays
        },



    },
    actions: {
        async loadStays({ commit, state }) {
          const stays = await  stayService.query(state.filterBy)
          try{
            commit({ type: 'setStay', stays })
        } catch(err){
            console.error('Cannot Load stays', err)
            throw err
           
            }
        },

    },
}
