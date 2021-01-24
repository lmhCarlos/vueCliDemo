<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in items" :key="item">
      <img :src="item"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Application',
  data () {
    return {
      items: [
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
        require('../assets/4.jpg'),
        require('../assets/5.jpg'),
        require('../assets/6.jpg')
      ]
    }
  }
}
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
