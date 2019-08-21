<template>
  <el-container>
    <el-header style="height: 1px;align-self: left;margin: 1px">
      <div>
        <a style=font-size:4px;color:#337ab7;font-weight:bold>程序猿的百度云搜索引擎</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://me.csdn.net/wulianzhazha" target="_blank">[站长博客]</a>&nbsp;&nbsp;
        <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://me.csdn.net/wulianzhazha" target="_blank">[GitHub]</a>&nbsp;&nbsp;
        <a style=font-size:4px;color:#ff0000;font-weight:bold href="https://www.oschina.net/tweets" target="_blank">[摸鱼专用网站]</a>
      </div>
      <el-row type="flex" justify="center" >
        <el-input v-model="keyword" placeholder="请输入您想要搜索的资源" style="font-size:15px;width:300px;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)" clearable/>
        <el-button type="primary" @click="onSearch" icon="el-icon-search">搜索一下</el-button>
      </el-row>
      <el-row>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.breadcrumbword}} - 搜索结果</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row>
        <i class="el-icon-search">搜索 <a style="color: red">{{this.breadcrumbword}}</a> 的结果  (总共搜索到 <a style="color: red">{{this.total}}</a> 条记录)</i>
      </el-row>
    </el-header>
    <el-divider></el-divider>
    <br/><br/><br/><br/><br/><br/><br/>
    <el-main>
      <el-table
        :data="tableData"
        :show-header="false"
        style="width: 100%">
        <template slot="empty">
          未查询到结果，请换个关键字重新搜索！
        </template>
        <el-table-column
          width="180">
          <template slot-scope="scope">
            <!--<a style="color: red" :href="'/article/' + scope.row.id">{{scope.row.name}}</a>-->
            <router-link style="color: red"  :to="{ path: '/article'}" @click.native="handleArticleId(scope.row.id)">{{scope.row.name}}</router-link>
            <br/>
            <a style="font-weight:bold">内容简介：</a><a v-html='scope.row.name'></a>
          </template>
        </el-table-column>
      </el-table>
      <div class="paginationClass">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 50]"
          :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="this.total">
        </el-pagination>

      </div>
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
      keyword: '',
      keywordPage: '',
      breadcrumbword: '',
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 10
    }
  },
  name: 'Search',
  methods: {
    onSearch: function () {
      if (this.keyword.length === 0 || this.keyword.trim().length === 0) {
        alert('大佬请输入要查询的资料')
      } else {
        this.handleRequest(this.keyword, this.pageNum, this.pageSize)
        this.breadcrumbword = this.keyword
      }
    },
    handlePageChange: function () {
      if (this.breadcrumbword.length === 0 || this.breadcrumbword.trim().length === 0) {
        alert('大佬请重新输入要查询的资料')
      } else {
        this.handleRequest(this.breadcrumbword, this.pageNum, this.pageSize)
      }
    },
    handleSizeChange: function (size) {
      this.pageSize = size
      this.handlePageChange()
    },
    handleCurrentChange: function (currentPage) {
      this.pageNum = currentPage
      this.handlePageChange()
    },
    handleRequest: function (keyword, pageNum, pageSize) {
      this.breadcrumbword = keyword
      this.axios.get('http://localhost:8081/article', {
        params: {
          keyword: keyword,
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then((response) => {
        this.tableData = response.data.records
        this.pageNum = response.data.current
        this.pageSize = response.data.size
        this.total = response.data.total
      }).catch((response) => {
        alert('站长正在赶过来的路上')
      })
    },
    handleArticleId: function (id) {
      window.localStorage.setItem('articleid', id)
    }
  },
  mounted () {
    this.breadcrumbword = window.localStorage.getItem('keyword')
    this.handleRequest(this.breadcrumbword, this.pageNum, this.pageSize)
  }
}
</script>

<style scoped>

</style>
