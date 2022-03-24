<template>
  <main class="home-page">
    <section class="main-hero full main-layout2">
      <h1>Not sure where to go? Perfect.</h1>
      <button class="gray-box-shadow clickable">
        <h3>I'm flexible</h3>
      </button>
    </section>

    <home-list :stay="ratedStays" />
    <section class="host-container">
      <h1>Become a host</h1>
    </section>
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
