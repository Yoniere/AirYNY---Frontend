import { orderService } from "../../services/order-service.js"

export default {
    state: {
        orders: [],
    },
    getters: {
    },
    mutations: {
        setOrder(state, { newOrder }) {
            state.orders.unshift(newOrder)
        },

    },

    actions: {
        async addNewOrder({ commit }, { orderToSave }) {
            try {
                const newOrder = await orderService.add(orderToSave)
                commit({ type: 'setOrder', newOrder })
                return newOrder
            } catch {
                console.log(error)
            }
        }
    }
}