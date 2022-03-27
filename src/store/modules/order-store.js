import { orderService } from "../../services/order-service.js"

export default {
    state: {
        orders: [],
    },
    getters: {
        // stays(state) {
        //     return state.stays;

        // },
    },
    mutations: {
        // setStay(state, { stays }) {
        //     state.stays = stays
        //     console.log(state.stays)
        // },

    },

    actions: {

        async addNewOrder({ commit, dispatch }, { orderDetails }) {
            try {
                console.log(orderDetails)
                const newOrder = await orderService.add(orderDetails)
                console.log('orderadded')
            } catch {
                console.log(error)
            }
        }

        // try {
        //     commit({ type: 'setFilter', filterBy })
        //     dispatch({ type: 'loadStays' })
        // } catch {
        //     console.error(err)
        // }


    }
}