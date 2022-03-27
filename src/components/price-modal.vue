<template>
    <div  class="price-modal"> 
           <div class="flex-col">
            <span class="type-header"> The average nightly price is 100$ </span>
            <div class="flex-row range space-between">
            <span> 30  </span>
            <el-slider range   :min="filterByPrice.minPrice" :max="filterByPrice.maxPrice" /> 
            <span>2000 </span>
            </div>
            <div class="flex-row prices space-between">
              <label>
              <span> min-price </span>
            <input class="input-price relative" type="number"  v-model="filterByPrice.minPrice" /> 
            </label> -
              <label>
            <span> max-price </span>
            <input class="input-price relative" type="number"  v-model="filterByPrice.maxPrice" /> 
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
        filterByPrice:{
            maxPrice:2000,
            minPrice:30,
        }

    }
},
methods:{
    setSort(){
        this.$emit('filterByPrice', JSON.parse(JSON.stringify(this.filterByPrice)))
    },
}
}
</script>

<style>

</style>