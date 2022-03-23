<template>
  <ul class="stay-list flex-row">
    <stay-preview
      v-for="stay in stays"
      :stay="stay"
      :key="stay._id"
    />
  </ul>
</template>

<script>
import stayPreview from "./stay-preview.vue";
export default {
  name: "stay-list",
  props: {
    stays: {
      type: Array,
    },
  },
  components: {
    stayPreview,
  },
  methods: {},
};
</script>

<style></style>
