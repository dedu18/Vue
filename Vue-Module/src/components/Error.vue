<template>
  <div bgcolor="white">
    <center><h1>404 Not Found</h1></center>
    <hr>
    <center><p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p></center>
    <!-- 这个标签跳转路由 -->
    <router-link to="/">返回Home页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>

</style>
