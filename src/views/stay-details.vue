<template >
<section v-if="stay">

<imgs-comp :stay="stay"></imgs-comp>
</section>
</template>

<script>
import { stayService } from "../services/stay-service.js";
import ImgsComp from "../components/stay-details.cmp/imgs-comp.vue";

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
  components:{
    ImgsComp
},
  computed: {
  },
};
</script>

<style></style>
