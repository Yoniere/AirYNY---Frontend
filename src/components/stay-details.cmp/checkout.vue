<template>
  <section v-if="filterBy" class="checkout" :class="checkoutPos">
    <section :style="getFlexRow">
      <div class="checkout-title flex space-between" :style="getFlexColumn">
        <div class="checkout-title-left">
          <h1 class="title">
            <span class="price">${{ stay.price }}</span>
            <span class="night"> / night</span>
          </h1>
        </div>
        <div class="checkout-title-right flex">
          <div class="flex card-rate" :style="getZeroMargin">
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
        class="date-input-checkout"
        v-model="this.filterBy.stayTime"
        type="daterange"
        range-separator=""
        start-placeholder="Check in"
        end-placeholder="Check out"
      >
      </el-date-picker>

      <div class="guests-input flex-col" @click="openModal">
        <label class="guests-label"> Guests </label>
        <span class="guests"> {{ getGuests }}</span>
      </div>

      <div v-if="guestModal" class="checkout-guests-modal modal">
        <ul>
          <li class="flex space-between align-center">
            <span class="flex-col"
              >Adults
              <span class="guide-age">Ages 13 or above </span>
            </span>
            <span>
              <button @click="incAdults(-1)">-</button>
              {{ filterBy.guests.adults }}
              <button @click="incAdults(1)">+</button>
            </span>
          </li>
          <li class="flex space-between align-center">
            <span class="flex-col">
              Children
              <span class="guide-age"> Ages 2-12 </span>
            </span>
            <span>
              <button @click="incKids(-1)">-</button>
              {{ filterBy.guests.kids }}
              <button @click="incKids(1)">+</button>
            </span>
          </li>
          <li class="flex space-between align-center">
            <span class="flex-col">
              Infants
              <span class="guide-age">Under 2 </span>
            </span>
            <span>
              <button @click="incInfants(-1)">-</button>
              {{ filterBy.guests.Infants }}
              <button @click="incInfants(1)">+</button>
            </span>
          </li>
        </ul>
      </div>

      <button
        ref="myRef"
        class="reserve-btn"
        @click="setOrder"
        @mousemove="calcMouse"
        :style="mousePos"
      >
        Reserve
      </button>
    </section>
    <div class="nav-bar-section">
      <nav class="checkout-nav">
        <ul class="nav-list">
          <a class="link" @click="scrollMeTo('gallery')">Photos</a>
          <a class="link" @click="scrollMeTo('amentiy-section')">Amenities</a>
          <a class="link" @click="scrollMeTo('reviews')">Reviews</a>
          <a class="link" @click="scrollMeTo('map')">Location</a>
        </ul>
      </nav>
    </div>
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
      // stayTime: "",
      // stickyNav: false,
      pos: "",
      x: 0,
      y: 0,
      filterBy: null,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.filterBy = this.$store.getters.filterBy;
    // console.log(this.filterBy);
    this.getElInputClass();
    window.addEventListener(
      "click",
      function (event) {
        // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
        if (
          event.target.matches(".button-close-modal") ||
          !event.target.closest(".modal")
        ) {
          this.closeModal;
        }
      },
      false
    );
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    this.filterBy = "";
  },

  computed: {
    getRating() {
      return this.stay.reviewScores.rating / 10;
    },
    mousePos() {
      return {
        "background-position": `calc((100 - (${this.x}))*1%) calc((100 - (${this.y}))*1%)`,
      };
    },

    checkoutPos() {
      if (this.pos === "a") {
        return "static";
      } else if (this.pos === "b") {
        return "fixed";
      } else if (this.pos === "c") {
        return "static-second";
      } else if (this.pos === "d") {
        return "fixed-top";
      }
    },

    getFlexRow() {
      if (this.pos === "d") {
        return "display:flex;align-items: center;";
      }
    },
    getFlexColumn() {
      if (this.pos === "d") {
        return "flex-direction: column;margin-right: 16px;";
      }
    },
    getZeroMargin() {
      if (this.pos === "d") {
        return "margin-left: 0rem;";
      }
    },
    getGuests() {
      if (
        (this.filterBy.guests.adults === 0 || !this.filterBy.guests.adults) &&
        this.filterBy.guests.kids === 0 &&
        this.filterBy.guests.Infants === 0
      ) {
        return `Add guests`;
      } else {
        const count =
          this.filterBy.guests.adults +
          this.filterBy.guests.kids +
          this.filterBy.guests.Infants;
        return `${count} guests`;
      }
    },
  },
  methods: {
    closeModal() {
      return (document.querySelector(".modal").style.display = "none");
    },
    getElInputClass() {
      const elInput = document.querySelectorAll(".el-range-input");
    },
    handleScroll(event) {
      if (window.top.scrollY < 662) {
        this.pos = "a";
        // this.stickyNav = true;
        // this.openfilter = false;
      } else if (window.top.scrollY < 1350) {
        this.pos = "b";
        // this.stickyNav = false;
        // this.openfilter = true;
      } else if (window.top.scrollY < 1500) {
        this.pos = "c";
      } else {
        this.pos = "d";
      }
      console.log(window.top.scrollY)
    },

    scrollMeTo(id) {
      var element = document.getElementById(id);
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },

    openModal() {
      this.guestModal = !this.guestModal;
    },

    calcMouse(e) {
      const div = this.$refs.myRef;
      this.x = e.clientX - div.offsetLeft;
      this.y = e.pageY - div.offsetTop;
    },
    incAdults(val) {
      this.filterBy.guests.adults = this.filterBy.guests.adults + val;
      if (this.filterBy.guests.adults === -1) this.filterBy.guests.adults = 0;
    },
    incKids(val) {
      this.filterBy.guests.kids = this.filterBy.guests.kids + val;
      if (this.filterBy.guests.kids === -1) this.filterBy.guests.kids = 0;
    },
    incInfants(val) {
      this.filterBy.guests.Infants = this.filterBy.guests.Infants + val;
      if (this.filterBy.guests.Infants === -1) this.filterBy.guests.Infants = 0;
    },
    setOrder() {
      this.$emit("setOrder", this.filterBy);
    },
  },
};
</script>
<style></style>




