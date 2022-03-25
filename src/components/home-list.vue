<template>
  <section class="main-layout">
    <div class="popular-dest-list main-layout">
      <h1 class="popular-header">Popular Destinations:</h1>
      <ul class="home-list">
        <li
          class="home-card"
          v-for="stay in ratedStays"
          :key="stay._id"
          @click="goToStay(stay)"
        >
          <img
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1`"
            alt="img rated stay"
          />
          <h3 class="country-name">{{ stay }}</h3>
        </li>
      </ul>
    </div>

    <div class="unique-dest-list popular-dest-list">
      <h2 class="popular-header">Unique Destinations:</h2>
      <ul class="home-list">
        <li
          class="home-card"
          v-for="stay in uniqueStays"
          :key="stay._id"
          @click="goToUnique(stay)"
        >
          <img
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay.country}`"
            alt="img unique stay"
          />

          <h3 class="country-name">{{ stay.country }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ratedStays: [
        "United-States",
        "Spain",
        "Portugal",
        "Australia",
      ],
      uniqueStays: [
        // "Canada",
        // "Japan",
        // "Norway",
        // "Philippines",
        { country: "Canada", id: 1155001 },
        { country: "Japan", id: 1155002 },
        { country: "Norway", id: 11115033 },
        { country: "Philippines", id: 11115999 },
      ],
    };
  },

  methods: {
    goToStay(stay) {
      const filterBy = { country: stay };

      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(filterBy)),
      });
      this.$router.push(`/stay`);
    },

    goToUnique(stay) {
      console.log("stay", stay);
      this.$router.push(`/stay/${stay.id}`);
    },
  },
};
</script>

<style></style>
