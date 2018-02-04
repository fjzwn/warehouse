<template>
  <div id="app">
    <mt-header fixed title="订单详情">
      <a href="javascript:;" slot="left" class="back"></a>
    </mt-header>
    <div>
      <ul class="order-info">
        <li class="cell order-num">
          <span class="order-number">编号：13213213123</span>
          <span class="order-status">已入库</span>
        </li>
        <li class="cell">
          <span class="cell-title">租用时长：</span>
          <i>1个月</i>
        </li>
        <li class="cell">
          <span class="cell-title">预定租期：</span>
          <i>2018-01-01至2018-01-02</i>
        </li>
        <li class="cell">
          <span class="cell-title">配件需求：</span>
          <i>国产门锁</i>
        </li>
        <li class="cell">
          <span class="cell-title">总计费用：</span>
          <i>¥420</i>
        </li>
        <li class="cell">
          <span class="cell-title">仓位容量：</span>
          <i>12.6m³</i>
        </li>
        <li class="capacity">
          <p>
            <span>A迷你存储柜 5.7m³</span>
            <span>A迷你存储柜 6.9m³</span>
          </p>
        </li>
      </ul>
      <ul class="contact-way">
        <li class="cell">
          <p><span class="icon store"></span>门店地址: <i>杭州市西兴街道</i></p>
          <p><span class="icon address"></span></p>
        </li>
        <li class="cell">
          <p><span class="icon tel"></span>门店热线: <i>13055213031</i></p>
          <p></p>
        </li>
      </ul>
      <ul class="cost">
        <li class="cell">
          <p>仓位价格:</p>
          <p class="price">¥ 180</p>
        </li>
        <li class="cell">
          <p><span class="text">配件需求:</span><span class="addition">国产门锁</span></p>
          <p class="price">¥ 90</p>
        </li>
        <li class="cell">
          <p><span class="text">押金费用:</span><span class="addition">押金部分在退租时门店返还</span></p>
          <p class="price">¥ 90</p>
        </li>
        <li class="cell">
          <p><span class="text">行政管理费: </span><span class="addition">费用明细说明<i class="icon question"></i></span></p>
          <p class="price">¥ 150</p>
        </li>
        <li class="cell">
          <p>使用优惠券:</p>
          <p class="price discount"><span>新用户抵扣20</span><span class="icon"></span></p>
        </li>
      </ul>
      <div class="total-cost">
        <p><span class="text">费用总计: </span><span class="addition">费用明细说明<i class="icon question"></i></span></p>
        <p class="price">¥ 420</p>
      </div>
    </div>
    <div class="information">·物悠无忧 · 链接都市生活·</div>
    <div class="payment">
      <p>合计总金额: ¥425</p>
      <p>预定支付</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetail',
  data () {
    return {
      orderDetail: {

      }
    }
  },
  mounted () {

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
    color: #ef2436;
  }

  .mint-header {
    .px2rem(height, 90);
    border-bottom: 1px solid @bg-color;

    .back {
      display: inline-block;
      .px2rem(width, 24);
      .px2rem(height, 46);
      background: url('../../assets/arrow-left.png') no-repeat 0 0;
      background-size: cover;
    }
  }

  .order-info {
    background-color: @color-primary;
    .cell {
      .px2rem(line-height,62);
      .px2rem(height, 62);
      .px2rem(padding-left, 60);
      .px2rem(padding-right, 24);
      .px2rem(font-size, 28);
      color: #fff;

      &.order-num {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid @bg-color;
        .px2rem(padding-left, 28);
        span:first-child {
          color: #333;
        }
        .order-status {
          color: @color-primary!important;
        }
      }
    }
    li:first-child {
      background-color: #fff;
      .px2rem(height, 70);
      .px2rem(line-height, 70);
      .px2rem(font-size, 14);
    }

    .capacity {
      display: flex;
      align-items: center;
      justify-content: center;
      .px2rem(min-height, 62);
      .px2rem(padding-left, 60);
      .px2rem(padding-right, 24);
      .cell-title {
        color: #bababa;
      }
      p {
        flex: 1;

        span {
          display: inline-block;
          padding: 1px 3px;
          margin: 3px 3px 3px 0;
          background-color: #fff;
          color: @color-primary;
        }
      }
    }
  }

  .contact-way {
    background-color: #fff;
    margin-bottom: 5px;
    .cell {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 70);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 49);
      border-bottom: 1px solid @bg-color;
      color: #333;

      p:first-child {
        font-size: 13px;
      }

      p:first-child {
        flex: 1;
        font-size: 13px;

        .icon {
          display: inline-block;
          .px2rem(width, 24);
          .px2rem(height, 24);
          margin-right: 5px;
          vertical-align: middle;

          &.store {
            background: url('../../assets/store.png') no-repeat 0 0;
            background-size: cover;
          }

          &.tel {
            background: url('../../assets/tel.png') no-repeat 0 0;
            background-size: cover;
          }
        }
      }

      p:last-child {
        .icon.address {
          display: inline-block;
          .px2rem(width, 33);
          .px2rem(height, 33);
          vertical-align: middle;
          background: url('../../assets/address.png') no-repeat 0 0;
          background-size: cover;
        }
      }
    }
  }
  .cost {
    margin-bottom: 5px;
    background-color: #fff;

    .cell {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 70);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 49);
      border-bottom: 1px solid @bg-color;

      p:first-child {
        font-size: 13px;
      }

      p.price {
        color: #f00;

        &.discount {
          color: #ed9d25;
        }

        span.icon {
          display: inline-block;
          .px2rem(width, 18);
          .px2rem(height, 34);
          .px2rem(margin-left, 28);
          background: url(../../assets/arrow-right.png) no-repeat 0 0;
          background-size: cover;
          vertical-align: middle;
        }
      }
    }
  }
  .cost {
    background-color: #fff;
    .cell {
      p:first-child {
        font-size: 13px;

        .text {
          display: inline-block;
          .px2rem(width, 177);
        }

        .addition {
          font-size: 12px;
          color: @gray-font-color;

          .icon {
            display: inline-block;
            .px2rem(width, 24);
            .px2rem(height, 24);
            margin-left: 6px;
            vertical-align: middle;
            background: url('../../assets/question.png') no-repeat 0 0;
            background-size: cover;
          }
        }
      }
    }
  }

  .total-cost {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .px2rem(height, 70);
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 49);
    border-bottom: 1px solid @bg-color;
    background-color: #fff;
    p:first-child {
      font-size: 13px;

      .text {
        display: inline-block;
        .px2rem(width, 177);
      }

      .addition {
        font-size: 12px;
        color: @gray-font-color;

        .icon {
          display: inline-block;
          .px2rem(width, 24);
          .px2rem(height, 24);
          margin-left: 6px;
          vertical-align: middle;
          background: url('../../assets/question.png') no-repeat 0 0;
          background-size: cover;
        }
      }
    }
    .price {
      color: #f00;
      .px2rem(font-size, 35)
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

  .payment {
    position: fixed;
    bottom: 0;
    width: 100%;
    .px2rem(height, 96);
    .px2rem(font-size, 28);
    color: #fff;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child {
        float: left;
        height: 100%;
        .px2rem(width, 450);
        background-color: #4d4d4d;
      }

      &:last-child {
        .px2rem(height, 96);
        background-color: @color-primary;
      }
    }
  }
}
</style>
