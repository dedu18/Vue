import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Search from '@/components/Search'
import List from '@/components/List'
import Article from '@/components/Article'
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
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
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
