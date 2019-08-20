<template>
  <el-container>
    <div v-title data-titile="百度云"></div>
    <el-header style="height: 1px;align-self: left;margin: 1px">
      <div>
        <a style=font-size:4px;color:#337ab7;font-weight:bold>程序猿的百度云搜索引擎</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://me.csdn.net/wulianzhazha">[站长博客]</a>&nbsp;&nbsp;
        <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://me.csdn.net/wulianzhazha">[GitHub]</a>&nbsp;&nbsp;
        <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://www.oschina.net/tweets">[摸鱼专用网站]</a>
      </div>
    </el-header>
    <el-divider></el-divider>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <el-main>
      <div style=font-size:30px;color:#1caae3;font-weight:bold >百度云搜索</div>
      <br/><br/>
      <el-row :gutter="20">
        <el-input v-model="keyword" placeholder="请输入您想要搜索的资源" style="font-size:20px;width:400px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)" clearable/>
        <el-button type="primary" @click="onSearch" icon="el-icon-search">搜索一下</el-button>
        <br/><br/>
        <el-row :gutter="20">
          <a style=font-size:15px;color:#ff0000;font-weight:bold>搜索热点：</a>
          <el-link type="info" href="http://www.baidu.com/s?wd=Java&cl=3" target="_blank" style="color: #338ecf">Java</el-link>
          <el-link type="info" href="http://www.baidu.com/s?wd=SpringBoot&cl=3" target="_blank" style="color: #338ecf">SpringBoot</el-link>
          <el-link type="info" href="http://www.baidu.com/s?wd=SpringCloud&cl=3" target="_blank" style="color: #338ecf">SpringCloud</el-link>
          <el-link type="info" href="http://www.baidu.com/s?wd=SQL&cl=3" target="_blank" style="color: #338ecf">SQL</el-link>
          <el-link type="info" href="http://www.baidu.com/s?wd=Python&cl=3" target="_blank" style="color: #338ecf">Python</el-link>
          <el-link type="info" href="http://www.baidu.com/s?wd=Hadoop&cl=3" target="_blank">Hadoop</el-link>
          <el-link type="info" href="http://www.baidu.com/s?wd=ElasticSearch&cl=3" target="_blank">ElasticSearch</el-link>
        </el-row>
      </el-row>
    </el-main>
    <el-footer>
      <h6>
        Copyright © 2012-2020 百度云搜索 版权所有<br/>
        免责申明：本站点是演示站点，所有百度云链接资源采集自互联网，然后自动生成网页链接;<br/>
        如侵犯您的合法权益，请联系站长删除下线处理。
      </h6>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  name: 'Index',
  methods: {
    onSearch: function () {
      if (this.keyword.length === 0 || this.keyword.trim().length === 0) {
        alert('大佬请输入要查询的资料')
      } else {
        // 手动路径跳转
        this.$router.push({ path: '/search' })
      }
    }
  }
}
</script>

<style type="text/css">
  /*
      找到html标签、body标签，和挂载的标签
      都给他们统一设置样式
  */
  html,body,#app,.el-container{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
</style>
