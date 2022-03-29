
import {storageService} from './async-storage-service.js'
import { stayService } from './stay-service.js';
import { orderService } from './order-service.js';


const STORAGE_KEY = 'userDB';
export const userService = {
    getLoggedinUser,
    saveUser,
    getUserStays,
    getUserOrdar
    }

login()

// function getUserStays(entityId){
//         return stayService.query().then((entities) =>
//           entities.find((entity) => entity.host.id === entityId)
//         )
// }

async function getUserStays(entityId){
    const stays =[]
       await stayService.query().then((entities) =>
          entities.find((entity) => {
            if(entity.host.id === entityId) stays.push(entity)
          }))
      return stays
}
async function getUserOrdar(){
    const orders = await orderService.query()
      return orders
}
// async function getUserOrdar(entityId){
//     const orders =[]
//        await orderService.query().then((entities) =>
//           entities.find((entity) => {
//             if(entity.stay_id === entityId) stays.push(entity)
//           }))
//       return orders
// }


function login() {
    const logUser = getLoggedinUser()
    if(logUser){
        return logUser
    }else{
    
        const user = {fullName: 'yona ', id:'35858044' , password:'yona',
        likedStays:[]
        } 
        storageService.store(STORAGE_KEY, user)  
    }
    
  
}


function getLoggedinUser() {
    return storageService.load(STORAGE_KEY)
}

function saveUser(user) {
    const userToSave = JSON.parse(JSON.stringify(user))
    storageService.store(STORAGE_KEY, userToSave)
    return  Promise.resolve(userToSave)
}

function setUserActivities(txt, todo) {
    var activity = {
      txt,
      todo,
      at: Date.now(),
    }
   const loggedUser= getLoggedinUser()
   loggedUser.activities.unshift(activity)
    storageService.store(STORAGE_KEY, loggedUser)
  }





























// import { httpService } from './http.service'
// const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
// var gWatchedUser = null;

// export const userService = {
//     login,
//     logout,
//     signup,
//      getLoggedinUser,
//     getUsers,
//     getById,
//     update,
// }

// // Debug technique
// window.userService = userService


// function getUsers() {
//     return httpService.get(`user`)
// }

// async function getById(userId) {
//     const user = await httpService.get(`user/${userId}`)
//     gWatchedUser = user;
//     return user;
// }


// async function update(user) {
//     user = await httpService.put(`user/${user._id}`, user)
//     // Handle case in which admin updates other user's details
//     if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
//     return user;
// }

// async function login(userCred) {
//     const user = await httpService.post('auth/login', userCred)
//     if (user) return _saveLocalUser(user)
// }
// async function signup(userCred) {
//     const user = await httpService.post('auth/signup', userCred)
//     return _saveLocalUser(user)
// }
// async function logout() {
//     sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
//     return await httpService.post('auth/logout')
// }


// function _saveLocalUser(user) {
//     sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
//     return user
// }

//  function getLoggedinUser() {
//      return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
//  }



// // This IIFE functions for Dev purposes 
// // It allows testing of real time updates (such as sockets) by listening to storage events
// // (async () => {
// //     var user = getLoggedinUser()
// //     // Dev Helper: Listens to when localStorage changes in OTHER browser

// //     // Here we are listening to changes for the watched user (comming from other browsers)
// //     window.addEventListener('storage', async () => {
// //         if (!gWatchedUser) return;
// //         const freshUsers = await storageService.query('user')
// //         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
// //         if (!watchedUser) return;
// //         if (gWatchedUser.score !== watchedUser.score) {
// //             console.log('Watched user score changed - localStorage updated from another browser')
// //             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
// //         }
// //         gWatchedUser = watchedUser
// //     })
// // })();

// //  This is relevant when backend is connected
// //  (async () => {
// //     var user = getLoggedinUser()
// //      if (user) socketService.emit('set-user-socket', user._id)
// //  })();

