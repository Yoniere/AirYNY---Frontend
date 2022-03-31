<template>
  <section class="upper-img-section">
    <h1 class="stay-name">{{ stay.name }}</h1>
    <div class="second-header flex space-between">
      <div class="left-side-btns flex">
        <div class="flex card-rate">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              height: 14px;
              width: 14px;
              fill: #ff385c;
            "
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
        <div>
          <button class="share-btn flex">
            <img
              class="share-img"
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/share24-icon.png"
            />
            Share
          </button>
        </div>

        <div>
          <button class="save-btn-details flex">
            <!-- <img
              class="save-img"
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648730273/airyny/icon-heart.jpg"
            /> -->
            <svg
              class="heart"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              border="1px solid black"
              style="
                enable-background: new 0 0 400 400;
                bottom: 0px;

                margin-right: 4px;
              "
            >
              <g
                id="heart"
                fill="none"
                stroke-miterlimit="10"
              >
                <path
                  d="M8,15,6.84,13.937C2.72,10.1,0,7.6,0,4.5A4.386,4.386,0,0,1,4.4,0,4.7,4.7,0,0,1,8,1.717,4.7,4.7,0,0,1,11.6,0,4.386,4.386,0,0,1,16,4.5c0,3.106-2.72,5.6-6.84,9.441Z"
                  stroke="color:black"
                />
                <path
                  d="M 8 13.64373970031738 L 8.48186206817627 13.20225715637207 L 8.644049644470215 13.05103969573975 C 12.47146034240723 9.482660293579102 15 7.125249862670898 15 4.49590015411377 C 15 3.53331995010376 14.65030956268311 2.645900011062622 14.01533985137939 1.997089982032776 C 13.38607025146484 1.3541100025177 12.52828979492188 1 11.60000038146973 1 C 10.53046035766602 1 9.472579956054688 1.506360054016113 8.770179748535156 2.354510068893433 L 8.000020027160645 3.284480094909668 L 7.22983980178833 2.354520082473755 C 6.527400016784668 1.506360054016113 5.469510078430176 1 4.400000095367432 1 C 3.471709966659546 1 2.613929986953735 1.3541100025177 1.984660029411316 1.997089982032776 C 1.349689960479736 2.645900011062622 1 3.53331995010376 1 4.49590015411377 C 1 7.125249862670898 3.528589963912964 9.482709884643555 7.356080055236816 13.05115985870361 L 7.518139362335205 13.2022590637207 L 8 13.64373970031738 M 8 15 L 6.839849948883057 13.9370698928833 C 2.719919919967651 10.09539031982422 0 7.601950168609619 0 4.49590015411377 C 0 1.9617600440979 1.919919967651367 -8.881784197001252e-16 4.400000095367432 -8.881784197001252e-16 C 5.799960136413574 -8.881784197001252e-16 7.119880199432373 0.653980016708374 8 1.71668004989624 C 8.880080223083496 0.653980016708374 10.19995975494385 -8.881784197001252e-16 11.60000038146973 -8.881784197001252e-16 C 14.08008003234863 -8.881784197001252e-16 16 1.9617600440979 16 4.49590015411377 C 16 7.601990222930908 13.28003978729248 10.09543037414551 9.160149574279785 13.9370698928833 L 8 15 Z"
                  stroke="color:black"
                  fill="black"
                />
              </g>
            </svg>
            Save
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="main-gallery-section">
    <section id="gallery" class="gallery">
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
  </section>
  <!-- <section class="main-layout">
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
  </section> -->
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
  },
};
</script>

<style></style>
