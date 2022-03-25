<template >
  <section class="main-layout upper-img-section">
    <h1 class="stay-name">{{ stay.name }}</h1>
    <div class="flex space-between">
      <div class="left-side-btns flex">
        <div class="flex card-rate">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="display: block; height: 14px; width: 14px; fill: #ff385c"
          >
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
           9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
            7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="rating">{{ getRating }}</span> ·
        <button class="review-btn">
          <span> {{ stay.numOfReviews }}</span>
          reviews
        </button>
        ·
        <button class="address-btn">
          {{ stay.address.street }}
        </button>
      </div>
      <div class="right-side-btns flex">

        <button class="share-btn flex">
          <img class="share-img"
            src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/share24-icon.png"
          />
          Share
        </button>

        <button class="save-btn flex">
          <img class="save-img"
            src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/heart-icon.svg"
          />
          Save
        </button>

      </div>
    </div>
  </section>
  <section class="gallery main-layout">
    <img
      class="main-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[0]}`"
    />
    <img
      class="mid-upper-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[1]}`"
    />
    <img
      class="right-upper-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[2]}`"
    />
    <img
      class="mid-upper-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[3]}`"
    />
    <img
      class="right-lower-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[4]}`"
    />
  </section>
  <section class="main-layout">
    <div class="lower-img-section flex space-between">
      <div class="initial-info">
        <h1>
          Entire rental unit hosted by <span>{{ stay.host.fullname }}</span>
        </h1>
        <div>
          <span>{{ stay.capacity }} guests</span> ·
          <span>{{ stay.bedrooms }} bedroom</span> ·
          <span>{{ stay.beds }} bed</span> ·
          <span>{{ stay.bathrooms }} baths</span>
        </div>
      </div>
      <div>
        <img class="host-img" :src="getHostImage">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "imgsAndMainInfo",
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    getRating() {
      return this.stay.reviewScores.rating / 10;
    },

    getHostImage() {
      return this.stay.host.thumbnailUrl;
    },

    // reviewCounter() {
    //   this.stay.reviews.reduce((acc) => {
    //     return acc++;
    //   }, 0);
    // },
  },
};
</script>

<style></style>
