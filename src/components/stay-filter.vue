<template>
  <!-- filter to the header- -->
  <section class="filer-header">
    <div class="search-stay-place">
      <input
        type="text"
        placeholder="Location"
        v-model="filterBy.country"
      />|
      <span class="demonstration">stay time</span>
      <el-date-picker
        v-model="stayTime"
        type="daterange"
        range-separator="To"
        start-placeholder="Check in"
        end-placeholder="Check out"
      >
      </el-date-picker
      >|
      <button>Search</button>
    </div>
  </section>
</template>

<script>
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
              start.setTime(
                start.getTime() - 3600 * 1000 * 24 * 7
              );
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      filterBy: {
        country: "",
      },
      stayTime: "",
    };
  },
  methods: {
    setFilter() {
      this.$emit(
        "setFilter",
        JSON.parse(JSON.stringify(this.filterBy))
      );
    },
  },
};
</script>

<style></style>
