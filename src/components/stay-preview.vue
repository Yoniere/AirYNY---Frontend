<template>
     <li>
       <router-link :to="`/stay/${stay.id}`">
       <section class="flex-col stay-card">
       <div>
       <img-carousel :imgs="stay.imgUrls"/>
       </div>
       <div class="flex-row">
         <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style="
          display: block;
          height: 14px;
          width: 14px;
          fill: #FF385C">
        <path
          d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
           9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
            7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
          fill-rule="evenodd"
        ></path>
      </svg>{{getRating}}
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
  import imgCarousel from '../components/img-carousel.vue'
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
  },
  components:{
    imgCarousel

  }
}
</script>

<style>


</style>

