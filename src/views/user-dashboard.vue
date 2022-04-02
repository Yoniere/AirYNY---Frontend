<template>
<app-header  class="user-details"/>
<section class="main-layout2 my-details-section">
<div class="my-details flex-col">
    <button class="flex align-center" @click="toggle(false)"> 
    <img src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/home48-icon.svg"/>
     My Assets</button>
    <button @click="toggle(true)" class="flex align-center"><img src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/freecancellation26-icon.png"/> 
    Received Orders
    </button>
    </div>
    <div class="user-order" v-if="renderOrder">
       <table  style="overflow-x: auto;">
     <tr>
         <th></th>
         <th>Guest</th>
         <th>Asset</th>
         <th>check in - check out </th>
         <th>Status </th>
         <th>Revenue </th>
         <th>Actions </th>
    </tr>
        <tr  v-for="order in user.orders" :key="order._id">
         <td class="stay-name-details flex align-center"> 
             <div class="review-img q-pa-md q-gutter-sm">
              <q-avatar>
                <img class="img" :src="order.ImgUrl" />
              </q-avatar>
           </div>
        </td>
           <td class="stay-name-details"> {{order.guestName}}</td>
           <td class="stay-name-details"> {{order.name}}</td>
           <td> {{formattedTime(order.stayTime[0])}} - {{formattedTime(order.stayTime[1])}}</td> 
           <td> {{order.status}}</td>
           <td>  $ {{order.pricePerNight}} </td>        
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
import {socketService} from '../services/socket.service.js'
export default {
    data(){
        return{
            user:{},
            renderOrder:false,

        }
    },
async created(){
    this.$store.dispatch({ type: "loadStaysUser" });
    const user = await this.$store.getters.user
    this.user = user;
    socketService.on('host topic', user.id);
    socketService.on("order recived", this.addOrder)
},
methods:{
    toggle(val){
        this.renderOrder= val

    },
      formattedTime(time){
         return time.slice(0,10)

    },
    changeOrderStatus(order,val){
        order.status = val
        orderService.add(order)
        const msg = val
        socketService.emit('order-status-change', msg);
    },
    changeOrderStatusBack(order){
        if(order.status === 'Approve')  order.status= 'Decline'
        else order.status = 'Approve'
        orderService.add(order)
    },
    addOrder(order){
        this.user.orders.unshift(order)

    }


},
computed:{  
},
unmounted(){
    socketService.off("order recived", this.addMsg);
       socketService.off('host topic', user.id);

},
components:{
    appHeader

}
   
}
</script>

<style>
</style>
