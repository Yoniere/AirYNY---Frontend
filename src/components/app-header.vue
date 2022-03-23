<template>
  <header class="main-header main-layout">
    <h1 class="logo">Airyny</h1>
    <stay-filter />
  </header>
  <hr />
</template>

<script>
import stayFilter from "./stay-filter.vue";
import { ref } from "vue";
export default {
  name: "stay-header",

  components: {
    stayFilter,
  },
};
</script>

<style></style>
