<template>
  <h1>rated stays:</h1>
  <ul class="stay-list flex-row">
    <li
      class="stay-card"
      v-for="stay in ratedStays"
      :key="stay._id"
    >
      <div>
        <img
          :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1`"
          alt="imgStay"
        />
      </div>
      <div>
        <span> {{ stay }}</span>
      </div>
    </li>
  </ul>

  <ul class="stay-list flex-row">
    <li
      class="stay-card"
      v-for="stay in ratedStays"
      :key="stay._id"
    >
      <div>
        <img src="" alt="imgStay" />
      </div>
      <div>
        <span> {{ stay }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ratedStays: ["United States", "Spain", "Portugal"],
      uniqStays: ["United States", "Spain", "Portugal"],
    };
  },
};
</script>

<style></style>
