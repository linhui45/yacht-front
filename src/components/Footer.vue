<template>
  <div>
    <div class="footer-top">
      <div class="link-box">
        <el-tabs v-model="activeName">
          <el-tab-pane label="友情链接" name="first">
            <div class="link-floor">
              <p>
                <router-link to="http://weibo.com/u/5627432614/home?wvr=5" target="_self" title="搜艇网微博"></router-link>
              </p>
              <ul>
                <li>
                  <router-link to="/" title="三亚度周末游" target="_self">三亚度周末游</router-link>
                </li>
                <li>
                  <router-link to="/" title="三亚游艇" target="_self">三亚游艇</router-link>
                </li>
                <li>
                  <router-link to="/" title="游艇销售" target="_self">游艇销售</router-link>
                </li>
                <li>
                  <router-link to="/" title="深圳游艇出租" target="_self">深圳游艇出租</router-link>
                </li>
                <li>
                  <router-link to="/" title="三亚婚庆公司" target="_self">三亚婚庆公司</router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="游艇品牌" name="second">
            <div class="link-floor">
              <p>
                <router-link to="http://weibo.com/u/5627432614/home?wvr=5" target="_self" title="搜艇网微博"></router-link>
              </p>
              <ul>
                <li>
                  <router-link to="/" title="Amels 遨慕世" target="_self">Amels
                    遨慕世
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Blohm+Voss" target="_self">Blohm+Voss</router-link>
                </li>
                <li>
                  <router-link to="/" title="CRN" target="_self">CRN</router-link>
                </li>
                <li>
                  <router-link to="/" title="Dalla Pieta 戴拉·沛塔" target="_self">Dalla
                    Pieta 戴拉·沛塔
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Ferretti 法拉帝" target="_self">Ferretti
                    法拉帝
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Galeon 加勒王" target="_self">Galeon
                    加勒王
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Beneteau 博纳多" target="_self">Beneteau
                    博纳多
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Marquis 侯爵" target="_self">Marquis
                    侯爵
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Pershing 博星" target="_self">Pershing
                    博星
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="Princess 公主" target="_self">Princess
                    公主
                  </router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="游艇码头" name="third">
            <div class="link-floor">
              <p>
                <router-link to="http://weibo.com/u/5627432614/home?wvr=5" target="_self" title="搜艇网微博"></router-link>
              </p>
              <ul>
                <li>
                  <router-link to="/" title="三亚鸿洲国际游艇会码头" target="_self">三亚鸿洲国际游艇会码头</router-link>
                </li>
                <li>
                  <router-link to="/" title="三亚半山半岛帆船港"
                               target="_self">三亚半山半岛帆船港
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="华润石梅湾国际游艇会"
                               target="_self">华润石梅湾国际游艇会
                  </router-link>
                </li>
                <li>
                  <router-link to="/" title="新埠岛国际游艇会" target="_self">新埠岛国际游艇会</router-link>
                </li>
                <li>
                  <router-link to="/" title="三亚亚龙湾游艇会" target="_self">三亚亚龙湾游艇会</router-link>
                </li>
                <li>
                  <router-link to="/" title="深圳湾游艇会" target="_self">深圳湾游艇会</router-link>
                </li>
                <li>
                  <router-link to="/" title="大梅沙湾游艇会" target="_self">大梅沙湾游艇会</router-link>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="footer-middle">
      <router-link to="/" title="搜游艇企业">搜游艇企业</router-link>
      |
      <router-link to="/" title="搜游艇产品">搜游艇产品</router-link>
      |
      <router-link to="/" title="搜游艇服务">搜游艇服务</router-link>
      |
      <router-link to="/" title="搜游艇出租">搜游艇出租</router-link>
      |
      <router-link to="/" title="搜游艇出售">搜游艇出售</router-link>
      |
      <router-link to="/" title="搜游艇资讯">搜游艇资讯</router-link>
      |
      <router-link to="/" title="搜游艇码头">搜游艇码头</router-link>
      |
      <router-link to="/" title="搜游艇大全">搜游艇大全</router-link>
      |
      <router-link to="/" title="网站地图">网站地图</router-link>
      |
      <router-link to="/" title="公司简介">公司简介</router-link>
      |
      <router-link to="/" title="联系我们">联系我们</router-link>
      |
      <router-link to="/" title="XML地图">XML地图</router-link>
      |
      <router-link to="https://tongji.baidu.com/web/24053873/homepage/index" target="_blank" title="百度统计">百度统计
      </router-link>
    </div>
    <div class="footer-img">
      <p>© 2013-2015 souyacht.com 版权所有：&nbsp;&nbsp;隶属于海南搜艇网络科技有限公司&nbsp;&nbsp;<router-link to="http://www.miitbeian.gov.cn"
                                                                                 target="_blank">琼ICP备15001160号-1</router-link>
      </p>
      <img src="/static/images/copyright/renzheng7.jpg" alt=""/>
      <img src="/static/images/copyright/renzheng6.jpg" alt=""/>
      <img src="/static/images/copyright/renzheng5.jpg" alt=""/>
      <img src="/static/images/copyright/renzheng4.jpg" alt=""/>
      <img src="/static/images/copyright/renzheng3.jpg" alt=""/>
      <img src="/static/images/copyright/renzheng2.jpg" alt=""/>
      <img src="/static/images/copyright/renzheng.jpg" alt=""/>
    </div>
    <p class="footer-info">
      搜<b><router-link to="/" title="三亚游艇出租">三亚游艇出租</router-link></b>,<b>游艇租赁</b>,<b>游艇出租</b>,<b>游艇销售</b>,<b><router-link to="/" title="三亚游艇">三亚游艇</router-link></b>,<b>三亚包船</b>,搜艇网-中国首家游艇O2O一站式服务平台,业务遍布三亚游艇租赁,
      <router-link to="/" title="厦门游艇出租"><strong>厦门游艇出租</strong></router-link>,深圳游艇租赁,广州游艇出租等,打造全中国最权威的游艇销售,出租,租赁,资讯,服务平台门户,实现游艇行业线上线下同步发展三亚,厦门,深圳,
      <router-link to="/" title="广州等游艇租赁"><strong>广州等游艇租赁</strong></router-link>,
      游艇出租,游艇销售,开拓游艇行业互联网营销新时代从搜艇网开始！"要租游艇，到搜艇网"。承接<strong>三亚游艇租赁</strong>,游艇销售,海上包船,商务接待等服务。
      我要上厦门游艇去找厦门游艇出租服务找到<strong>厦门游艇租赁</strong>网就要上游艇出租。<strong>深圳游艇租赁</strong>网公司主营:深圳游艇出租价格、
      深圳游艇出租批发、深圳游艇出租采购,如需订购,请联系我们深圳游艇租赁服务网。厦门最好游艇服务就上<strong>厦门游艇出租</strong>游艇，找游艇租赁上<strong>
      <router-link to="/" title="厦门游艇租赁">厦门游艇租赁</router-link></strong>。
      广东深圳游艇出租,深圳鹏城游艇出租,视察深圳游船,南部深圳游艇出租,<b>深圳</b>、<b>厦门</b>、<b>广州</b>、<b>三亚</b>、<b>游艇</b>、<b>包船</b>、<b>销售</b>、<b>租赁</b>、<b>出租</b>...国内领先新型复合材料<strong>游艇出租</strong>,豪华<strong>游艇租赁</strong>服务一流!,游艇俱乐部及<strong>游艇销售</strong>纳广而成其博大。
      海南三亚天气,<em>三亚游艇</em>旅游攻略,到<em>三亚游艇出租</em>地图,三亚的游艇网罗游艇出租,三亚游艇租赁业务进度的提升,
      游艇租赁的价格主要是看租赁的游艇大小不同而不同,基本上是越大越贵！听说厦门,三亚还有上海的毅宏希仕会游艇俱乐部就有提供游艇出租业务,你可以了解看看。2016-03-01
    </p>
    <div id="gg_img" style="display:none;"><router-link to="/" target="_blank" title="游艇出租"><img
      src="${contextPath}/static/images/qpad.jpg" width="1200" height="500"/></router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeName: 'first'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .footer-top {
    width: 100%;
    background: #F8F8F8;
    margin-top: 20px;
    overflow: hidden;
    border-top: #f1f1f1 1px solid;

    .link-box {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }

    .link-floor {
      width: 1200px;
      overflow: hidden;
      padding-bottom: 10px;
      float: left;

      p {
        width: 35px;
        height: 47px;
        float: right;
        background: url(/static/images/weibo.png) no-repeat right;

        a {
          display: block;
          width: 35px;
          height: 47px;
        }

        a:hover {
          background: url(/static/images/weibo_hover.png) no-repeat center right;
        }
      }

      ul li {
        float: left;
        padding-right: 10px;
        height: 13px;
        line-height: 13px;
        margin: 10px 0;

        a {
          background: url(/static/images/line_fuwu.jpg) repeat-y right;
          padding-right: 10px;
          height: 13px;
          line-height: 13px;
          overflow: hidden;
          display: block;
          float: left;
        }
      }
    }
  }

  .footer-middle {
    width: 100%;
    height: 36px;
    background: #333;
    line-height: 30px;
    text-align: center;
    color: #FFF;
    overflow: hidden;

    a:visited {
      color: #FFF;
      text-decoration: none;
    }

    a:link {
      color: #FFF;
      text-decoration: none;
    }
  }

  .footer-img {
    width: 100%;
    height: 62px;
    text-align: center;
    overflow: hidden;
    padding-bottom: 15px;
    background: #FFF;
    padding-top: 15px;

    img {
      margin-left: 18px;
      text-align: center;
    }

    p {
      padding-bottom: 5px;
    }
  }
  .footer-info{
    height: 22px;
    line-height: 22px;
    width: 495px;
    margin: 0 auto;
    overflow: hidden
  }
</style>
