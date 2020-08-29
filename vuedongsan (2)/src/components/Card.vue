<template>
  <div class="col-md-6">
    <img :src="원룸들.image" width="100%"/>
    <h4>{{원룸들.title}}</h4>
    <p>상품가격 : {{ 원룸들.price }}</p>
  </div>
</template>

<script>
export default {
    props : {
        인삿말 : String,
        원룸들 : Object,
    }
};
</script>

<style>
</style>