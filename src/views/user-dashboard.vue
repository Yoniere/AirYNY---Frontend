<template>
<app-header  class=" user-details"/>
<section class="main-layout2">
<div class="my-details flex-col">
    <router-link to="/"> <img src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/home48-icon.svg"/>
     My Stays</router-link>
    <router-link to="/"> My Order</router-link>
    </div>
   {{user}}
</section>

</template>

<script>
import appHeader from '../components/app-header.vue'
export default {
    data(){
        return{
            user:null,

        }
    },
async created(){
    //  const id = this.$route.params.id;
    const user = await this.$store.getters.user
    this.user = user;

},
components:{
    appHeader

}
   
}
</script>

<style>
</style>
