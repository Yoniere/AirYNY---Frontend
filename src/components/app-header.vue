<template>
  <header class="main-header main-layout">
    <h1 class="logo">Airyny</h1>
    <stay-filter :stay="stay" />
  </header>
  <hr />
</template>

<script>
import stayFilter from "./stay-filter.vue";

export default {
  name: "stay-header",

  // created() {
  //   this.$store.dispatch({ type: "loadStays" });
  // },

  // methods: {
  //   setFilter(filterBy) {
  //     const copyfilter = JSON.parse(
  //       JSON.stringify(filterBy)
  //     );
  //     this.$store.dispatch({
  //       type: "setFilter",
  //       filterBy: copyfilter,
  //     });
  //   },
  // },
  components: {
    stayFilter,
  },
};
</script>

<style></style>
