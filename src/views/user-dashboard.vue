<template>
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
       <table  style="overflow-x: auto;">
     <tr>
         <th></th>
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
                <img class="img" :src="order.ImgUrl" />
              </q-avatar>
           </div>
        </td>
           <td> {{order.guestName}}</td>
           <td class="stay-name-details"> {{order.name}}</td>
           <td> {{formattedTime(order.stayTime[0])}} - {{formattedTime(order.stayTime[1])}}</td> 
           <td> {{order.status}}</td>
           <td> {{order.pricePerNight}} $ </td>
           <td v-if="order.status !== 'Pending'"> 
               <button class="btn clikable" @click="changeOrderStatusBack(order)"
               :style="{color: (order.status ==='Decline' ) ? 'red': 'green'}"> {{order.status}} </button> </td>
           <td  v-else class="flex-row"> 
               <button @click="changeOrderStatus(order,'Approve')" class="btn clikable"> Approve </button>
               <button @click="changeOrderStatus(order,'Decline')" class="btn clikable"> Decline </button>
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
           <td class="stay-name-details"> {{stay.name}}</td>
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
import {orderService} from '../services/order-service.js'
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

    },
    changeOrderStatus(order,val){
        order.status = val
        orderService.add(order)
    },
    changeOrderStatusBack(order){
        if(order.status === 'Approve')  order.status= 'Decline'
        else order.status = 'Approve'
        orderService.add(order)
    }


},
computed:{  
},
components:{
    appHeader

}
   
}
</script>

<style>
</style>
