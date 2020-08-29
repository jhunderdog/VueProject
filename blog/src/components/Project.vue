<template>
  <div class="container mt-5">
    <div class="mt-4">
        <h4>{{포스트들[0].title}}</h4>
        <p>글내용</p>
        <p>날짜</p>
        <hr/>
    </div>
  </div>
</template>

<script>
export default {

    props : {
        포스트들 : Array, 
    }

};
</script>

<style>
</style>