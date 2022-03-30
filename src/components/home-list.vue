<template>
  <section class="main-layout">
    <div class="popular-dest-list main-layout">
      <h2 class="popular-header">
        <span>Popular Destinations</span>
      </h2>

      <ul class="home-list">
        <li
          class="home-card clickable"
          v-for="stay in ratedStays"
          :key="stay._id"
          @click="goToStay(stay)"
        >
          <img
            class="home-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1.jpg`"
            alt="img rated stay"
          />
          <div class="txt-container">
            <h3 class="country-name popular">{{ stay }}</h3>
          </div>
        </li>
      </ul>
    </div>

    <div class="unique-dest-list popular-dest-list">
      <h2 class="popular-header">
        <span>Unique Destinations</span>
      </h2>
      <ul class="home-list">
        <li
          class="home-card clickable"
          v-for="stay in uniqueStays"
          :key="stay._id"
          @click="goToUnique(stay)"
        >
          <img
            class="home-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay.country}`"
            alt="img unique stay"
          />
          <div class="txt-container">
            <h3 class="country-name">
              {{ stay.country }}
            </h3>
            <span class="dist-country">{{ stay.km }}</span>
          </div>
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
        "United States",
        "Spain",
        "Portugal",
        "Australia",
      ],
      uniqueStays: [
        { country: "Canada", id: 1155001, km: "9,644km" },
        { country: "Japan", id: 1155002, km: "9,079 km" },
        {
          country: "Norway",
          id: 11115033,
          km: "5,315.6km",
        },
        {
          country: "Philippines",
          id: 11115999,
          km: "8,979km",
        },
      ],
      filterBy: {
        country: "",
        guests: {
          adults: 0,
          kids: 0,
          Infants: 0,
        },
        stayTime: "",
        type: [],
        price: {
          minPrice: 30,
          maxPrice: 2000,
        },
      },
    };
  },

  methods: {
    goToStay(stay) {
      this.filterBy.country = stay;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.$router.push(`/stay`);
      window.scrollTo(0, 0);
    },

    goToUnique(stay) {
      delete stay.km;
      this.$router.push(`/stay/${stay.id}`);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
