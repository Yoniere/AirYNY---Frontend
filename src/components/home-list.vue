<template>
  <section>
    <div class="popular-dest-list">
      <h1 class="popular-header">Popular Destinations:</h1>
      <ul class="stay-list flex-row">
        <li
          class="stay-card"
          v-for="stay in ratedStays"
          :key="stay._id"
          @click="goToStay(stay)"
        >
          <img
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1`"
            alt="img rated stay"
          />
          <h3 class="stay-name">{{ stay }}</h3>
        </li>
      </ul>
    </div>

    <div class="unique-dest-list">
      <h2>Unique Destinations:</h2>
      <ul class="stay-list flex-row">
        <li
          class="stay-card"
          v-for="stay in uniqueStays"
          :key="stay._id"
        >
          <!-- @click="goToUnique(stay)" -->
          <img
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}`"
            alt="img unique stay"
          />

          <h3 class="stay-name">{{ stay }}</h3>
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
        "Canada",
        "Japan",
        "Norway",
        "Philippines",
        // { country: "Canada", id: 1155001 },
        // { country: "Japan", id: 1155002 },
        // { country: "Norway", id: 11115033 },
        // { country: "Philippines", id: 11115999 },
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

    // goToUnique(stay) {
    //   console.log("stay", stay);
    //   // const filterBy = { country: stay };
    //   // console.log("filterBy", filterBy);

    //   // this.$store.dispatch({
    //   //   type: "setFilter",
    //   //   filterBy: JSON.parse(JSON.stringify(filterBy)),

    //   this.$router.push(`/stay/${this.stay.id}`);
    // },
  },
};
</script>

<style></style>
