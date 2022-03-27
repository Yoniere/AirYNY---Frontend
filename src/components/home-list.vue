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
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1`"
            alt="img rated stay"
          />
          <h3 class="country-name">{{ stay }}</h3>
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
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay.country}`"
            alt="img unique stay"
          />

          <h3 class="country-name">{{ stay.country }}</h3>
          <span>{{ stay.km }}</span>
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
      delete stay.km;
      console.log("stay", stay);
      this.$router.push(`/stay/${stay.id}`);
    },
    getDistance() {
      // var from = new google.maps.LatLng(
      //   32.079807,
      //   34.780293
      // );
      // console.log("form", form);
      // var to = new google.maps.LatLng(
      //   this.stay.address.location.lan,
      //   this.stay.address.location.lat
      // );
      // var dist =
      //   google.maps.geometry.spherical.computeDistanceBetween(
      //     from,
      //     to
      //   );
      // console.log("dist", dist);
    },
  },
};
</script>

<style></style>
