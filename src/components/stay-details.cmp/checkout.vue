<template>
  <section class="checkout">
    <div class="checkout-title flex space-between">
      <div class="checkout-title-left">
        <h1>
          <span class="price">${{ stay.price }}</span>
          <span class="night"> / night</span>
        </h1>
      </div>

      <div class="checkout-title-right flex">
        <div class="flex card-rate">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="display: block; height: 14px; width: 14px; fill: #ff385c"
          >
            <path
              d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
           9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
            7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="rating">{{ getRating }}</span> ·
        <button class="review-btn">
          <span> {{ stay.numOfReviews }}</span>
          reviews
        </button>
      </div>
    </div>

    <button @mousemove="getMouseCord()" class="reserve-btn">Reserve</button>
  </section>
</template>

<script>
export default {
  name: "checkout",
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
mounted (){
     window.addEventListener('mousemove', this.onMouseMove)
},
unmounted() {
 document.removeEventListener('mousemove', this.onMouseMove)
},
  computed: {
    getRating() {
      return this.stay.reviewScores.rating / 10;
    },
    methods:{
      getMouseCord(){
        console.log('hel')
      }
    }
  },
};
</script>

<style></style>
