<template>
  <div class="header-box">
    <el-header class="news_tnav_box map_tnav_box">
      <dt><a href="javascript:;">搜艇网</a>，
        <strong><a href="javascript:;" title="三亚游艇租赁">三亚游艇租赁</a></strong>,
        <strong><a href="javascript:;" title="三亚游艇出租">三亚游艇出租</a></strong>,
        <strong><a href="javascript:;" title="游艇销售">游艇销售</a></strong>,
        <strong><a href="javascript:;" title="三亚游艇">三亚游艇</a></strong>,
        <strong><a href="javascript:;" title="三亚包船">三亚包船</a></strong>,全国首家游艇O2O一站式服务平台！
      </dt>
      <dd class="top_zhuce">
        <ul>
          <li><img src="/static/icon/icon03.jpg"/><a href="javascript:;" id="zhuce">用户注册</a></li>
          <li><span>|</span><img src="/static/icon/icon04.jpg"/><a href="javascript:;" id="denglu">会员登录</a></li>
          <li><span>|</span><img src="/static/icon/icon06.jpg"/>咨询热线：<b>18876987699</b></li>
        </ul>
      </dd>
    </el-header>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    methods:{
      on:function () {
        window.open("localhost:8089/yacht/hello");
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../common/style/theme";

  .header-box {
    background: $head-bgc;
    background-image: -webkit-linear-gradient(#000, #121212);
    background-image: linear-gradient(#000, #121212);
    width: 100%;

  }
</style>
