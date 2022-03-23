<template>
  <h1></h1>
</template>

<script>
export default {
  data() {
    return {
      stay: null,
    };
  },

  async created() {
    const id = this.$route.params.id;
    const stay = await stayService.get
  },
};
</script>

<style></style>
