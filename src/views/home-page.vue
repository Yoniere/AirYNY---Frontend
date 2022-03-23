<template class="main-layout">
  <main>
    <h1>AirYnY</h1>
    <home-list
      v-for="stay in ratedStays"
      :stay="stay"
      :key="stay._id"
    />
  </main>
</template>

<script>
import homeList from "../components/home-list.vue";
export default {
  name: "home-page",
  data() {
    return {
      ratedStays: [],
    };
  },
  computed: {
    stays() {
      return this.$store.getters.ratedStays;
    },
  },
  components: {
    homeList,
  },
};
</script>
