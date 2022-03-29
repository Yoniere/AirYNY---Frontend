import { userService } from "../../services/user-service.js"

import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../../services/socket.service.js'


var localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user || null);
export default {
    state: {
        user: userService.getLoggedinUser(),
    },
    getters: {
        user(state){
            return  JSON.parse(JSON.stringify(state.user))
        },
        userStays(state){
            return  JSON.parse(JSON.stringify(state.user.stays))
        }
    },
    mutations: {
        saveUser(state, {user}){
          state.user = user
       },
       setStaysUser(state, {stays}){
          state.user.stays = stays
       },
       setLikedStay(state, {stayId}){
           if(state.user.likedStays.includes(stayId)) {
              const idx =state.user.likedStays.findIndex(id => id=== stayId )
              state.user.likedStays.splice( idx , 1)
              
           }
           else state.user.likedStays.push(stayId)
       },
       setOrderUser(state, {orders}){
          state.user.orders = orders
       }
            

     
    },
    actions:{
         saveUser(context,  payload ) {
            return userService.saveUser(payload.user)
            .then(()=>{
                context.commit(payload)
            })
                .catch(err => {
                    console.error('Cannot change user', err)
                    throw err
                })
        },
        async loadStaysUser({ commit, state }) {
            const stays = await userService.getUserStays(state.user.id)
            const orders = await userService.getUserOrdar()
            try {
                commit({ type: 'setStaysUser', stays })
                commit({ type: 'setOrderUser', orders })
            } catch (err) {
                console.error('Cannot Load stays', err)
                throw err
            }
        },
        async setLikedStay({commit, state},{stayId} ){
            commit({ type: 'setLikedStay', stayId })
            try{
               await userService.saveUser(state.user)
            } catch (err) {
            console.error('Cannot Load stays', err)
            throw err
        }
        }

    }
}


// // 
// // 
// //  

// export default {
//     state: {
//     
//     },
//     getters: {
//         users({ users }) { return users },
//         loggedinUser({ loggedinUser }) { return loggedinUser },
//         watchedUser({ watchedUser }) { return watchedUser }
//     },
//     mutations: {
//         setLoggedinUser(state, { user }) {
//             state.loggedinUser = (user)? {...user} : null;
//         },
//         setWatchedUser(state, { user }) {
//             state.watchedUser = user;
//         },       
//         setUsers(state, { users }) {
//             state.users = users;
//         },
//         removeUser(state, { userId }) {
//             state.users = state.users.filter(user => user._id !== userId)
//         },
//         setUserScore(state, { score }) {
//             state.loggedinUser.score = score
//         },
//     },
//     actions: {
//         async login({ commit }, { userCred }) {
//             try {
//                 const user = await userService.login(userCred);
//                 commit({ type: 'setLoggedinUser', user })
//                 return user;
//             } catch (err) {
//                 console.log('userStore: Error in login', err)
//                 throw err
//             }
//         },
//         async signup({ commit }, { userCred }) {
//             try {
//                 const user = await userService.signup(userCred)
//                 commit({ type: 'setLoggedinUser', user })
//                 return user;
//             } catch (err) {
//                 console.log('userStore: Error in signup', err)
//                 throw err
//             }

//         },
//         async logout({ commit }) {
//             try {
//                 await userService.logout()
//                 commit({ type: 'setLoggedinUser', user: null })
//             } catch (err) {
//                 console.log('userStore: Error in logout', err)
//                 throw err
//             }
//         },
//         async loadUsers({ commit }) {
//             // TODO: loading
//             try {
//                 const users = await userService.getUsers();
//                 commit({ type: 'setUsers', users })
//             } catch (err) {
//                 console.log('userStore: Error in loadUsers', err)
//                 throw err
//             }
//         },        
//         async loadAndWatchUser({ commit }, { userId }) {
//             try {
//                 const user = await userService.getById(userId);
//                 commit({ type: 'setWatchedUser', user })
//                 // socketService.emit(SOCKET_EMIT_USER_WATCH, userId) 
//                 socketService.off(SOCKET_EVENT_USER_UPDATED)
//                 socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
//                     commit({ type: 'setWatchedUser', user })
//                 })
//             } catch (err) {
//                 console.log('userStore: Error in loadAndWatchUser', err)
//                 throw err
//             }
//         },
//         async removeUser({ commit }, { userId }) {
//             try {
//                 await userService.remove(userId);
//                 commit({ type: 'removeUser', userId })
//             } catch (err) {
//                 console.log('userStore: Error in removeUser', err)
//                 throw err
//             }
//         },
//         async updateUser({ commit }, { user }) {
//             try {
//                 user = await userService.update(user);
//                 commit({ type: 'setUser', user })
//             } catch (err) {
//                 console.log('userStore: Error in updateUser', err)
//                 throw err
//             }

//         },
//         async increaseScore({ commit }) {
//             try {
//                 const score = await userService.changeScore(100)
//                 commit({ type: 'setUserScore', score })
//             } catch (err) {
//                 console.log('userStore: Error in increaseScore', err)
//                 throw err
//             }
//         }
//     }
// }