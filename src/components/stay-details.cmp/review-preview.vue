<template>
  <section class="flex-col">
    <div class="upper-review flex">
        <div class="review-img">
      <img class="img" :src="`${review.by.imgUrl}`" />
      </div>
      <div class="review-titles">
      <h1 class="name">{{ review.by.fullname }}</h1>
      <h2 class="date">{{ review.at }}</h2>
      </div>
    </div>
    <p class="paragraph-review">{{ review.txt }}</p>
    
  </section>
</template>

<script>
export default {
  name: "reviews",
  props: {
    review: {
      type: Object,
    },
  },
  createad() {},
  data() {
    return {};
  },
  computed: {
    getImage() {
      return review.imgUrl;
    },
  },
};
</script>

<style></style>
