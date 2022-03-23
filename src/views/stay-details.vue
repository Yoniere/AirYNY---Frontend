<template >
  <section v-if="stay">
    <imgs-comp :stay="stay"></imgs-comp>
    <stay-info :stay="stay"></stay-info>
  </section>
</template>

<script>
import { stayService } from "../services/stay-service.js";
import ImgsComp from "../components/stay-details.cmp/imgs-comp.vue";
import stayInfo from "../components/stay-details.cmp/stay-info.vue";

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
    stayInfo,
  },
  computed: {},
};
</script>

<style></style>
