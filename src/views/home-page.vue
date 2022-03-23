<template>
  <main class="main-layout">
    <home-list :stay="ratedStays" />
  </main>
</template>

<script>
import homeList from "../components/home-list.vue";
export default {
  name: "home-page",
  data() {
    return {};
  },
  computed: {
    stays() {
      this.$store.commit({ type: "setStay", stay });

      // this.$store.getters.ratedStays;
    },
  },
  components: {
    homeList,
  },
};
</script>
