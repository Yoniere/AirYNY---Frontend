<template>
  <header class="main-header">
    <h1 class="logo">Airyny</h1>

    <div class="search-stay-place">
      <input type="text" placeholder="Location" />|
      <span class="demonstration">stay time</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="Check in"
        end-placeholder="Check out"
      >
      </el-date-picker
      >|
    </div>
  </header>
  <hr />
</template>

<script>
import { ref } from "vue";

export default {
  name: "stay-header",
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(
                start.getTime() - 3600 * 1000 * 24 * 7
              );
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
    };
  },
};
</script>

<style></style>
