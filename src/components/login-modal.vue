<template>
  <section class="login-modal">
    <h1 class="flex space-between">
      login or signup
      <button class="close-login" @click="closeModal">
        X
      </button>
    </h1>
    <div class="log-container flex-col">
      <div>
        <span> username :</span>
        <input
          v-model="user.username"
          type="text"
          placeholder="enter your username"
        />
      </div>
      <div>
        <span> password :</span>
        <input
          v-model="user.password"
          type="password"
          placeholder="enter your username"
        />
      </div>
      <button
        ref="myRefs"
        class="btn-login"
        @click="setLogin"
        @mousemove="calcMouse"
        :style="mousePos"
      >
        Login
      </button>
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      user: {
        username: "",
        password: "",
      },
      msg: "",
    };
  },
  created() {},
  methods: {
    setLogin() {
      if (!this.user.username || !this.user.password) {
        this.msg = "Please enter username/password";
        return;
      }
      this.$emit(
        "login",
        JSON.parse(JSON.stringify(this.user))
      );
      this.user.username = "";
      this.user.password = "";
    },
    closeModal() {
      this.$emit("closeLoginModal");
    },
    calcMouse(e) {
      console.log(e);
      const div = this.$refs.myRefs;
      console.log("x", this.x);
      console.log("y", this.y);
      console.log("div", div.offsetLeft);
      this.x = e.clientX - div.offsetLeft;
      this.y = e.pageY - div.offsetTop;
    },
  },
  computed: {
    mousePos() {
      return {
        "background-position": `calc((100 - (${this.x}))*1%) calc((100 - (${this.y}))*1%)`,
      };
    },
  },
};
</script>

<style></style>
