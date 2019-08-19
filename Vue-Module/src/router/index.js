import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import SearchDetail from '@/components/SearchDetail'
import List from '@/components/List'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { // 配置路由，注意要import对应的文件
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/searchDetail',
      name: 'SearchDetail',
      component: SearchDetail
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/*',
      name: 'error',
      component: Error
    }
  ]
})
