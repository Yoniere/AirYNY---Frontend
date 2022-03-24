<template>
  <li class="stay-preview-container" @click="goToDeatails">
    <section class="stay-preview clickable">
     <div class="stay-preview-gallery">

     <span class="icon-heart"> 
                 <svg
         viewBox="0 0 32 32"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true"
         role="presentation"
         focusable="false"
         style="
          display: block;
          fill: transparent;
          height: 24px;
          width: 24px;
          stroke-width: 2;
          overflow: visible;
          stroke: black ">
          <path
          d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791
           0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949
            2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
        </svg>
      </span>
     <img-carousel :imgs="stay.imgUrls" class="card-img"/>
     </div>
    <article class="flex-col">
      <div class="flex-row card-rate">
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
      </svg>{{getRating}} ({{stay.numOfReviews}})
      </div>
      <p class="card-detail flex-col">
               <span>{{ stay.propertyType}} <span> &#183;</span> {{stay.address.city}}  </span>
               <span>{{stay.name }} </span>
              <span class="bold">${{stay.price }}/night </span>
      </p>
    </article>
       </section>
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
    goToDeatails(){
      this.$router.push(`/stay/${this.stay.id}`)

    }
      
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

