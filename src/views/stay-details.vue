<template>
  <app-header class="header-details"   @openModalLogin="openModalLogin"/>
  <section v-if="stay" class="details-layout">
    <imgs-comp :stay="stay"></imgs-comp>
    <main class="flex main-details-comp space-between">
      <section class="flex-col">
        <initial-info :stay="stay"></initial-info>
        <main-amenities :stay="stay"></main-amenities>
        <stay-description :stay="stay"></stay-description>
        <amenities :stay="stay"></amenities>
      </section>
      <section class="checkout-area">
        <checkout :stay="stay" @setOrder="setOrder"></checkout>
      </section>
    </main>
    <reviews :stay="stay"></reviews>
    <details-map :stay="stay"></details-map>
    <host :stay="stay"></host>
    <login-modal v-if="modalLoginIsOpen" @login="setLogin" />
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import { stayService } from "../services/stay-service.js";
import { orderService } from "../services/order-service.js";
import { userService } from "../services/user-service.js";
import ImgsComp from "../components/stay-details.cmp/imgs-comp.vue";
import initialInfo from "../components/stay-details.cmp/initial-info.vue";
import mainAmenities from "../components/stay-details.cmp/main-amenities.vue";
import stayDescription from "../components/stay-details.cmp/stay-description.vue";
import amenities from "../components/stay-details.cmp/amenities.vue";
import checkout from "../components/stay-details.cmp/checkout.vue";
import reviews from "../components/stay-details.cmp/reviews.vue";
import detailsMap from "../components/stay-details.cmp/details-map.vue";
import host from "../components/stay-details.cmp/host.vue";
import loginModal from "../components/login-modal.vue";

export default {
  data() {
    return {
      stay: null,
      modalLoginIsOpen:false,
    };
  },

  async created() {
    const id = this.$route.params.id;
    console.log(id)
    const stay = await stayService.getById(id);
    this.stay = stay;
  },
  components: {
    appHeader,
    ImgsComp,
    initialInfo,
    stayDescription,
    mainAmenities,
    amenities,
    reviews,
    host,
    checkout,
    detailsMap,
    loginModal
  },
  computed: {},
  methods: {
    openModalLogin(){
      this.modalLoginIsOpen = true
    },
    setLogin(user){
      userService.login(user)
      this.modalLoginIsOpen= false    
      },
    async setOrder(filterBy) {
      const order = orderService.getEmptyOrder();
      order.name = this.stay.name;
      order.country = this.stay.address.country;
      order.stay_id = this.stay.id;
      order.pricePerNight = this.stay.price;
      order.guests = filterBy.guests;
      order.stayTime = filterBy.stayTime;
      order.status = "Pending";
      const orderToSave = JSON.parse(JSON.stringify(order));

      try {
        const newOrder = await this.$store.dispatch({
          type: "addNewOrder",orderToSave
        });
        alert("order received");
      } catch {
        console.error;
      }
    },
  },
};
</script>

<style></style>
