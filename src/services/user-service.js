import { storageService } from "./async-storage-service.js";
import { stayService } from "./stay-service.js";
import { orderService } from "./order-service.js";
import { httpService } from "./http.service.js";
import { utilService } from "./util-service.js";

const STORAGE_KEY = "userDB";
const ENDPOINT = "auth";

export const userService = {
  getLoggedinUser,
  saveUser,
  getUserStays,
  getUserOrder,
  getUserLikedStays,
  login,
  signup,
  logout,
};

 async function getUserStays(entityId) {
  let userStays =[]
  const stays = await stayService.query();
   try{
   userStays =  stays.filter(stay => stay.host.id === entityId )
  return userStays
  }catch{
    console.log('baiaaa');
    
  }
}

async function getUserLikedStays(likedStays) {
  return await Promise.all(
    likedStays.map((likedStay) => {
      return stayService.getById(likedStay);
    })
  );
}
async function getUserOrder() {
  try {
    const orders = await orderService.query();
    return orders;
  } catch {
    console.error("cannot get user order");
  }
}
// async function getUserOrdar(entityId){
//     const orders =[]
//        await orderService.query().then((entities) =>
//           entities.find((entity) => {
//             if(entity.stay_id === entityId) stays.push(entity)
//           }))
//       return orders
// }

async function login(userInfo) {
  try {
    const loggedInUser = await httpService.post(`${ENDPOINT}/login`, userInfo);
    utilService.saveToSessionStorage(STORAGE_KEY, loggedInUser);
    return loggedInUser;
  } catch {
    console.log("cant login");
  }
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
}

async function saveUser(user) {
  user = await httpService.put(`user/${user._id}`, user);
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) _saveLocalUser(user);
  return user;
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user
}

async function logout() {
  try {
    const loggedOutUser = await httpService.post(`${ENDPOINT}/logout`);
    utilService.removeFromSessionStorage(STORAGE_KEY);
    return loggedOutUser;
  } catch {
    console.log("logout failed");
  }
}
// signup()
async function signup(userDetails) {
  try {
    return await httpService.post(`${ENDPOINT}/signup`, userDetails);
    // return signUser.data
  } catch {
    console.log("cant login");
  }
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
