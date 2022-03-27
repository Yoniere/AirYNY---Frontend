<template>
  <section
    class="main-header"
    :class="this.stickyNav ? 'fix' : 'fullHeader'"
  >
    <div
      class="flex space-between header-features main-layout"
    >
      <div class="logo-container">
        <router-link to="/"
          ><img
            class="logo flex align-center"
            :src="getLogo"
        /></router-link>
      </div>
      <button
        class="mini-filter flex space-between align-center clickable"
        :class="this.openfilter ? 'hide' : 'fixed'"
        @click="toggle"
      >
        <span> {{ getFilter }}</span>

        <div class="search-btn">
          <button @click="setFilter">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: white;
                stroke-width: 5;
                overflow: visible;
              "
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 
          0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </button>

      <div
        class="flex align-center menu-btns"
        :class="this.stickyNav ? 'header-fix' : ''"
      >
        <router-link to="/stay">Explore </router-link>
        <router-link to="/">Become a host </router-link>
        <button class="world-btn">
          <img
            class="world-img"
            src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648059841/airyny/world-icon.svg"
          />
        </button>
        <button class="profile-btn flex">
          <img
            class="menu-img"
            src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648059841/airyny/menu-icon.svg"
          />
          <img
            class="profile-img"
            src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648059841/airyny/profile-icon.svg"
          />
        </button>
      </div>
    </div>

    <stay-filter
      :class="openfilter ? '' : 'hide'"
      @filterd="setMiniFilter"
    />
  </section>
</template>

<script>
import stayFilter from "./stay-filter.vue";

export default {
  name: "stay-header",

  components: {
    stayFilter,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.filter = this.$store.getters.filterBy;
  },
  data() {
    return {
      stickyNav: false,
      openfilter: true,
      filter: null,
    };
  },

  methods: {
    handleScroll(event) {
      if (window.top.scrollY > 20) {
        this.stickyNav = true;
        this.openfilter = false;
      } else {
        this.stickyNav = false;
        this.openfilter = true;
      }
    },
    toggle() {
      this.openfilter = !this.openfilter;
    },
    setMiniFilter(filterBy) {
      this.filter = filterBy;
    },
  },
  computed: {
    getLogo() {
      return this.stickyNav
        ? "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648055648/airyny/logo2.png"
        : "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648055648/airyny/logo1.png";
    },
    getFilter() {
      console.log(this.filter);
      return this.filter.country
        ? `${this.filter.country}`
        : "Start to search";
    },
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
