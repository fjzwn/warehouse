<template>
  <div id="app">
    <mt-header fixed title="订单确定">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right" class="question"></a>
    </mt-header>

    <h4 class="warehouse-type"><span></span>B小型仓位预定</h4>

    <ul class="warehouse-info">
      <div class="cell">
        <span>预定租期：</span>
        <span class="date">1个月 ( 2018-01-03至218-02-03 )</span>
      </div>
      <div class="capacity">
        <span>仓位容量：</span>
        <p>
          <span>A迷你存储柜 0.7m³</span>
          <span>B小型自助仓 6.5m³</span>
        </p>
      </div>
      <div class="cell">
        <span>仓位合计：</span>
        <span class="price">¥ 180/月</span>
      </div>
    </ul>

    <ul class="contact-way">
      <li class="cell">
        <p><span class="icon store"></span>门店地址: <i>上海市杨浦区国顺东路800号1-3F</i></p>
        <p><span class="icon address"></span></p>
      </li>
      <li class="cell">
        <p><span class="icon tel"></span>门店热线: <i>400-680-1716</i></p>
        <p></p>
      </li>
    </ul>

    <ul class="cost">
      <li class="cell">
        <p>仓位价格:</p>
        <p class="price">¥ 180</p>
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
        <p class="price discount"><span>新用户抵扣</span><span class="icon"></span></p>
      </li>
    </ul>

    <div class="fitting-require">
      <p>配件需求:</p>
      <ul class="require-list">
        <li>自带门锁</li>
        <li class="active">国产门锁 ¥25</li>
        <li>进口门锁 ¥25</li>
      </ul>
    </div>

    <ul class="cost-total">
      <li class="cell">
        <p>费用合计:</p>
        <p class="price primary">¥ 1580</p>
      </li>
      <li class="cell">
        <p>优惠券抵扣:</p>
        <p class="price">-¥ 20</p>
      </li>
      <li class="cell">
        <p>总费用:</p>
        <p class="price primary">¥ 1580</p>
      </li>
      <li class="cell">
        <p>发票:</p>
        <p class="invoice">如需发票，请向门店前台索取</p>
      </li>
    </ul>

    <div class="explain">
      <h3>特别说明:</h3>
      <p>系统按照常规物品尺寸提供报价，物品搬入后，若物品实际 体积超出仓位实际容量，一切按实际物品的所需仓位总体积 进行最终结算，悠悠空间将拥有最终解释权。</p>
    </div>

    <div class="payment">
      <p>合计总金额: ¥425</p>
      <p>预定支付</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderOk',
  mounted () {

  }
}
</script>

<style lang="less">
@import "../../styles/common.less";

#app {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: @bg-color;
  .px2rem(padding-top, 90);
  .px2rem(padding-bottom, 100);
  color: #333;
  font-size: 12px;

 .mint-header {
    .px2rem(height, 90);

    .back {
      display: inline-block;
      .px2rem(width, 24);
      .px2rem(height, 46);
      background: url('../../assets/arrow-left.png') no-repeat 0 0;
      background-size: cover;
    }

    .question {
      display: inline-block;
      .px2rem(width, 44);
      .px2rem(height, 44);
      background: url('../../assets/question.png') no-repeat 0 0;
      background-size: cover;
    }
  }

  .warehouse-type {
    .px2rem(height, 80);
    .px2rem(line-height, 80);
    text-align: center;
    color: #fff;
    background-color: @color-primary;
    font-size: 14px;
    font-weight: normal;

    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 6px;
      background-color: #fff;
    }
  }

  .warehouse-info {
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 24);
    margin-bottom: 6px;
    font-size: 13px;
    background: #fff;

    .cell {
      .px2rem(height, 80);
      .px2rem(line-height, 80);
      border-bottom: 1px solid @bg-color;

      .date {
        font-weight: bold;
      }

      .price {
        color: #f00;
      }
    }

    .capacity {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid @bg-color;
      .px2rem(min-height, 80);

      p {
        flex: 1;

        span {
          display: inline-block;
          padding: 1px 3px;
          margin: 3px 0;
          color: #fff;
          background-color: @color-primary;
        }
      }
    }
  }

  .contact-way, .cost {
    margin-bottom: 6px;
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

  .contact-way {
    .cell {
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

  .fitting-require {
    .px2rem(padding-left, 24);
    .px2rem(padding-top, 24);
    .px2rem(padding-bottom, 12);
    .px2rem(padding-right, 66);
    background-color: #fff;
    margin-bottom: 6px;

    p {
      font-size: 14px;
      margin-bottom: 7px;
    }

    .require-list {
      li {
        float: left;
        height: 24px;
        line-height: 24px;
        .px2rem(padding-left, 24);
        .px2rem(padding-right, 24);
        .px2rem(margin-bottom, 12);
        margin-right: 8px;
        border-radius: 12px;
        color: @color-primary;
        border: 1px solid @color-primary;

        &.active {
          color: #fff;
          background-color: @color-primary;
        }
      }
    }
  }

  .cost-total {
    .px2rem(padding-top, 45);
    margin-bottom: 6px;
    background-color: #fff;

    .cell {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(margin-bottom, 32);
      .px2rem(padding-left, 66);
      .px2rem(padding-right, 49);
      font-size: 13px;

      p.price {
        & {
          .px2rem(width, 100);
          color: red;

          &.primary {
            color: #333;
          }
        }
      }

      p.invoice {
        color: @gray-font-color;
      }
    }
  }

  .explain {
    .px2rem(padding-top, 32);
    .px2rem(padding-right, 48);
    .px2rem(padding-bottom, 32);
    .px2rem(padding-left, 24);
    background-color: #fff;
    font-size: 13px;

    h3 {
      font-weight: normal;
      margin-bottom: 7px;
      font-size: 13px;
    }

    p {
      color: @gray-font-color;
    }
  }

  .payment {
    position: fixed;
    bottom: 0;
    width: 100%;
    .px2rem(height, 96);
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
        background-color: #f00;
      }
    }
  }
}
</style>
