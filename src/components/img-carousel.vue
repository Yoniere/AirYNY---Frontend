<template>
  <el-carousel
    :trigger="click"
    indicator-position="inside"
    :autoplay="false"
    height="262.5px"
  
  >
    <el-carousel-item v-for="img in imgs" :key="img">
      <img
        :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${img}`"
        alt="imgStay"
          height="100%"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
    },
  },
};
</script>

<style>
.el-carousel__container {
    position: relative;
    height: 260px;

}


 .el-carousel__item{
    overflow: hidden;
    top: 0;
    left: 0;
    position: absolute;
     aspect-ratio: 3 / 2;

} 
 .el-carousel__button{
  z-index: 10;
   border-radius: 30%;
    width: 0.4em  !important;
    height: 0.4rem !important;
    border-radius: 40%;

}   


 
 .el-carousel {
 font-size: 18px;
  margin: 0;
  text-align: center; 
} 

 

</style>
