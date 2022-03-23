<template>

        <h1>Explore Page</h1>
    <section class="main-layout" >
        <stay-list :stays="stays" > </stay-list>
    </section>
</template>

<script>

import stayList from '../components/stay-list.vue'


export default {
    created(){
    },
    data() {
        return {
        }
    },
    computed: {
        stays() {
            return this.$store.getters.stays
        },

    },
    methods: {

    },
      components: {
    stayList,
  },
}
</script>

<style>

</style>