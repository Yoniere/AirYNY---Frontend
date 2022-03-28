<template>
  <div class="price-modal">
    <div class="flex-col higer-modal-section">
      <span class="type-header"> The average nightly price is 100$ </span>
      <div class="flex-row range space-between">
        <span> 30 </span>
        <el-slider
          range
          :min="filterByPrice.minPrice"
          :max="filterByPrice.maxPrice"
        />
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
      <button class="clear-btn" @click="setSort('clear')">Clear</button>
      <button class="save-btn" @click="setSort('save')">Save</button>
    </div>
  </div>
</template>

<script>
export default {
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
      // console.log(type)
      if (type === 'clear') {
        this.filterByPrice = { maxPrice: 2000, minPrice: 30 };
      }
      this.$emit(
        "filterByPrice",
        JSON.parse(JSON.stringify(this.filterByPrice))
      );
    },
<<<<<<< HEAD
  },
};
=======
    setPrice(val){
        console.log(val);
    }
}
}
>>>>>>> 262a378701a98ced3f11aad139473df353bd0452
</script>

<style>
</style>