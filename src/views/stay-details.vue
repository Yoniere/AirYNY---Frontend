<template >
<app-header  class="header-details"/>
  <section v-if="stay" class="main-layout">
    <imgs-comp :stay="stay"></imgs-comp>
    <main class="flex ">
      <section class="flex-col">
        <initial-info :stay="stay"></initial-info>
        <main-amenities :stay="stay"></main-amenities>
        <stay-description :stay="stay"></stay-description>
        <amenities :stay="stay"></amenities>
      </section>
      <section>
        <checkout :stay="stay"></checkout>
      </section>
    </main>
    <reviews :stay="stay"></reviews>
    <host :stay="stay"></host>
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import { stayService } from "../services/stay-service.js";
import ImgsComp from "../components/stay-details.cmp/imgs-comp.vue";
import initialInfo from "../components/stay-details.cmp/initial-info.vue";
import mainAmenities from "../components/stay-details.cmp/main-amenities.vue";
import stayDescription from "../components/stay-details.cmp/stay-description.vue";
import amenities from "../components/stay-details.cmp/amenities.vue";
import checkout from "../components/stay-details.cmp/checkout.vue"
import reviews from "../components/stay-details.cmp/reviews.vue";
import host from "../components/stay-details.cmp/host.vue";

export default {
  data() {
    return {
      stay: null,
    };
  },

  async created() {
    const id = this.$route.params.id;
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
    checkout
  },
  computed: {},
};
</script>

<style>

</style>
