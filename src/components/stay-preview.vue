<template>
     <li>
       <div>
       <span>name: {{ stay.name }}  </span>
       <span>  price: {{stay.price }} </span>
       </div>
       <!-- <img :src="toy.img" alt="toy" />
        <div class="btn-action flex">
          <button @click="goToEdit" class="btn btn-primary">edit</button>
          <button @click="goToDetail" class="btn btn-info">details</button>
          <button @click="removeToy(toy._id)" class="btn btn-danger">delete</button>
        </div> -->
  </li>
  
</template>

<script>
export default {
name:'stay-preview',
props:{
    stay:{
        type:Object,
        
    }
},
  methods: {
  },
}
</script>

<style>


</style>