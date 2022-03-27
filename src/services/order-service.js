import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'



const ORDERS_KEY = 'ordersDB'


export const orderService = {
    add,
    query,
    remove,
    getById
}


async function query(filterBy) {
    const stays = await storageService.query(ORDERS_KEY)
    if (!filterBy) return stays
    const filteredStays = _filterStays(stays, JSON.parse(JSON.stringify(filterBy)))
    return Promise.resolve(filteredStays)
}

function _filterStays(stays, filterBy) {
    let filteredStays = stays
    if (filterBy.country) {
        const regex = new RegExp(filterBy.country, 'i')
        filteredStays = filteredStays.filter(stay => regex.test(stay.address.country || stay.address.city))
    }

    if (filterBy.type) {
        filteredStays = filteredStays.filter((stay) => {
            return filterBy.type.some((label) => {
                return label === stay.roomType
            })
        })
    }
    filteredStays = filteredStays.filter((stay) => {
        // console.log(filterBy);
        return (stay.price > filterBy.price.minPrice && stay.price < filterBy.price.maxPrice)
    })


    return filteredStays
}

function getById(entityId) {
    return query().then((entities) =>
        entities.find((entity) => entity.id === entityId)
    )
}

function remove(stayId) {

    return storageService.delete(ORDERS_KEY, stayId)

}
async function add(orderDetails) {

    if (orderDetails._id) {
        const updatedOrder = await storageService.put(ORDERS_KEY, orderDetails)
        return updatedOrder

    } else {
        const addedOrder = await storageService.post(ORDERS_KEY, orderDetails)

        return addedOrder
    }

}

function _createStay() {
    // let stays = utilService.loadFromStorage(STAYS_KEY);
    // if (!stays || !stays.length) {
    //     stays = [];
    //     stays.map((stay) => {
    //         stays.push(stay);
    //     });
    utilService.saveToStorage(STAYS_KEY, stays);
    // } 
    return stays;
}