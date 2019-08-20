<template>
  <div>
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
        <el-row>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.breadcrumbword}}</el-breadcrumb-item>
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
                <el-button type="info" style="color: white;width: auto" @click="open">点击获取资源分享地址</el-button>
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
        'name': 'Java',
        'content': 'TN互联网企业级实战VIP|____用docker compose编排微服务     |____用Docker Compose编排微服务.docx     |____xshell.exe     |____vip-用docker compose编排微服务.zip     |____vip-用docker compose编排微服务-.mp4     |____vip-docker入门与部署微服务-.mp4     |____docker入门与部署微服务(1).pdf     |____CentOS-7-x86_64-DVD-1511.zip|____文档与源码     |____源码     |____VIP课程课表安排     |____粘包分包现象及解决方案、编解码器源码分析.pptx     |____元旦放假通知.jpg     |____项目专题课程表.jpg     |____秒杀系统.doc     |____秒杀.png     |____控制台异常.txt     |____今晚上课预习资料：netty架构核心组件及线程模型源码分析.pptx     |____高性能序列化协议protobuf及源码分析.pptx     |____副本 软件系统版本持续发布管理.docx     |____分布式专题课程表.png     |____分布式课程表.png     |____大话设计模式.pdf     |____初始消息中间件.docx     |____zookeeper伪分布式搭建.docx     |____zookeeper上课笔记.doc     |____Zookeeper命令使用.doc     |____zookeeper-3.4.9.tar.gz     |____vip2018rocketmqapi.zip     |____tommy_-tuling-teach-dubbo-master.zip     |____tommy_-tuling-enhance-plugin-master _优化版.zip     |____tommy_-tuling-api-gateway-master.zip     |____tomcat 自定义启动部署脚本.zip     |____tl0920.zip     |____tl0903.zip     |____spring-boot-thymeleaf-0.0.1-SNAPSHOT.jar     |____Spring Boot-JPA和Thymeleaf 实践207-12-15.rar     |____MQ性能测试以及容量评估.pptx     |____LicenceServer(v1.3).zip     |____Effective.Java.3rd.Edition.2018.1.pdf|____【赠送项目班】     |____《互联网面试必考之数据结构与算法精讲班》     |____《程序员修炼之道》     |____《【天眼】Java大规模分布式跟踪监控系统班》及源码     |____《JAVA从零开始开发区块链》     |____《APM-性能监控项目特训班》|____07.解决方案专题(完)     |____10-ELK架构与原理分析-赵云     |____09-ELK集群搭建实践-赵云     |____08-kafka设计原理分析-诸葛     |____07-kafka集群搭建与使用.-诸葛     |____06- 调用链系统服务端实现-鲁班     |____05-JDBC与RestAPI调用拦截拦截-鲁班     |____04-RPC调用与接收拦截-鲁班     |____03-WEB 入口拦截与Service拦截-鲁班     |____02-调用链系统架构设计与搭建-鲁班     |____01-调用链系统概述与底层逻辑-鲁班|____06.微服务(完)     |____11-分布式链路跟踪Sleuth详解-诸葛     |____10-分布式集中配置中心Spring Cloud Config详解-诸葛     |____09-微服务统一网关实现框架zuul-诸葛     |____08-Eureka集群&客户端监控，微服务统一网关实现框架zuul-诸葛     |____07-Hystrix的监控与Turbine聚合-诸葛     |____06-Hystrix介绍及服务限流-诸葛     |____05-Ribbon&Feign介绍及使用详解-诸葛     |____04-Eureka源码分析-张飞     |____03-微服务介绍及Eureka服务注册与发现详解-张飞     |____02-Spring boot快速集成第三方技术详解-张飞     |____01-Spring boot快速开始及核心功能介绍-张飞|____05.VIP-项目专题(完)     |____25-双11电商海量数据存储-读写分离各种实现优缺点与解决方案-悟空     |____24-双11电商商品详情页缓存-京东亿级商品详情页缓存方案实践-诸葛     |____23-双11电商秒杀系统-商品详情页优化-诸葛     |____22-双11电商秒杀系统-安全优化与限流防刷-诸葛     |____21-双十一电商分布式会话-商城分布式部署-诸葛     |____20-双11电商高并发秒杀-秒杀系统库存防超卖-诸葛     |____19-双11电商高并发秒杀-秒杀系统缓存控制与对列异步化-诸葛     |____18-双11电商高并发秒杀-秒杀系统限流方案-诸葛     |____17-双十一电商基础业务-交易模块详解-悟空     |____16-双11电商-基础业务-会员&后台模块详解-悟空     |____15-双11电商基本业务-商品模块讲解-悟空     |____14-双11电商系统架构详解-悟空     |____13-电商系统架构发展历程-悟空     |____12-P2P去中心化网络设计与实现-诸葛     |____11-比特币钱包的设计与实现-诸葛     |____10-区块链项目-密码学-诸葛     |____09-区块链项目-比特币的设计与实现-诸葛     |____08-区块链项目-区块链整体结构设计与实现-诸葛     |____07-区块链项目-项目架构与技术点讲解-诸葛     |____06-APM项目-APM存储与图表展示方案实践-鲁班     |____05-APM项目-APM性能日志传输解决方案-鲁班     |____04-APM项目-全方位监测SQL执行性能-鲁班     |____03-APM项目-深度掌握应用性能指标采集方法-鲁班     |____02-APM项目-掌握字节码插桩技术的核心功能-鲁班     |____01-APM项目-如何着手打造公司的全方位APM解决方案-鲁班     |____00-视频|____04.VIP课程-分布式专题     |____35-sharding-jdbc（三）-悟空     |____34-sharding-jdbc（二）-悟空     |____33-sharding-jdbc（一）-悟空     |____32-api&源码分析-悟空     |____31-Rocketmq特性详解-悟空     |____30-RocketMq性能&测试-阿里韩老师     |____29-RocketMq之部署特性与快速开始-悟空     |____28-RocketMq之初识消息中间件-悟空     |____27-Netty之WebSocket协议开发应用实践二（贪吃蛇多人联机网游实现）-鲁班     |____26-Netty之WebSocket协议开发应用实践一-鲁班     |____25-Netty之Http协议开发应用实践（高并发弹幕系统实现）-鲁班     |____24-粘包分包现象及解决方案、编解码器源码分析-张飞     |____23-高性能序列化协议protobuf及源码分析-张飞     |____22-线程模型源码分析-张飞     |____21-IO与NIO线程模型Reactor模型Netty初探-张飞     |____20-企业级Redis JavaApi开发详解-悟空     |____19-Redis Client之Protocol详解&工作坑分享-悟空     |____18-Redis Cluster部署详解和Jedis客户端使用-悟空     |____17-Redis特性和集群特性详解-悟空     |____16-Nosql之Redis的演变过程-悟空     |____15-Dubbo 调用模块详解-鲁班     |____14-Dubbo并发连接底层探究-鲁班     |____13-dubbo底层通信原理与实现探究-鲁班     |____12-《Dubbo 企业级应用进阶》-鲁班     |____11-《快速掌握Dubbo常规应用》-鲁班     |____10-《从0到1整体认知分布式架构》-鲁班     |____09-zookeeper源码分析和运维总结-悟空老师     |____08-zookeeper之zkclient&curator详解-悟空老师     |____07-zookeeper场景讲解（分布式锁）&zkclient使用-悟空老师     |____06-zookeeper 场景介绍与开发-悟空老师     |____05-Zookeeper集群部署& 快速入门-悟空老师     |____04-分布式专题并发编程atomic&collections-悟空老师     |____03-分布式专题并发编程Lock&Tools-悟空老师     |____02-分布式系列并发编程Executor_悟空老师     |____01-分布式系列课程介绍-悟空老师     |____00-视频|____03.VIP课程-性能调优专题     |____国庆VIP作业     |____08-jvm（3）-张飞老师     |____07-jvm（2）-张飞     |____06-jvm（1）-张飞老师     |____05-软件发布管理-鲁班老师     |____04-Tomcat 生产环境配置详解-鲁班老师     |____03-tomcat 线程模型源码分析-鲁班老师     |____02-Nginx（二)-鲁班     |____01-nginx (一)-鲁班老师     |____00-视频|____02.VIP课程-应用框架专题     |____13-java 异常处理-鲁班老师     |____12-java 日志体系-鲁班老师     |____11-api安全-鲁班老师     |____10-分布式架构-李艳鹏     |____09-mybatis 应用与配置-鲁班老师     |____08-mybatis-鲁班老师     |____07-spring mvc3 源码解析-鲁班老师     |____06-spring mvc2 源码解析-鲁班老师     |____05-spring mvc1-悟空老师     |____04-spring 插件     |____03-AOP动态代理-鲁班老师     |____02-spring ioc-鲁班老师     |____01-spring结构概述-鲁班老师     |____00-视频|____01.VIP课程-互联网工程专题     |____10-Idea（二）     |____09-Idea（1)-白起老师     |____08-jenkins-鲁班老师     |____07-git基本命令-鲁班大师     |____06-git 服务搭建与使用（上）-鲁班老师     |____05-maven讲解—鲁班老师     |____04-maven 使用讲解 -鲁班老师     |____03-mysql 一主多从-鲁班老师     |____02-概要设计-鲁班老师     |____01-《人人基因产品》讲解-鲁班老师     |____00-视频\t',
        'shareuser': '测试分享人',
        'shareurl': 'https://pan.baidu.com/s/1RwflRqoBWsJ7PsFGjQavpQ',
        'sharecode': '6dfy'
      },
      total: 0,
      pageNum: 1,
      pageSize: 10
    }
  },
  name: 'Article',
  methods: {
    open () {
      var message = `链接地址：${this.data.shareurl}<br/>提取密码：${this.data.sharecode}`
      this.$alert(message, {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '复制分享链接和提取码',
        callback: action => {
          this.$message({
            type: 'info',
            message: '复制成功'
          })
        }
      })
    },
    back () {
      history.go(-1)
      // $router.back(-1)
    }
  }
}
</script>

<style scoped>

</style>
