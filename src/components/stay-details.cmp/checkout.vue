<template>
  <section class="checkout" :class="checkoutPos">
    <div class="checkout-title flex space-between">
      <div class="checkout-title-left">
        <h1>
          <span class="price">${{ stay.price }}</span>
          <span class="night"> / night</span>
        </h1>
      </div>

      <div class="checkout-title-right flex">
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
      </div>
    </div>

    <el-date-picker
      class="date-input"
      v-model="this.stayTime"
      type="daterange"
      range-separator=""
      start-placeholder="Check in"
      end-placeholder="Check out"
    >
    </el-date-picker>

    <div v-if="guestModal" class="guests-Modal">
      <ul>
        <li class="flex space-between align-center">
          <span class="flex-col"
            >Adults
            <span class="guide-age">Ages 13 or above </span>
          </span>
          <span>
            <button @click="incAdults(1)">+</button>
            {{ filterBy.gusets.adults }}
            <button @click="incAdults(-1)">-</button></span
          >
        </li>
        <li class="flex space-between align-center">
          <span class="flex-col">
            Children
            <span class="guide-age"> Ages 2-12 </span>
          </span>
          <span>
            <button @click="incKids(1)">+</button> {{ filterBy.gusets.kids }}
            <button @click="incKids(-1)">-</button></span
          >
        </li>
        <li class="flex space-between align-center">
          <span class="flex-col">
            Infants
            <span class="guide-age">Under 2 </span>
          </span>
          <span>
            <button @click="incInfants(1)">+</button>
            {{ filterBy.gusets.Infants }}
            <button @click="incInfants(-1)">-</button></span
          >
        </li>
      </ul>
    </div>

    <button class="reserve-btn">Reserve</button>
  </section>
</template>

<script>
export default {
  name: "checkout",
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {
      guestModal: false,
      stayTime: "",
      // stickyNav: false,
      pos: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    getRating() {
      return this.stay.reviewScores.rating / 10;
    },

    checkoutPos() {
      if (this.pos === "a") {
        return "static";
      } else if (this.pos === "b") {
        return "fixed";
      } else if (this.pos === "c") {
        return "static-second";
      } else {
        return "fixed-top";
      }
    },
  },
  methods: {
    handleScroll(event) {
      // console.log(window.top.scrollY)
      if (window.top.scrollY < 744) {
        this.pos = "a";
        // this.stickyNav = true;
        // this.openfilter = false;
      } else if (window.top.scrollY < 1480) {
        this.pos = "b";
        // this.stickyNav = false;
        // this.openfilter = true;
      } else if (window.top.scrollY < 1550) {
        this.pos = "c";
      } else {
        this.pos = "d";
      }
      // console.log(this.pos)
    },

        openModal(){
      this.guestModal = !this.guestModal

    },
  },
};
</script>

<style>
</style>

