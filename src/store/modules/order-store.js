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
        setOrder(state, { newOrder }) {
            state.orders.push(newOrder)
            console.log(state.orders)
        },

    },

    actions: {

        async addNewOrder({ commit }, { orderDetails }) {
            try {
                console.log(orderDetails)
                const newOrder = await orderService.add(orderDetails)
                console.log('orderadded')
                commit({ type: 'setOrder', newOrder })
                return newOrder
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