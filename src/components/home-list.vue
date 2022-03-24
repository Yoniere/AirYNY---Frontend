<template>
  <section>
    <div class="home-img-container">
      <img
        class="home-page-pic"
        :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/HomePage`"
        alt="img rated stay"
      />
    </div>
    <div>
      <h1 class="popular-header">Popular Destinations:</h1>
      <ul class="stay-list flex-row">
        <li
          class="stay-card"
          v-for="stay in ratedStays"
          :key="stay._id"
          @click="goToStay(stay)"
        >
          <div>
            <img
              class="home-card-img"
              :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1`"
              alt="img rated stay"
            />
          </div>
          <div>
            <h3 class="stay-name">{{ stay }}</h3>
          </div>
        </li>
      </ul>
    </div>
    <h2>Unique Destinations:</h2>
    <ul class="stay-list flex-row">
      <li
        class="stay-card"
        v-for="stay in uniqStays"
        :key="stay._id"
      >
        <div>
          <img
            class="home-card-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}`"
            alt="img unique stay"
          />
        </div>

        <div>
          <h3 class="stay-name">{{ stay }}</h3>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ratedStays: ["Usa", "Spain", "Portugal", "Australia"],
      uniqStays: [
        "Canada",
        "Japan",
        "Norway",
        "Philippines",
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
  },
};
</script>

<style></style>
