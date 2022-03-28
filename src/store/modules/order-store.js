import { orderService } from "../../services/order-service.js"

export default {
    state: {
        orders: [],
    },
    getters: {
        stays(state) {
            return state.orders;

        },
    },
    mutations: {
        setOrder(state, { newOrder }) {
            state.orders.push(newOrder)
        },

    },

    actions: {
        async addNewOrder({ commit }, { orderDetails }) {
            try {
                const newOrder = await orderService.add(orderDetails)
                console.log('orderadded')
                commit({ type: 'setOrder', newOrder })
                return newOrder
            } catch {
                console.log(error)
            }
        }
    }
}