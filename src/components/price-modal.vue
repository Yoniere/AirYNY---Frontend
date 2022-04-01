<template>
  <div class="price-modal">
    <div class="flex-col higer-modal-section">
      <span class="type-header"> The average nightly price is 100$ </span>
      <div class="flex-row range space-between">
        <HistogramSlider
          v-model="filterByPrice"
          @change="setFilterPrice"
          :width="250"
          :bar-height="72"
          :data="pricesToShow"
          :drag-interval="true"
          :force-edges="false"
          :min="25"
          :max="250"
          primaryColor="#b0b0b0"
          barRadius="6"
        />

        <!-- border-top-left-radius: 1px !important;
    border-top-right-radius: 1px !important;
    margin-right: 1px !important;
    background: rgb(176, 176, 176) -->

      </div>
      <div class="flex-row prices space-between">
        <div class="input-price">
          <span> min-price </span>
          <input type="number" v-model="filterByPrice.minPrice" />
        </div>
        -
        <div class="input-price">
          <span> max-price </span>
          <input type="number" v-model="filterByPrice.maxPrice" />
        </div>
      </div>
    </div>
    <div class="lower-modal-section flex space-between">
      <button class="clear-btn" @click="setSort('clear')">Clear</button>
      <button class="save-btn" @click="setSort('save')">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stays: {
      type: Array,
    },
  },
  data() {
    return {
      filterByPrice: {
        maxPrice: 2000,
        minPrice: 30,
      },
    };
  },
  methods: {
    setFilterPrice(ev) {
      console.log(ev);
      this.filterByPrice.minPrice = ev.from;
      this.filterByPrice.maxPrice = ev.to;
      console.log(this.filterByPrice);
    },
    setSort(type) {
      if (type === "clear") {
        this.filterByPrice = {
          maxPrice: 2000,
          minPrice: 30,
        };
      }
      this.$emit(
        "filterByPrice",
        JSON.parse(JSON.stringify(this.filterByPrice))
      );
    },
  },
  computed: {
    pricesToShow() {
      var prices = [];
      prices = this.stays.map((stay) => prices.push(stay.price));
      return prices;
    },
    minPrice() {
      return Math.min(this.pricesToShow);
    },
    maxPrice() {
      return Math.max(this.pricesToShow);
    },
  },
};
</script>

<style></style>
