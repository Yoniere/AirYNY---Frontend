<template >
  <section class="main-layout">
    <h1>{{ stay.name }}</h1>
    <div class="flex space-between">
      <div>
        ⭐
        <span>{{ getRating }}</span> ·
        <button>
          <span> {{ stay.numOfReviews }}</span>
          reviews
        </button>
        ·
        <button>
          {{ stay.address.street }}
        </button>
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
    <section class="gallery flex">
      <div class="main-img flex">
    <img
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[0]}`"
    />
    </div>
    <div class="middle-column flex">
    <img class="upper-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[1]}`"
    />
    <img
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[2]}`"
    />
    </div>
    <div class="right-column flex">
    <img class="upper-img"
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[3]}`"
    />
    <img
      :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${stay.imgUrls[4]}`"
    />
    </div>
    </section>
    <div>
<div class="initial-info">
    <h1>
      Entire rental unit hosted by <span>{{ stay.host.fullname }}</span>
    </h1>
    <div >
      <span>{{stay.capacity}} guests</span> · 
      <span>{{stay.bedrooms}} bedroom</span> ·
      <span>{{stay.beds}} bed</span> ·
      <span>{{stay.bathrooms}} baths</span>
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
      return this.stay.host.thumbnailUrl
    }

    // reviewCounter() {
    //   this.stay.reviews.reduce((acc) => {
    //     return acc++;
    //   }, 0);
    // },
  },
};
</script>

<style></style>
