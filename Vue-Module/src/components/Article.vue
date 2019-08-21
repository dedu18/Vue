<template>
  <div>
    <el-container>
      <el-header style="height: 1px;align-self: left;margin: 1px">
        <div>
          <a style=font-size:4px;color:#337ab7;font-weight:bold>程序猿的百度云搜索引擎</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://me.csdn.net/wulianzhazha" target="_blank">[站长博客]</a>&nbsp;&nbsp;
          <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://me.csdn.net/wulianzhazha" target="_blank">[GitHub]</a>&nbsp;&nbsp;
          <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://www.oschina.net/tweets" target="_blank">[摸鱼专用网站]</a>
        </div>
        <el-row>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ this.data.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
      </el-header>
      <el-divider></el-divider>
      <br/><br/><br/><br/><br/><br/><br/>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-card shadow="always" style="align: left">
              <el-row>
                <i class="el-icon-s-grid">资源明细</i>
              </el-row>
              <el-divider></el-divider>
              <el-row>
                <strong>资源名称：</strong>{{ this.data.name }}
              </el-row>
              <el-row>
                <strong>资源内容：</strong><br/>
                <a v-html='this.data.content' />
              </el-row>
              <el-row>
                <strong>免责申明：</strong>
                <strong>{{ this.data.name }}</strong> 由分享人 <strong>{{ this.data.shareuser }}</strong> 上传到百度网盘。此资源从网络上非人工爬取，只作交流和学习使用。本网站本身不储存任何资源文件，其资源文件的安全性和完整性需要您自行判断，如侵犯您权益，请联系站长下线处理！
              </el-row>
              <br/>
              <el-row>
                <el-button id="clipboardBtn" type="info" style="color: white;width: auto" @click="open">点击获取资源分享地址</el-button>
              </el-row>
              <br/>
              <el-row>
                <el-button type="info" style="color: white;align: left" @click="back">返回上一页</el-button>
              </el-row>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <el-row>
                <i class="el-icon-menu">相关推荐</i>
              </el-row>
              <el-divider></el-divider>
              推荐列表
            </el-card>
          </el-col>
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
    <!--<el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">-->
      <!--<div-->
        <!--style="{-->
        <!--height: 100%;-->
        <!--width: 100%;-->
        <!--background-color: #f2f5f6;-->
        <!--box-shadow: 0 0 6px rgba(0,0,0, .12);-->
        <!--text-align: center;-->
        <!--line-height: 40px;-->
        <!--color: #1989fa;-->
      <!--}"-->
      <!--&gt;-->
        <!--返回顶部-->
      <!--</div>-->
    <!--</el-backtop>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: '',
      breadcrumbword: '',
      data: {
        'name': '',
        'content': '',
        'shareuser': '',
        'shareurl': '',
        'sharecode': ''
      }
    }
  },
  name: 'Article',
  methods: {
    open () {
      var message = '复制这段内容后打开百度网盘手机App，操作更方便哦 链接:' + this.data.shareurl + '提取码:<strong style="color: red">' + this.data.sharecode + '</strong>'
      this.$confirm(message, '查看时请先复制提取码', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '立即查看',
        cancelButtonText: '取消'
      }).then(() => {
        window.open(this.data.shareurl, '_blank')
        // window.location.href = this.data.shareurl
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '取消输入'
        // })
      })
    },
    back () {
      history.go(-1)
      // $router.back(-1)
    },
    handleRequest: function (articleid) {
      var url = 'http://localhost:8081/article/' + articleid
      this.axios.get(url).then((response) => {
        this.data.name = response.data.name
        this.data.content = response.data.content
        this.data.shareuser = response.data.shareuser
        this.data.shareurl = response.data.shareurl
        this.data.sharecode = response.data.sharecode
      }).catch((response) => {
        alert('站长正在赶过来的路上')
      })
    }
  },
  mounted () {
    var articleid = window.localStorage.getItem('articleid')
    this.handleRequest(articleid)
  }
}
</script>

<style scoped>

</style>
