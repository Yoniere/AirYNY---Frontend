<template>
    <div  class="price-modal"> 
           <div class="flex-col">
            <span class="type-header"> The average nightly price is 100$ </span>
            <div class="flex-row range space-between">
            <span> 30  </span>
            <input type="range" min="30" max="2000" v-model="sortBy.minPrice" /> 
            <span>2000 </span>
            </div>
            <div class="flex-row prices space-between">
              <label>
              <span> min-price </span>
            <input class="input-price relative" type="number"  v-model="sortBy.minPrice" /> 
            </label> -
              <label>
            <span> max-price </span>
            <input class="input-price relative" type="number"  v-model="sortBy.maxPrice" /> 
            </label>
            </div>
            </div>
            <button class="save-btn" @click="setSort">save </button>
    </div>
</template>

<script>
export default {
data(){
    return{
        sortBy:{
            maxPrice:2000,
            minPrice:30,
        }

    }
},
methods:{
    setSort(){
        this.$emit('sortByPrice', JSON.parse(JSON.stringify(this.sortBy)))
    }
}
}
</script>

<style>

</style>