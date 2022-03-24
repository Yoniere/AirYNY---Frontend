<template >
  <section class="main-layout upper-img-section">
    <h1 class="stay-name">{{ stay.name }}</h1>
    <div class="flex space-between">
    <div class="flex ">
      <div>
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
        <button>
          {{ stay.address.street }}
        </button>
      </div>
      </div>
      <div class="flex">
        <button
          aria-label="Add listing to a list"
          data-testid="pdp-save-button-unsaved"
          type="button"
          class="_qgaubrc"
        >
          <div aria-hidden="true" class="_5kaapu">
            <span class="_14tkmhr"
              ><svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2;
                  overflow: visible;
                "
              >
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                ></path></svg></span
            >Save
          </div>
        </button>
        <button type="button" class="_qgaubrc">
          <div class="_5kaapu">
            <span class="_14tkmhr"
              ><svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2;
                  overflow: visible;
                "
              >
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                  <path d="M16 3v23V3z"></path>
                  <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                </g></svg></span
            >Share
          </div>
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
      class="mid-lower-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[2]}`"
    />
    <img
      class="right-upper-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[3]}`"
    />
    <img
      class="right-lower-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[4]}`"
    />
  </section>
  <section class="main-layout">
    <div>
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
        <!-- <img :src="getHostImage"> -->
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
