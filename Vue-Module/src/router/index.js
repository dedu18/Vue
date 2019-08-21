import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Article from '@/components/Article'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { // 配置路由，注意要import对应的文件
      path: '/',
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
      path: '/*',
      name: 'error',
      component: Error
    }
  ]
})
