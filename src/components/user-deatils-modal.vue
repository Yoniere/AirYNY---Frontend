<template>
    <section v-if="userLogged" class="user-modal flex-col">
      <router-link to="/"> Messages</router-link>
      <router-link to="/"> Trips</router-link>
      <router-link to="/wishList"> Wish List</router-link>

      <router-link to="/dashboard"> Dashboard</router-link>
      <router-link to="/"> Account</router-link>
      <span @click="doLogout">Logout</span>
      <router-link to="/"> About</router-link>
    </section>

    <section v-else class="user-modal flex-col">
      <router-link to="/"> Messages</router-link>
      <span @click="openModalLogin"> Login</span>
      <span> Logout</span>
    </section>
</template>

<script>
import { userService } from "../services/user-service.js";
import { Share } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      userLogged: false,
    };
  },
  async created() {
    const loggedInUser =
      await userService.getLoggedinUser();
    if (!loggedInUser) this.userLogged = false;
    else {
      this.userLogged = true;
    }
  },
  methods: {
    openModalLogin() {
      this.$emit("openModalLogin");
    },
    doLogout() {
      this.$emit("closeModalDetails");
      this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
  components: {},
};
</script>

<style></style>
