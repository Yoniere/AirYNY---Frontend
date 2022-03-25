<template  >
  <section class="amentiy-section ">
    <div class="amenity flex">
      <img
        class="amentiy-icon"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/home24-icon.svg"
      />
      <div class="amenity-description">
        <h2 class="amenity-title">Entire home</h2>
        <p class="amenity-paragraph">You’ll have the apartment to yourself.</p>
      </div>
    </div>

    <div class="amenity flex">
      <img
        class="amentiy-icon"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/location24-icon.png"
      />
      <div class="amenity-description">
        <h2 class="amenity-title">Great location</h2>
        <p class="amenity-paragraph">Recent guests gave the location a 5-star rating.</p>
      </div>
    </div>

    <div class="amenity flex">
      <img
        class="amentiy-icon"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/clean32-icon.png"
      />
      <div class="amenity-description">
        <h2 class="amenity-title">Enhanced Clean</h2>
        <p class="amenity-paragraph">This host has committed to our 5-step enhanced cleaning process.</p>
      </div>
    </div>

    <div class="amenity flex">
              <img
          class="amentiy-icon"
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/freecancellation26-icon.png"
        />
        <div class="amenity-description">
      <h2 class="amenity-title">
        Free cancellation up to 24 hours before check-in
      </h2>
      <p class="amenity-paragraph">feel free to be flexible</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainAmenities",
  props: {
    stay: {
      type: Object,
    },
  },
};
</script>

<style></style>
