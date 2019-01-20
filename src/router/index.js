import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home' // 导入layouts.vue 组件
import HelloWorld from '../components/HelloWorld' // 导入layouts.vue 组件

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',  //访问路径
      name: 'Home', // 路径名
      component: Home //访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    },{
      path: '/',  //访问路径
      name: 'HelloWorld', // 路径名
      component: HelloWorld //访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    }
  ]
})
