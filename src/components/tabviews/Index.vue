<template>
  <div>
    <div class="commodity">
      <div class="container">
        <swiper class='swiImgs' :options="swiperOption" v-if="commodity.length!=0">
          <swiper-slide v-for="(item, index) in commodity" data-index="index" :key="index" class="item">
            <img class='swiImg' :src='item' />
          </swiper-slide>
          <div class="swiper-scrollbar"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <!-- <div class="swiper-pagination" v-for="(item,index) in detailimages" :key="index" slot="pagination"></div> -->
        </swiper>
        <span class='swiText' v-if='commodity'>{{imgIndex}}/{{commodity.length}}</span>
      </div>
    </div>

  </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    require('swiper/dist/css/swiper.css')
    export default {
      name: "Index",
      components: {
        swiper,
        swiperSlide
      },
      data() {
        return {
          commodity: [
            "/static/upload/banner/2018-03-01/2018-03-01_17_38_32.jpg",
            "/static/upload/banner/2018-02-11/2018-02-11_16_41_01.jpg",
            "/static/upload/banner/2019-02-13/2017-12-08_18_39_25.jpg"
          ],
          imgIndex: 1,
          realIndex:'',
          swiperOption: {
            notNextTick: true,//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            loop: true,//循环
            initialSlide: 0,//设定初始化时slide的索引
            autoplay: {//自动播放
              delay: 1500,
              stopOnLastSlide: false,
              disableOnInteraction: false
            },
            speed: 800,//滑动速度
            direction: "horizontal",//滑动方向
            grabCursor: true,//小手掌抓取滑动
            on: {//滑动之后回调函数
              slideChangeTransitionStart: function () {
                this.imgIndex = this.realIndex + 1;  //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
              },
            },
            pagination: {//分页器设置 
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets"
            }
          }
        }
      },

      created() {

        this.swiperOption.autoplay = this.commodity.length != 1 ? { //控制只有一张图片的时候不自动轮播

          delay: 1500,

          stopOnLastSlide: false,

          disableOnInteraction: false

        } : false;
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .commodity {

    background: #f5f5f5;

    .container {

      position: relative;

      .swiText {

        position: absolute;

        height: 0.5rem;

        width: 0.5rem;

        bottom: 0.2rem;

        right: 0.3rem;

        font-size: 0.33rem;

        color: #fff;

        z-index: 10;

      }

      .swiImgs {

        width: 100%;

        .item {

          height: 433px;

          .swiImg {

            height: 433px;
            width: 100%;

          }

        }

      }

    }

  }
</style>
