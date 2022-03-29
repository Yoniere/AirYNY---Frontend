<template>
  <div class="price-modal">
    <div class="flex-col higer-modal-section">
      <span class="type-header">
        The average nightly price is 100$
      </span>
      <div class="flex-row range space-between">
        <span> 30 </span>
        <HistogramSlider
          :width="800"
          :bar-height="72"
          :data="pricesToShow"
          :drag-interval="true"
          :force-edges="false"
          :min="30"
          :max="2000"
          primaryColor="#b0b0b0"
          barRadius="6"
        />

        <!-- border-top-left-radius: 1px !important;
    border-top-right-radius: 1px !important;
    margin-right: 1px !important;
    background: rgb(176, 176, 176) -->

        <span>2000 </span>
      </div>
      <div class="flex-row prices space-between">
        <label>
          <span> min-price </span>
          <input
            class="input-price relative"
            type="number"
            v-model="filterByPrice.minPrice"
          />
        </label>
        -
        <label>
          <span> max-price </span>
          <input
            class="input-price relative"
            type="number"
            v-model="filterByPrice.maxPrice"
          />
        </label>
      </div>
    </div>
    <div class="lower-modal-section flex space-between">
      <button class="clear-btn" @click="setSort('clear')">
        Clear
      </button>
      <button class="save-btn" @click="setSort('save')">
        Save
      </button>
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
      prices = this.stays.map((stay) =>
        prices.push(stay.price)
      );
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
