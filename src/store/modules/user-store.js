import { userService } from "../../services/user-service.js";
import { stayService } from "../../services/stay-service.js";

import {
  socketService,
  SOCKET_EMIT_USER_WATCH,
  SOCKET_EVENT_USER_UPDATED,
} from "../../services/socket.service.js";

// var localLoggedinUser = null;
// if (sessionStorage.user)
//   localLoggedinUser = JSON.parse(sessionStorage.user || null);
export default {
  state: {
    loggedinUser: userService.getLoggedinUser(),
    watchedUser: null
  },
  getters: {
    user(state) {
      return JSON.parse(JSON.stringify(state.loggedinUser));
    },
    userStays(state) {
      return JSON.parse(JSON.stringify(state.loggedinUser.stays));
    },
  },
  mutations: {
    setLoggedinUser(state, { user }) {
      state.loggedinUser = (user)? {...user} : null;
  },
  setWatchedUser(state, { user }) {
    state.watchedUser = user;
},  
    saveUser(state, { user }) {
      state.loggedinUser = user;
    },
    setStaysUser(state, { stays }) {
      state.loggedinUser.stays = stays;
    },
    setOrderUser(state, { orders }) {
      state.loggedinUser.orders = orders;
    },
    // setLikedStay(state, { stayId }) {
    //   console.log(state.user);
    //   if (state.user.likedStays.includes(stayId)) {
    //     const idx = state.user.likedStays.findIndex((id) => id === stayId);
    //     state.user.likedStays.splice(idx, 1);
    //   } else state.user.likedStays.push(stayId);
    // },
    
  },
  actions: {
    async login({ commit, dispatch }, { userCred }) {
      try {
          const user = await userService.login(userCred);
          commit({ type: 'setLoggedinUser', user })
          dispatch({type: 'loadStaysUser'});
          return user;
      } catch (err) {
          console.log('userStore: Error in login', err)
          throw err
      }
  },
  async signup({ commit }, { userCred }) {
      try {
          const user = await userService.signup(userCred)
          commit({ type: 'setLoggedinUser', user })
          return user;
      } catch (err) {
          console.log('userStore: Error in signup', err)
          throw err
      }

  },
  async logout({ commit }) {
      try {
          await userService.logout()
          commit({ type: 'setLoggedinUser', user: null })
      } catch (err) {
          console.log('userStore: Error in logout', err)
          throw err
      }
  },
    async loadStaysUser({ commit, state }) {
      try {
        const stays = await userService.getUserStays(state.loggedinUser.id);
        const orders = await userService.getUserOrder();
        commit({ type: "setStaysUser", stays });
        commit({ type: "setOrderUser", orders });
      } catch (err) {
        console.error("Cannot Load stays", err);
        throw err;
      }
    },




    // saveUser(context, payload) {
    //   return userService
    //     .saveUser(payload.user)
    //     .then(() => {
    //       context.commit(payload);
    //     })
    //     .catch((err) => {
    //       console.error("Cannot change user", err);
    //       throw err;
    //     });
    // },
  
 
    // async loadStaysLikedUser({ commit }, { likedStays }) {
    //   try {
    //       // const stays = await userService.getUserLikedStays(likedStays);
    //       console.log(state.user);

    //       // stays.forEach(stay => stay.isLiked= true)
    //     return stays
    //     // commit({ type: 'setOrderUser', orders })
    //   } catch (err) {
    //     console.error("Cannot Load stays", err);
    //     throw err;
    //   }
    // },
    // async setLikedStay({ commit, state }, { stayId }) {
    //   commit({ type: "setLikedStay", stayId });
    //   try {
    //     await userService.saveUser(state.user);
    //       } catch (err) {
    //     console.error("Cannot Load stays", err);
    //     throw err;
    //   }
    // },
  //   async loadAndWatchUser({ commit }, { userId }) {
  //     try {
  //         const user = await userService.getById(userId);
  //         commit({ type: 'setWatchedUser', user })
  //         // socketService.emit(SOCKET_EMIT_USER_WATCH, userId) 
  //         socketService.off(SOCKET_EVENT_USER_UPDATED)
  //         socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
  //             commit({ type: 'setWatchedUser', user })
  //         })
  //     } catch (err) {
  //         console.log('userStore: Error in loadAndWatchUser', err)
  //         throw err
  //     }
  // },
   
  },
};

