<template>
  <div>
    <h3>这是Index页面</h3>
    <li>
      <!-- 这个标签跳转路由 -->
      <router-link to="/">Home</router-link>
    </li>
    <button v-on:click="getInfo">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    getInfo: function () {
      this.axios.get('http://localhost:8081/hello').then((response) => {
        console.log(response)
        alert(response.data)
      }).catch((response) => {
        console.log(response)
      })
      // 手动路径跳转
      this.$router.push({ path: '/list' })
    }
  }
}
</script>

<style scoped>

</style>
