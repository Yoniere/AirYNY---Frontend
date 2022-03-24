<template  >
<section class="main-layout">
  <div>
  <h2>
    <img src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/home24-icon.svg">
    Entire home</h2>
    </div>
  <p>You’ll have the apartment to yourself.</p>
  <h2>Great location</h2>
  <p>Recent guests gave the location a 5-star rating.</p>
  <h2>Enhanced Clean</h2>
  <p>This host has committed to our 5-step enhanced cleaning process.</p>
  <h2>Free cancellation up to 24 hours before check-in</h2>
  <p>feel free to be flexible</p>
</section>
</template>

<script>

export default {
    name: "mainAmenities",
      props: {
    stay: {
      type: Object,
    },
      }
}
</script>

<style></style>
