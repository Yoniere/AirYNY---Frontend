<template>
  <!-- justify-center -->
  <section class="filter flex align-center main-layot">
    <div class="main-filter flex space-between align-center">
      <div class="input-container  flex-col">
      <el-input type="text" placeholder="Location" v-model="filterBy.country" />
      </div>
     
     <div class="input-container flex-col">
      <span class="demonstration"></span>
      <el-date-picker
        v-model="stayTime"
        type="daterange"
        range-separator="To"
        start-placeholder="Check in"
        end-placeholder="Check out"
      >
      </el-date-picker >
     </div>
      <div class="input-container flex-col">
      <el-input type="text" placeholder="gustes" v-model="filterBy.gusets" />
      <el-button @click="setFilter">Search</el-button>
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
