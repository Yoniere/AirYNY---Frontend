<template>
<section>
  <section v-if="userLogged" class="user-modal flex-col">
    <router-link to="/"> Messages</router-link>
    <router-link to="/"> Trips</router-link>
    <router-link to="/wishList"> Wish List</router-link>
    <router-link to="/dashboard"> Dashboard</router-link>
    <router-link to="/"> Account</router-link>
    <router-link to="/Logout"> Logout</router-link>
    <router-link to="/"> About</router-link>
  </section>
  <section v-else class="user-modal flex-col">
    <router-link to="/"> Messages</router-link>
    <span @click="openModalLogin"> Login</span>
    <span> Logout</span>
  </section>
 
  </section>
</template>

<script>
import { userService } from "../services/user-service.js";

export default {
  data() {
    return {
      userLogged: false,
    };
  },
  async created() {
    const loggedInUser = await userService.getLoggedinUser();
    console.log(loggedInUser);
    // if (!loggedInUser) this.userLogged = false;
    // else {
    //   this.userLogged = true;
    //   this.$store.dispatch({ type: "loadStaysUser" });
    // }
  },
  methods:{
      openModalLogin(){
         this.$emit('openModalLogin')
      },
  },
  components:{
  }
};
</script>

<style></style>
