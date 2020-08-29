
<template>
  <div>
      <!-- url에/detail/뒤에적은숫자 === $route.params.id -->
    <h4>상세페이지입니다</h4>
    <h4>{{포스트들[$route.params.id].title}}</h4>
    <p>내용 : ???</p>
  </div>
</template>

<script>
export default {
    name : 'detail',
    props : {
        포스트들 : Array, 
    }
};
</script>

<style>
</style>