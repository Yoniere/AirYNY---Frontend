<template>
  <el-carousel :trigger="click" indicator-position="outside" height="200px" :autoplay="false"  >
    <el-carousel-item v-for="img in imgs" :key="img" >
 <img :src ="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648031221/airyny/${img}`" alt="imgStay" /> 
    </el-carousel-item>
  </el-carousel>
</template>



<script>


export default {
 props:{
    imgs:{
        type:Array,
        
    }
},
}
</script>


<style>
.el-carousel {
  font-size: 18px;
  margin: 0;
  text-align: center;
}


</style>
