<template>
     <li>
       <router-link :to="`/stay/${stay.id}`">
       <section class="flex-col">
       <div>
           <img src="" alt="imgStay"/>
       </div>
       <div>
            <span> ⭐ {{getRating}} </span>
            <span>  ({{stay.numOfReviews}}) </span>
       </div>
       <div>
             <span>{{ stay.name }}  </span>
       </div>
       <div>
             <span>{{stay.price }}$ / night </span>
       </div>
     </section>
</router-link>
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
  computed:{
    getRating(){
      return (this.stay.reviewScores.rating / 10 )
    }
  }
}
</script>

<style>


</style>