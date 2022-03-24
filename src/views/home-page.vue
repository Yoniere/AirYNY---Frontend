<template>
  <main class="main-layout">
    <div class="home-img-container">
      <img
        class="home-page-pic"
        :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/HomePage`"
        alt="img rated stay"
      />
    </div>
    <home-list :stay="ratedStays" />
    <div class="home-img-container">
      <img
        class="home-page-pic"
        :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648115029/airyny/airbnb-hoste.jpg`"
        alt="img host"
      />
    </div>
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
