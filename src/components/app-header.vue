<template>
  <header class="main-header main-layout">
    <h1 class="logo">Airyny</h1>
     <stay-filter />

    <!-- <v-calendar locale="en" />  -->

    <!-- <v-date-picker v-model="date" /> -->
  </header>
  <hr />
</template>

<script>
import stayFilter from "./stay-filter.vue";

export default {
  name: "stay-header",

  components: {
    stayFilter,
  },
};
</script>

<style></style>
