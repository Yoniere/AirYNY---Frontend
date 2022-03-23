<template>
  <ul>
    <li v-for="stay in ratedStays" :key="stay._id">
      <div>
        <img src="" alt="imgStay" />
      </div>
      <div>
        <span> {{ stay }}</span>
      </div>
      <div>
        <!-- <span>{{ stay.name }} </span> -->
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ratedStays: ["United States", "Spain", "Portugal"],
    };
  },
};
</script>

<style></style>
