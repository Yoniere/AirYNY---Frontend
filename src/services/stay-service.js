// import { storageService } from './async-storage-service.js'
// import { utilService } from './util-service.js'
import { httpService } from './http.service.js'





const ENDPOINT = 'stay'
const STAYS_KEY = 'staysDB'
// _createStay()


export const stayService = {
    // add,
    query,
    // remove,
    getById
}


// async function query(filterBy) {
//     const stays = await storageService.query(STAYS_KEY)
//     if (!filterBy) return Promise.resolve(stays)
//     const filteredStays = _filterStays(stays, JSON.parse(JSON.stringify(filterBy)))
//     return Promise.resolve(filteredStays)
// }

async function query(filterBy) {
    try {
        return await httpService.get(ENDPOINT, filterBy)
    } catch {
        console.error('cannot load stays')
    }
}


function _filterStays(stays, filterBy) {
    let filteredStays = stays
    if (filterBy.country) {

        const regex = new RegExp(filterBy.country, 'i')
        filteredStays = filteredStays.filter(stay => regex.test(stay.address.country || stay.address.city))
    }

    if (filterBy.type.length) {
        filteredStays = filteredStays.filter((stay) => {
            return filterBy.type.some((label) => {
                return label === stay.roomType
            })
        })
    }
    if (filterBy.price) {
        filteredStays = filteredStays.filter((stay) => {
            return stay.price > filterBy.price.minPrice && stay.price < filterBy.price.maxPrice
        })
    }

    return filteredStays
}

// function getById(entityId) {
//     return query().then((entities) =>
//         entities.find((entity) => entity.id === entityId)
//     )
// }

async function getById(entityId) {
    try {
        return await httpService.get(`${ENDPOINT}/${entityId}`)
    } catch {
        console.error('cannot load stay')
    }
}
