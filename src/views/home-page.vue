<template>
  <app-header />
  <main class="home-page">
    <section class="main-hero main-layout2">
      <h1>Let your curiosity do the booking</h1>
      <button class="flexible">
        <h3>I'm flexible</h3>
      </button>
    </section>

    <home-list  />
    <section class="host-container flex">
      <div class="container-title flex">
        <h2 class="host-title">
          <span>Questions about hosting?</span>
        </h2>
      </div>

      <button>
        <span class="host-btn-txt">Lets try</span>
      </button>
    </section>
  </main>
</template>

<script>
import appHeader from "../components/app-header.vue";
import homeList from "../components/home-list.vue";

export default {
  name: "home-page",
  data() {
    return {};
  },
  computed: {
    stays() {
      this.$store.commit({ type: "setStay", stay });
    },
  },
  components: {
    homeList,
    appHeader,
  },
};
</script>
