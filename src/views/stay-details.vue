<template >
  <section v-if="stay">
    <imgs-comp :stay="stay"></imgs-comp>
    <main-amenities :stay="stay"></main-amenities>
    <stay-description :stay="stay"></stay-description>
    <amenities :stay="stay"></amenities>
    <reviews :stay="stay"></reviews>
    
  </section>
</template>

<script>
import { stayService } from "../services/stay-service.js";
import ImgsComp from "../components/stay-details.cmp/imgs-comp.vue";
import mainAmenities from "../components/stay-details.cmp/main-amenities.vue"
import stayDescription from "../components/stay-details.cmp/stay-description.vue";
import amenities from "../components/stay-details.cmp/amenities.vue";
import reviews from "../components/stay-details.cmp/reviews.vue";

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
    ImgsComp,
    stayDescription,
    mainAmenities,
    amenities,
    reviews

},
  computed: {},
};
</script>

<style>

</style>
