<template>
  <!-- justify-center -->
  <section class="filter flex align-center main-layot">
    <div class="main-filter flex space-between align-center">
   <div  class="input-container">
      <label>
        Location
      <input type="search" list="destination" placeholder="Where are you going?" class="dropdown" v-model="filterBy.country" />
         <datalist id="destination" class="e-caret-hide">
           <option  value="Tel Aviv"> </option>
           <option value="Barcelona"></option>
          <option value="Paris"></option>
            <option  value="New York"></option>
            </datalist>
          </label>
     </div> 
     
     <div class="input-container flex-col date-list">
      <span class="demonstration"></span>
      <el-date-picker
        v-model="stayTime"
        type="daterange"
        range-separator=""
        start-placeholder="Check in"
        end-placeholder="Check out"
      >
      </el-date-picker >
     </div>
      <div class="input-container flex-col">
      <!-- <el-input type="text" placeholder="gustes" v-model="filterBy.gusets" /> -->
    <label > Guests <input  placeholder="Add guests" disabled="disabled" class="guests">
    </label>
    




      <div class="search-btn">
      <button @click="setFilter">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" 
        style="display:block;fill:none;height:12px;width:12px;stroke:white;stroke-width:5.333333333333333;overflow:visible" 
        aria-hidden="true" role="presentation" focusable="false"><g fill="none">
          <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 
          0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
      </button>
      </div>
      </div>

    </div>
  </section>
</template>

<script>
import { utilService } from "../services/util-service.js";

export default {
  name: "stay-filter",
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      filterBy: {
        country: "",
        gusets:[],
      },
      stayTime: "",
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
  },
  methods: {
    setFilter() {
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)) ,
      });
       this.$router.push(`/stay`)
    },
 
  },
};
</script>

<style></style>
