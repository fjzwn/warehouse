<template>
  <div id="app">
    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left">
        <a href="javascript:;" class="back"></a>
      </div>
      <h1 class="mint-header-title">
        <input type="text" class="search">
      </h1>
      <div class="mint-header-button is-right">
      </div>
    </header>

    <div class="pack-list-warp">
      <ul>
        <li class="item" v-for="item in list" :key="item.id">
          <div>
              <img :src="item.imgUrl" />
          </div>
          <div>
            <p><b>{{ item.title }}</b></p>
            <small>{{ item.intro }}</small>
            <p class="red-font price">¥{{ item.cost }}</p>
          </div>
          <div></div>
          <div>
            <span class="num">
              <i class="decrease" @click="decrease(item)">-</i>
              {{ item.num }}件
              <i class="add" @click="item.num++">+</i>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div class="intro">
      <div class="info">
        <h3>包装／捆包／搬运全包服务</h3>
        <p>为贵重物品提供量身定做木箱的服务，精确保护</p>
      </div>
      <p class="line"></p>
      <div class="contact">
        <span>咨询详情</span>
        <h4>悠悠空间服务热线:</h4>
        <h4>13055213031</h4>
      </div>
    </div>
    <div class="information">·物悠无忧 · 链接都市生活·</div>
    <div class="choice-ware">
      <div class="choice-info">
        <div class="icon-wrap">
          <span class="ware-icon"></span>
          <span class="badge">2</span>
        </div>

        <div style="text-align: center">
          <p>合计金额: ¥80</p>
        </div>
      </div>
      <div class="ensure">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paybooking',
  data () {
    return {
      list: [
        {
          id: 1,
          imgUrl: '/static/personal-warehouse.png',
          title: 'iphone x',
          intro: '简介简介',
          cost: '80/卷',
          num: 5
        },
        {
          id: 2,
          imgUrl: '/static/personal-warehouse.png',
          title: 'iphone 8',
          intro: '简介简介',
          cost: '80/卷',
          num: 4
        },
        {
          id: 2,
          imgUrl: '/static/personal-warehouse.png',
          title: 'iphone 8',
          intro: '简介简介',
          cost: '80/卷',
          num: 4
        },
        {
          id: 2,
          imgUrl: '/static/personal-warehouse.png',
          title: 'iphone 8',
          intro: '简介简介',
          cost: '80/卷',
          num: 4
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    decrease (item) {
      return item.num > 0 ? item.num-- : 0
    }
  }
}
</script>

<style lang="less">
@import "../../styles/common.less";

#app {
  display: flex;
  flex-direction: column;
  background-color: @bg-color;
  .px2rem(padding-top, 90);
  .px2rem(padding-bottom, 100);
  color: #333;
  font-size: 12px;
  .red-font {
    color: red;
  }

  .mint-header {
    .px2rem(height, 90);

    .back {
      display: inline-block;
      .px2rem(width, 24);
      .px2rem(height, 46);
      background: url('../../assets/arrow-left.png') no-repeat 0 0;
      background-size: cover;
    }
    .mint-header-title {
      flex:2;
      overflow: visible;
    }
    .search {
      background: #f8f8f8 url('../../assets/search.png') no-repeat center  right 10px;
      .px2rem(background-size, 40);
      .px2rem(height, 60);
      .px2rem(line-height, 60);
      .px2rem(width, 500);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      border-radius: 20px;
      &:focus {
        outline: none;
        font-size: 14px;
      }
    }
  }

  .pack-list-warp{
    background-color: #fff;
    margin-bottom: 8px;
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 180);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 49);
      border-top: 1px solid @bg-color;
      img {
        .px2rem(height, 100);
        .px2rem(width, 100);
        .px2rem(margin-left, 25);
        border-radius: 50%;
      }
      div {
        flex: 1;
        .price {
          font-size: 14px;
        }
        .num {
          .decrease, .add {
            display: inline-block;
            width: 18px;
            height: 18px;
            line-height: 1;
            text-align: center;
            border: 1px solid @color-primary;
            border-radius: 50%;
            vertical-align: middle;
          }

          .decrease {
            color: #999;
            border-color: #999;
          }
          .add {
            color: @color-primary;
          }
        }
      }
      div:nth-child(2) {
        flex: 2;
      }
      div:last-child {
        flex: none;
      }
    }
  }

  .intro {
    background: #fff url("/static/large-warehouse.png") no-repeat center right;
    background-size: 55%;
    .px2rem(padding-top, 20);
    .px2rem(padding-bottom, 20);
    .line {
      .px2rem(margin-left, 30);
      .px2rem(margin-top, 10);
      .px2rem(margin-bottom, 10);
      width: 40%;
      border: 1px solid #f8f8f8;
    }
    .info, .contact {
      width: 50%;
      .px2rem(margin-left, 30);
    }
    .info {
      p {
        width: 80%;
      }
    }
  }

  .information {
    position: relative;
    .px2rem(margin-top, 45);
    .px2rem(margin-bottom, 45);
    font-size: 12px;
    color: #bababa;
    font-weight: normal;
    text-align: center;

    &:before, &:after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) scaleY(.5);
      content: ' ';
      .px2rem(width, 180);
      border-bottom: 1px solid #bababa;
    }

    &:before {
      .px2rem(margin-left, -180);
    }
  }

  .choice-ware {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .px2rem(height, 100);
    color: #fff;
    font-size: 12px;

    .choice-info {
      display: flex;
      flex: 1;
      align-items: center;
      .px2rem(height, 100);
      .px2rem(padding-left, 16);
      background-color: #4d4d4d;

      .icon-wrap {
        position: relative;
        .px2rem(padding, 30);
        .px2rem(margin-top, -36);
        background-color: #4d4d4d;
        border-radius: 50%;

        .ware-icon {
          display: inline-block;
          .px2rem(width, 64);
          .px2rem(height, 64);
          background: url(../../assets/colorful-box.png) no-repeat 0 0;
          background-size: cover;
        }

        .badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          margin-top: -8px;
          color: #fff;
          min-width: 16px;
          min-height: 16px;
          text-align: center;
          background-color: #f00;
          border-radius: 100%;
        }
      }

      p {
        font-size: 13px;
      }
    }

    .ensure {
      display: flex;
      align-items: center;
      .px2rem(height, 100);
      .px2rem(padding-left, 70);
      .px2rem(padding-right, 70);
      font-size: 14px;
      background-color: red;
    }
  }

}
</style>
