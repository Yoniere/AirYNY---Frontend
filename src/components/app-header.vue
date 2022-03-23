<template>
  <header class="main-header main-layout">
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
      <div
        role="button"
        tabindex="0"
        aria-expanded="false"
        data-testid="structured-search-input-field-guests-button"
      >
        <div class="_1qqq7vb">
          <div class="_snpd7k">Guests</div>
          <div class="_suql0c">Add guests</div>
        </div>
      </div>
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
