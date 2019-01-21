<template>
  <div>
    <div class="header-box">
      <div class="top-box">
        <div class="top-left-box">
          <router-link to="/">搜艇网</router-link>
          ，
          <strong>
            <router-link to="/" title="三亚游艇租赁">三亚游艇租赁</router-link>
          </strong>,
          <strong>
            <router-link to="/" title="三亚游艇出租">三亚游艇出租</router-link>
          </strong>,
          <strong>
            <router-link to="/" title="游艇销售">游艇销售</router-link>
          </strong>,
          <strong>
            <router-link to="/" title="三亚游艇">三亚游艇</router-link>
          </strong>,
          <strong>
            <router-link to="/" title="三亚包船">三亚包船</router-link>
          </strong>,全国首家游艇O2O一站式服务平台！
        </div>
        <div class="top-right-box">
          <ul>
            <li><img src="/static/icon/icon03.jpg" alt="用户注册"/>
              <router-link to="/" id="register">用户注册</router-link>
            </li>
            <li><span>|</span><img src="/static/icon/icon04.jpg" alt="会员登录"/>
              <router-link to="/" id="login">会员登录</router-link>
            </li>
            <li><span>|</span><img src="/static/icon/icon06.jpg" alt="咨询热线"/>咨询热线：<b>18876987699</b></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="logo-box">
      <h1><a href="javascript:" title="搜艇网|"><img src="" alt="缺少图一个logo样式"/></a></h1><span></span>
      <em><img src="/static/images/flash.jpg" alt="">
        <embed/>
      </em>
      <div class="wx-logo">
        <img style=" margin-top:3px;" src="" alt="缺少客服微信logo"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    methods: {
      on: function () {
        window.open("localhost:8089/yacht/hello");
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../common/style/theme";

  .top {
    height: 0;
  }

  .header-box {
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    background: #fafafa;
    height: 36px;

    .top-box {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      line-height: 36px;
    }

    .top-left-box {
      height: 100%;
      float: left;
    }

    .top-right-box {
      height: 100%;
      float: right;

      ul li {
        overflow: hidden;
        color: #e4dfe4;
        float: left;

        img {
          padding-right: 10px;
          margin-top: 10px;
          float: left;
        }

        span {
          color: #e4dfe4;
          padding: 0 10px;
          float: left;
        }
      }
    }
  }

  .logo-box {
    width: 1200px;
    height: 111px;
    margin: 0 auto;

    h1 {
      width: 178px;
      height: 54px;
      float: left;
      margin: 27px 0 0 0;
      display: inline;
    }

    span {
      width: 33px;
      height: 54px;
      float: left;
      margin-top: 27px;
      background: url(/static/images/topl.jpg) no-repeat;
    }

    em {
      height: 54px;
      float: left;
      margin-top: 27px;
    }

    .wx-logo {
      height: 100%;
      float: right;
    }
  }
</style>
