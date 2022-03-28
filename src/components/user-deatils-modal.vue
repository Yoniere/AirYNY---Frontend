<template>
<section class="user-modal flex-col">
   <router-link to="/Messages"> Messages</router-link>
   <router-link to="/Trips"> Trips</router-link>
   <router-link to="/wish-list"> Wish List</router-link>
   <router-link to="/dashboard"> Dashboard</router-link>
   <router-link to="/Account"> Account</router-link>
   <router-link to="/Logout"> Logout</router-link>
   <router-link to="/About"> About</router-link>
    </section>
  
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
          this.$store.dispatch({ type: 'loadStaysUser' })
    },
    

}
</script>

<style>

</style>