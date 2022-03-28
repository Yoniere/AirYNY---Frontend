<template>
<!-- <app-header  class="header-details"/> -->
<app-header  class="user-details"/>
<section class="main-layout2">
<div class="my-details flex-col">
    <button class="flex align-center" @click="toggle"> 
    <img src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/home48-icon.svg"/>
     My Stays</button>
    <button @click="toggle" class="flex align-center"><img src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/freecancellation26-icon.png"/> 
    My Order
    </button>
    </div>
    <div class="user-order" v-if="renderOrder">
       <table>
     <tr>
         <th>Guest name</th>
         <th>stay name</th>
         <th>check in - check out </th>
         <th>Status </th>
         <th>Revenue </th>
         <th>Actions </th>
    </tr>
        <tr  v-for="order in user.orders" :key="order._id">
         <td> 
             <div class="review-img q-pa-md q-gutter-sm">
              <q-avatar>
                <img class="img" :src="getImage" />
              </q-avatar>
           </div>
        </td>
           <td> {{order.name}}</td>
            <!-- <td> {{order.stayTime[0].slice(0.5)}} - {{order.stayTime[1].slice(0.5)}}</td>  -->
           <td> {{formattedTime(order.stayTime[0])}} - {{formattedTime(order.stayTime[1])}}</td> 
           <td> {{order.status}}</td>
           <td> {{order.pricePerNight}} $ </td>
           <td class="flex-row"> 
               <button class="btn clikable"> Approve </button>
               <button class="btn clikable"> Decline </button>
           </td>
        </tr>
    </table>
       </div>
   <div class="user-stays" v-if="!renderOrder">
        <table>
     <tr>
         <th></th>
         <th>Name</th>
         <th>Price per night</th>
         <th>Address </th>
         <th>Actions </th>
    </tr>
        <tr  v-for="stay in user.stays" :key="stay">
            <td> 
     <div class="review-img q-pa-md q-gutter-sm">
            <q-avatar>
             <img class="img" :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[0]}`"/>
            </q-avatar>
        </div>
            </td>
           <td> {{stay.name}}</td>
           <td> {{stay.price}}</td>
           <td> {{stay.address.country}},
               {{stay.address.city}}
           </td>
           <td> edit</td>
        </tr>
    </table>


      
       </div>
</section>

</template>

<script>
import appHeader from '../components/app-header.vue'
import {utilService} from '../services/util-service.js'
export default {
    data(){
        return{
            user:{},
            renderOrder:false,

        }
    },
async created(){
    const user = await this.$store.getters.user
    this.user = user;



},
methods:{
    toggle(){
        this.renderOrder= !this.renderOrder

    },
      formattedTime(time){
        return time.slice(0,10)

    }


},
computed:{
    getImage() {
      const key= utilService.getRandomInt(0, 50)
      return `https://i.pravatar.cc/150?img=${key}`
    },
  
},
components:{
    appHeader

}
   
}
</script>

<style>
</style>
