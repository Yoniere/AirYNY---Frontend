<template class="main-layout">
  <main>
    <h1>AirYnY</h1>
    <home-list :stay="ratedStays" />
  </main>
</template>

<script>
import homeList from "../components/home-list.vue";
export default {
  name: "home-page",
  data() {
    return {
      // ratedStays: ["United States", "Spain", "Portugal"],
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
