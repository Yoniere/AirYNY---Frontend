<template>
  <app-header class="user-details" />
  <section class="main-layout2 my-details-section" v-if="user">
     <div class="my-details flex-col">
      <button class="flex align-center" @click="toggle(false)">
        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/home48-icon.svg"
        />
        My Assets
      </button>
      <button @click="toggle(true)" class="flex align-center">
        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648118112/airyny/freecancellation26-icon.png"
        />
        Received Orders
      </button>
    </div>
    <div class="flex-row user-prof">
      <div class="flex-col align-center">
    <div class="user-rate"> 
      <span> Total Rate </span>
      <div
            class="flex card-rate"
            :style="getZeroMargin"
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                height: 14px;
                width: 14px;
                fill: #ff385c;
              "
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
           9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
            7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span> 4.7 avg </span>
            <span> 420 reviews </span>
          </div>
    </div>
    <div class="user-profit">
       <span>Total revenues </span>
        <div class="profit">
            <div class="flex-col">
            <span>Month </span>
             <span>$1,500 </span>
           </div>
          <div class="flex-col">
           <span>Year </span>
          <span>$30,330 </span>
         </div>
           <div class="flex-col">
           <span>Total </span>
           <span>$67,242</span>
          </div>
         </div>
      </div>
      </div>


      <div class="orders-div">
      <span>Orders</span>
        <chart />
            </div>
    </div>
     	

   
    <div class="user-order" v-if="renderOrder">
      <table style="overflow-x: auto">
        <tr>
          <th></th>
          <th class="stay-name-details">Guest</th>
          <th class="stay-name-details">Asset</th>
          <th class="stay-name-details">Order Date</th>
          <th>Check in - Check out</th>
          <th>Status</th>
          <th>Revenue</th>
          <th>Actions</th>
        </tr>
        <tr v-for="order in user.orders" :key="order._id">
          <td class="stay-name-details flex align-center">
            <div class="review-img q-pa-md q-gutter-sm">
              <q-avatar>
                <img class="img" :src="order.ImgUrl" />
              </q-avatar>
            </div>
          </td>
          <td class="stay-name-details">{{ order.guestName }}</td>
          <td class="stay-name-details">{{ order.name }}</td>
          <td class="stay-name-details">{{ order.created }}</td>
          <td>
            {{ formattedTime(order.stayTime[0]) }} -
            {{ formattedTime(order.stayTime[1]) }}
          </td>
          <td>{{ order.status }}</td>
          <td>$ {{  formatedPrice(order.total) }}</td>
          <td v-if="order.status !== 'Pending'">
            <button
              class="btn clikable"
              @click="changeOrderStatusBack(order)"
              :style="{ color: order.status === 'Decline' ? 'green' : 'red' }"
            >
              {{ order.status === "Decline" ? "Approve" : "Decline" }}
            </button>
          </td>
          <td v-else class="flex-row">
            <button
              @click="changeOrderStatus(order, 'Approve')"
              class="btn clikable"
            >
              Approve
            </button>
            <button
              @click="changeOrderStatus(order, 'Decline')"
              class="btn clikable"
            >
              Decline
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="user-stays" v-if="!renderOrder">
      <table>
        <tr>
          <th></th>
          <th class="stay-name-details">Name</th>
          <th>Price per night</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        <tr v-for="stay in user.stays" :key="stay">
          <td>
            <div class="review-img q-pa-md q-gutter-sm">
              <q-avatar>
                <img
                  class="img"
                  :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[0]}`"
                />
              </q-avatar>
            </div>
          </td>
          <td class="stay-name-details">{{ stay.name }}</td>
          <td>$ {{ stay.price }}</td>
          <td>
            {{ stay.address.country }},
            {{ stay.address.city }}
          </td>
          <td>edit</td>
        </tr>
      </table>
    </div>

  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import { utilService } from "../services/util-service.js";
import { orderService } from "../services/order-service.js";
import { socketService } from "../services/socket.service.js";
import chart from '../components/chart.vue'
export default {
  data() {
    return {
      user: null,
      renderOrder: false,
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadStaysUser" });
    const user = await this.$store.getters.user;
    this.user = user;
    console.log('this.user',this.user);
    socketService.on("host topic", user.id);
    socketService.on("order recived", this.addOrder);
  },
  methods: {
    toggle(val) {
      this.renderOrder = val;
    },
    formattedTime(time) {
      return time.slice(0, 10);
    },
    changeOrderStatus(order, val) {
      order.status = val;
      orderService.add(order);
      const msg = val;
      socketService.emit("order-status-change", msg);
    },
    changeOrderStatusBack(order) {
      if (order.status === "Approve") order.status = "Decline";
      else order.status = "Approve";
      orderService.add(order);
    },
    addOrder(order) {
      this.user.orders.unshift(order);
    },
       formatedPrice(price){
         return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)

    }

  },
  computed: {
 
     
  },
  unmounted() {
    socketService.off("order recived", this.addMsg);
    socketService.off("host topic", user.id);
  },
  components: {
    appHeader,
    chart
  },
};
</script>

<style></style>
