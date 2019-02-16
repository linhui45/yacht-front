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
    <slot name="nav">
      <div class="nav">
        <div class="nav-box">
          <h2 @click="tabClick(1)">
            <router-link to="/index" title="搜艇网首页" :class="{'nav-hover':tabFlag===1}">首页</router-link>
          </h2>
          <span></span>
          <h2 @click="tabClick(2)">
            <router-link to="/" title="租游艇限时抢购" :class="{'nav-hover':tabFlag===2}">特价游艇出租
            </router-link>
          </h2>
          <span></span>
          <h2 @click="tabClick(3)">
            <router-link to="/" title="游艇出售" :class="{'nav-hover':tabFlag===3}">游艇出售</router-link>
          </h2>
          <span></span>
          <h2 class="nav-drop" @click="tabClick(4)">
            <router-link to="/" title="游艇资讯"
                         :class="{'nav-hover':tabFlag===4 || tabFlag===41 || tabFlag===42 || tabFlag===43 || tabFlag===44 || tabFlag===45}">
              游艇资讯
            </router-link>
            <ul>
              <li @click="tabClick(41)">
                <router-link to="/" title="游艇资讯">游艇资讯</router-link>
              </li>
              <li @click="tabClick(42)">
                <router-link to="/" title="行业资讯">行业资讯</router-link>
              </li>
              <li @click="tabClick(43)">
                <router-link to="/" title="游艇生活">游艇生活</router-link>
              </li>
              <li @click="tabClick(44)">
                <router-link to="/" title="游艇助手">游艇助手</router-link>
              </li>
              <li @click="tabClick(45)">
                <router-link to="/" title="游艇学院">游艇学院</router-link>
              </li>
            </ul>
          </h2>
          <span></span>
          <h2 @click="tabClick(5)">
            <router-link to="/" title="游艇大全" :class="{'nav-hover':tabFlag===5}">游艇品牌</router-link>
          </h2>
          <span></span>
          <h2 @click="tabClick(6)">
            <router-link to="/" title="游艇码头" :class="{'nav-hover':tabFlag===6}">游艇码头</router-link>
          </h2>
          <span></span>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data() {
      return {
        tabFlag: 1
      }
    },
    methods: {
      tabClick: function (tabFlag) {
        const _this = this;
        _this.tabFlag = tabFlag;
        console.log(_this.tabFlag)
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

  .nav {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #01a8ed;

    .nav-box {
      width: 1200px;
      margin: 0 auto;

      .nav-hover {
        width: 130px;
        height: 40px;
        float: left;
        color: #FFF;
        text-decoration: none;
        background: #01a8ed;
      }

      ul {
        width: 130px;
        background: #039fdf;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        display: none;
        padding-bottom: 10px;
      }

      span {
        width: 1px;
        height: 40px;
        float: left;
        background: url(/static/images/navline.jpg) no-repeat;
      }

      h2 {
        width: 130px;
        height: 100%;
        float: left;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        font-weight: normal;
        position: relative;
        z-index: 1;

        a:link, a:visited {
          width: 130px;
          height: 40px;
          float: left;
          color: #666;
          text-decoration: none;
        }

        a:hover {
          width: 130px;
          height: 40px;
          float: left;
          color: #FFF;
          text-decoration: none;
          background: #01a8ed;
        }
      }

      h2:hover ul {
        top: 0;
        display: block;
        z-index: 1999;
      }
    }
  }
</style>
