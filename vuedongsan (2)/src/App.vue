<template>
  <div id="app">
<!-- 
    1. 밑에데이터를 꽂아넣고싶으면 {{데이터이름}}
    2. 밑에데이터를 꽂아넣고싶으면 :속성명="데이터이름"
    3. v-for="작명 in 데이터" v-bind:key=""
    4. 긴HTML을 짧은단어 하나로 축약할 때 component
    - vue파일만들고 HTML담기 
    - import하고 등록하고 갖다쓰기 
    5. 부모컴포넌트 -> 자식컴포넌트로 데이터전송할 때 props
    - 보내고 등록하고 갖다쓰기 
    6. v-on:click=""
    상식) 데이터를 변경하면 데이터와관련된 HTML들은 자동으로 재렌더링됨   
 -->

    <!-- UI만드는법 : HTMLCSS로 UI미리만들어놓고 숨겼다가
    버튼누르거나 하면 보여줌  -->
<!-- + vue/react 방식 : 1. 현재 UI가 보이는 상태를 데이터로 저장해둠 
// 2. 그 상태가 true면 모달창 보여주세요~ 라고 작성하면 끝 -->
    
    <!-- <button v-on:click="모달창열렸니 = true">모달창열기</button> -->

<!-- 모달창열렸니가 true면 이div보여주셈 -->
<transition name="투명도">
    <div class="white-bg" v-if="모달창열렸니 == true">
      <div class="row">
        <div class="col-md-6">
          <img :src="원룸들[몇번째눌렀니].image" width="100%">
        </div>
        <div class="col-md-6 mt-4">
          <h4>{{원룸들[몇번째눌렀니].title}}</h4>
          <p>상품가격 : {{원룸들[몇번째눌렀니].price}}</p>

          <input v-model="몇개월" type="range" class="form-control-range" min="1" max="12" >
          <p>선택한 개월 수 : {{몇개월}}</p>
          <p>총액 : {{  }}</p>


          <button>주문하기</button>
          <button v-on:click="모달창열렸니 = false">닫기</button>
        </div>
      </div>
    </div>
</transition>



    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <li v-on:click="sortPrice">가격순정렬</li>
          <li>가나다순정렬</li>
          <li v-on:click="sortBack">다시원래대로</li>
        </div>
        <div class="col-md-10">
          <div class="row">
            <Card v-on:click.native="showModal(i)" :원룸들="원룸들[i]" v-for="(작명,i) in 원룸들" v-bind:key="i" />
            
            
            <!-- <Card v-on:click.native="showModal(0)" :원룸들="원룸들[i]" />
            <Card v-on:click.native="showModal(1)" :원룸들="원룸들[i]" />
            <Card v-on:click.native="showModal(2)" :원룸들="원룸들[i]" /> -->
            
            
            
            <!-- <Card :원룸들="원룸들[1]" />
            <Card :원룸들="원룸들[2]" />
            <Card :원룸들="원룸들[3]" />
            <Card :원룸들="원룸들[4]" /> -->
            <!-- <Card :보낼이름="밑의데이터이름" 밑에있는 인삿말데이터를 Card.vue로 보내주세요 /> -->

          </div>
        </div>
      </div>
    </div>


    <!-- <p :style="스타일" >{{블로그글}}</p>
    <h4 v-for="작명 in 블로그글들" v-bind:key="작명">{{작명}}</h4>-->
    <!-- <div v-for="작명 in posts" v-bind:key="작명">
      <h4>{{작명.title}}</h4>
      <p>{{posts[0].date}}</p>
    </div>

    <h4>{{posts[1].title}}</h4>
    <p>{{posts[1].date}}</p> -->


  </div>
</template>

<script>


// import HelloWorld from './components/HelloWorld.vue'
import Data from './assets/data.js'
import Card from './components/Card.vue'




export default {
  name: "App",
  data() {
    return {
      몇개월 : 0,
      몇번째눌렀니 : 1,
      모달창열렸니 : false,
      인삿말 : '안녕?!!!!',
      원룸들 : Data,
      원룸들원본 : [...Data], //[{} {} {}]

      // 블로그글: "강남역 추천 맛집",
      // 블로그글들: ["글1", "글2", "글3"],
      // //[{} {} {}]
      // posts: [
      //   {
      //     title: "오늘의 일기",
      //     date: "4월 20일",
      //   },
      //   {
      //     title: "수분크림 추천",
      //     date: "3월 4일",
      //   },
      //   {
      //     title: "강남 맛집 후기",
      //     date: "2월 22일",
      //   },
      // ],
    };
  },
  components: {
    Card : Card,
  },


  methods : {
    showModal(a){
      this.모달창열렸니 = true;
      this.몇번째눌렀니 = a;
    },
    sortBack(){
      this.원룸들 = [...this.원룸들원본];
    },
    sortPrice(){
      //원룸들이라는 데이터를 가격순으로 정렬해주셈 
      //원룸들 //[{}, {}, {}, {}]

      this.원룸들.sort(function(a,b){
        return a.price - b.price 
      });

      // var 어레이 = [2,3,5,1];
      // 어레이.sort(function(a,b){
      //   return a - b   
      // });
      // console.log(어레이)
      
    }  
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.투명도-enter { opacity: 0; }
.투명도-enter-to { opacity: 1; }
.투명도-enter-active { transition : all 0.5s }

.투명도-leave { transform: translateY(0px); }
.투명도-leave-to { transform: translateY(2000px); }
.투명도-leave-active { transition : all 0.5s }




.white-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 5;
}
</style>
