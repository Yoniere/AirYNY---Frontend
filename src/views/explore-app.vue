<template>
  <app-header
    class="header-explore"
    @openModalLogin="openModalLogin"
  />
  <section class="main-layout2">
    <div class="explore-buttons flex">
      <button
        @click="ChangeModalPrice"
        class="sort-btn relative flex align-center"
      >
        Price
        <span>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <g fill="none">
              <path
                d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <priceModal
        :stays="stays"
        v-if="modalPrice"
        @filterByPrice="setFilterByPrice"
      />

      <button
        @click="ChangeModalType"
        class="sort-btn flex align-center"
      >
        Type of place
        <span>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <g fill="none">
              <path
                d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <typePlaceModal v-if="modalType" @sort="setSort" />
      <button class="sort-btn">Wifi</button>
      <button class="sort-btn">TV</button>
      <button class="sort-btn">Kitchen</button>
      <button class="sort-btn">AC</button>
      <button class="sort-btn">Smoking Allowed</button>
      <button class="sort-btn">Pet Allowed</button>
    </div>

    <h1>{{ title }}</h1>
    <stay-list
      :stays="stays"
      v-if="stays"
      @stayLiked="setLiked"
    >
    </stay-list>
    <login-modal
      v-if="modalLoginIsOpen"
      @login="setLogin"
      @closeLoginModal="closeLoginModal"
    />
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import stayList from "../components/stay-list.vue";
import typePlaceModal from "../components/type-place-modal.vue";
import priceModal from "../components/price-modal.vue";
import loginModal from "../components/login-modal.vue";
import { userService } from "../services/user-service.js";

export default {
  created() {},
  data() {
    return {
      filterBy: {
        price: {
          minPrice: 30,
          maxPrice: 2000,
        },
        type: [],
      },
      modalPrice: false,
      modalType: false,
      modalLoginIsOpen: false,
    };
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    title() {
      const filter = this.$store.getters.filterBy;
      const count = this.$store.getters.stays;
      if (!filter || !count) return;
      return filter.country
        ? `${count.length} stays in ${filter.country}`
        : "explore stays";
    },
  },
  methods: {
    openModalLogin() {
      this.modalLoginIsOpen = true;
    },
        closeLoginModal(){
      this.modalLoginIsOpen = false
    },
    async setLogin(user) {
      try {
        await this.$store.dispatch({
          type: "login",
          userCred: user,
        });
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
      this.modalLoginIsOpen = false;
    },
    ChangeModalPrice() {
      this.modalPrice = !this.modalPrice;
    },
    ChangeModalPrice() {
      this.modalPrice = !this.modalPrice;
    },
    ChangeModalType() {
      this.modalType = !this.modalType;
    },
    setSort(sortBy) {
      this.filterBy.type = sortBy;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.modalType = false;
    },
    setFilterByPrice(filterByPrice) {
      this.filterBy.price.minPrice = filterByPrice.minPrice;
      this.filterBy.price.maxPrice = filterByPrice.maxPrice;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.modalPrice = false;
    },
    setLiked(stay) {
      this.$store.dispatch({
        type: "setLikedStay",
        stayId: JSON.parse(JSON.stringify(stay)),
      });
    },
  },
  components: {
    appHeader,
    stayList,
    typePlaceModal,
    priceModal,
    loginModal,
  },
};
</script>

<style></style>
