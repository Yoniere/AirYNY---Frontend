<template>
  <section>
    <div>
      <img
        class="home-page-pic"
        :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/HomePage`"
        alt="img rated stay"
      />
    </div>
    <h1>Popular Destinations:</h1>
    <ul class="stay-list flex-row">
      <li
        class="stay-card"
        v-for="stay in ratedStays"
        :key="stay._id"
      >
        <div>
          <img
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1`"
            alt="img rated stay"
          />
        </div>
        <div>
          <span> {{ stay }}</span>
        </div>
      </li>
    </ul>

    <h2>Unique Stays:</h2>
    <ul class="stay-list flex-row">
      <li
        class="stay-card"
        v-for="stay in uniqStays"
        :key="stay._id"
      >
        <div>
          <img
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}`"
            alt="img unique stay"
          />
        </div>

        <div>
          <span> {{ stay }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ratedStays: [
        "Usa",
        "Spain",
        "Portugal",
        " Australia",
      ],
      uniqStays: [
        "Italy",
        "Japan",
        "Norway",
        "Philippines",
        "Canada",
      ],
    };
  },
};
</script>

<style></style>
