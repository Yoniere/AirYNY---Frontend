<template  >
  <section class=" additional-amenities">
    <h1 class="title">What this place offers</h1>
    <div class="amenities flex">
    <div class="amenity flex">
      <img
        class="amenity-img"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/tv24-icon.png"
      />
      <p class="amenity-title">TV</p>
    </div>

    <div class="amenity flex">
      <img
        class="amenity-img"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/kitchen-icon.png"
      />
      <p class="amenity-title">Kitchen</p>
    </div>

    <div class="amenity flex">
      <img
        class="amenity-img"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/smoke-icon.png"
      />
      <p class="amenity-title">Smoking Allowed</p>
    </div>

    <div class="amenity flex">
      <img
        class="amenity-img"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/wifi32-icon.png"
      />
      <p class="amenity-title">Wifi</p>
    </div>

    <div class="amenity flex">
      <img
        class="amenity-img"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/ac30-icon.png"
      />
      <p class="amenity-title">Air conditioning</p>
    </div>

    <div class="amenity flex">
      <img
        class="amenity-img"
        src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/tv24-icon.png"
      />
      <p class="amenity-title">Pets Allowed</p>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "stayAdditinalInfo",
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style></style>
