<template>
<app-header class="header-explore" />
  <section class="main-layout2">
    <div class="explore-buttons flex">
    <button @click="ChangeModalPrice" class="sort-btn relative"> price </button>
       <div  v-if="modalPrice" class="price-modal"> 
           <div class="flex-col">
            <span class="type-header"> The average nightly price is 100$ </span>
            <div class="flex-row range space-between">
            <span> 30  </span>
            <input type="range" min="30" max="10000" /> 
            <span>10000 </span>
            </div>
            <div class="flex-row prices space-between">
              <label>
              <span> min-price </span>
            <input class="input-price relative" type="number" value="30" /> 
            </label> -
              <label>
            <span> max-price </span>
            <input class="input-price relative" type="number" value="10000" /> 
            </label>
            </div>
            </div>
            <button class="save-btn">save </button>
    </div>

    <button  @click="ChangeModalType" class="sort-btn"> Type of place </button>
  <div v-if="modalType" class="modal-container flex-col">
       <div class="type-filter">
         <label class=" type-filter-container flex">
           <div class="flex-col">
            <span class="type-header">Entire place</span>
            <span class="type-title">Have a place to yourself</span>
            </div>
            <input type="checkbox" id="entire place" value="Entire place"  class="checkmark" />
         </label>
        </div>
      <div class="type-filter">
       <label class="type-filter-container flex">
         <div class="flex-col">
           <span class="type-header">Private room</span>
           <span class="type-title"> Have your own room and share some common spaces </span>
           </div>
           <input type="checkbox" id="private room" value="Private room" class="checkmark" />
         </label>
         </div>

        <div class="type-filter">
         <label class="type-filter-container flex">
           <div class="flex-col">
           <span class="type-header">Hotel room</span>
            <span class="type-title"> Have a private or shared room in a boutique hotel, hostel, and more </span>
            </div>
           <input type="checkbox" id="hotel room" value="Hotel room"  class="checkmark" />
          </label>
          </div>
          
          <div class="type-filter">
          <label class="type-filter-container flex">
            <div class="flex-col">
           <span class="type-header">Shared room</span>
           <span class="type-title"> Stay in a shared space, like a common room </span>
           </div>
           <input type="checkbox" id="shared room" value="Shared room"  class="checkmark" />
          </label>
           </div>
          <div class="type-save flex space-between">
            <button class="save-btn">Clear</button><button class="save-btn">Save</button>
        </div>
     </div>
</div>
  
   

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
    return {
      modalPrice:false,
      modalType:false,
    };
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
  methods: {
    ChangeModalPrice(){
      this.modalPrice = !this.modalPrice
    },
    ChangeModalType(){
      this.modalType = !this.modalType
    }
  },
  components: {
    stayList,
    appHeader
  },
};
</script>

<style></style>
