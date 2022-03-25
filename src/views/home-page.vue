<template>
  <main class="home-page">
    <section class="main-hero main-layout2">
      <h1>Let your curiosity do the booking</h1>
      <button class="flexible">
        <h3>I'm flexible</h3>
      </button>
    </section>
    <!-- <div>
      <p class="ac">roboto-black</p>
      <p class="b">roboto-BlackItalic</p>
      <p class="c">roboto-bold</p>
      <p class="d">roboto-BoldItalic</p>
      <p class="e">roboto-italic</p>
      <p class="f">roboto-light</p>
      <p class="g">roboto-light-italic</p>
      <p class="h">roboto-Medium</p>
      <p class="i">roboto-Medium-italic</p>
      <p class="j">roboto-regular</p>
      <p class="q">roboto-thin</p>
      <p class="l">roboto-thin-italic</p>
      <p class="m">brown-regular</p>
    </div> -->
    <home-list :stay="ratedStays" />
    <section class="host-container flex main-layout">
      <h1>Become a host</h1>
      <button>
        <span class="host-btn-txt">Lets try</span>
      </button>
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
