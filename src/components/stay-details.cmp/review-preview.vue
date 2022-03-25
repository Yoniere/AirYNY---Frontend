<template>
<img :src="`${review.by.imgUrl}`">
<h1>{{review.by.fullname}}</h1>
<h2>{{review.at}}</h2>
<p>{{review.txt}}</p>
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
      getImage(){
          return review.imgUrl
      }
  },
};
</script>

<style></style>
