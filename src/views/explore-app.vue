<template>
<app-header class="header-explore" />
  <section class="main-layout2">
    <h1> {{title}}</h1>
    <stay-list :stays="stays"   > </stay-list>
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import stayList from "../components/stay-list.vue";

export default {
  created() {},
  data() {
    return {};
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    title(){
     const filter=  this.$store.getters.filterBy 
     const count = this.$store.getters.stays;
      return filter.country  ? `${count.length} stays in ${filter.country}` : 'explore stays'
    }
  },
  methods: {},
  components: {
    stayList,
    appHeader
  },
};
</script>

<style></style>
