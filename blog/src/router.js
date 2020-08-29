// 설정 

// 어떤사람이 홈으로 접속하면 Home.vue 보여줌 
// 어떤사람이 /project 접속하면 Project.vue 보여줌 

import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Project from './components/Project.vue'
import Detail from './components/Detail.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/project',
            name: 'project',
            component: Project 
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail, 
        },
    ]
});
