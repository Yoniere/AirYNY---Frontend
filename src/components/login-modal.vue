<template>
  <section class="login-modal">
    <h1 class="flex space-between">login / signup
    <button class="close-login" @click="closeModal"> X </button>
    </h1>
    <div class="flex-col">
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
      <button class="btn-login" @click="setLogin">Login</button>
      <p>{{ msg }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      msg: "",
    };
  },
  methods: {
    setLogin() {
        if(!this.user.username || !this.user.password){
           this.msg = "Please enter username/password"
        return;
        } 
      this.$emit("login", JSON.parse(JSON.stringify(this.user)) );
      this.user.username=''
      this.user.password=''
    },
    closeModal(){
      this.$emit('closeLoginModal')
    }
  },
};
</script>

<style></style>
