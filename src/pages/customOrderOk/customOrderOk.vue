<template>
  <div id="app">
    <mt-header fixed title="订单确定">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right">价位说明</a>
    </mt-header>

    <div class="move-info">
      <img class="move-person-bg" src="../../assets/move-person-bg.png" alt="move-person-bg">
      <div class="move-info-content">
        <p>搬家领队: 郑师傅</p>
        <p>联系电话: 13333333333</p>
        <p>搬家时间: 2018年 2 月 14 日 09: 35</p>
      </div>
    </div>

    <div class="migrate">
      <div class="from">
        <h4>搬出地址</h4>
        <p>上海市 奉贤区</p>
        <p>振泰路 243 号 101 室</p>
      </div>
      <div class="line">
        <p></p>
        <p></p>
      </div>
      <div class="to">
        <h4>搬入地址</h4>
        <p>上海市 杨浦区</p>
        <p>国顺东路 800 号 1-3 F</p>
      </div>
    </div>

    <div class="cost-item">
      <p class="description"><span class="icon"></span>搬家服务项目:</p>
      <ul class="cell-wrapper">
        <li class="cell">
          <p>家居拆卸:</p>
          <p class="price">¥ 580</p>
        </li>
        <li class="cell">
          <p>大件物品:</p>
          <p class="price">¥ 450</p>
        </li>
      </ul>
    </div>

    <div class="cost-item">
      <p class="description"><span class="icon"></span>我购买的耗材:</p>
      <ul class="cell-wrapper">
        <li class="cell">
          <p><span class="text">小号纸箱</span> <span class="num">x 2个</span></p>
          <p class="price">¥ 15</p>
        </li>
        <li class="cell">
          <p><span class="text">大件物品</span> <span class="num">x 1卷</span></p>
          <p class="price">¥ 80</p>
        </li>
        <li class="cell">
          <p><span class="text">封卷带</span> <span class="num">x 5卷</span></p>
          <p class="price">¥ 40</p>
        </li>
      </ul>
    </div>

    <div class="cost-item">
      <p class="description"><span class="icon"></span>所在楼层:</p>
      <ul class="cell-wrapper">
        <li class="cell">
          <p><span class="text">6楼:</span> <span class="addition">无电梯</span></p>
          <p class="price">¥ 80</p>
        </li>
        <li class="cell">
          <p>合计金额:</p>
          <p class="price">¥ 1580</p>
        </li>
      </ul>
    </div>

    <div class="cost-more">
      <p class="description"><span class="icon"></span>给领队留言:</p>
      <p class="message">请提前联系确认具体的上门时间。</p>
      <div class="cell">
        <p>使用优惠券</p>
        <p class="price"><span>新用户抵扣</span><span class="icon"></span></p>
      </div>
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
  name: 'customOrderOk'
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
  }

  .move-info {
    position: relative;
    color: #fff;

    .move-info-content {
      position: absolute;
      top: 50%;
      .px2rem(left, 50);
      transform: translateY(-50%);

      p {
        .px2rem(line-height, 42);
      }
    }
  }

  .migrate {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .px2rem(padding-left, 45);
    .px2rem(padding-right, 45);
    margin-bottom: 6px;
    text-align: center;
    background-color: #fff;

    .from, .to {
      .px2rem(padding-top, 40);
      .px2rem(padding-bottom, 40);

      h4 {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: normal;
        color: #ed9d25;
      }
    }

    .line {
      p {
        .px2rem(width, 100);
        height: 1px;
        margin-bottom: 2px;
        background-color: #bfbfbf;
      }
    }
  }

  .cost-item {
    margin-bottom: 6px;
    background-color: #fff;

    p.description {
      .px2rem(padding-left, 24);
      .px2rem(height, 88);
      .px2rem(line-height, 88);
      font-size: 13px;
      color: #898989;
      border-bottom: 2px solid @bg-color;

      span.icon {
        display: inline-block;
        .px2rem(width, 32);
        .px2rem(height, 32);
        .px2rem(margin-right, 24);
        background: url('../../assets/move-box.png') no-repeat 0 0;
        background-size: cover;
        vertical-align: sub;
      }
    }

    .cell-wrapper {
      .cell {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .px2rem(height, 88);
        .px2rem(padding-left, 66);
        .px2rem(padding-right, 49);
        border-bottom: 1px solid @bg-color;

        p {
          &:first-child {
            .text {
              display: inline-flex;
              .px2rem(width, 136);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          &.price {
            .px2rem(width, 100);
            color: red;
          }

          .num, .addition {
            color: #f00;
          }
        }
      }
    }
  }

  .cost-more {
    margin-bottom: 6px;
    background-color: #fff;

    p.description {
      .px2rem(padding-left, 24);
      .px2rem(height, 88);
      .px2rem(line-height, 88);
      font-size: 13px;
      color: #898989;

      span.icon {
        display: inline-block;
        .px2rem(width, 32);
        .px2rem(height, 32);
        .px2rem(margin-right, 24);
        background: url('../../assets/move-box.png') no-repeat 0 0;
        background-size: cover;
        vertical-align: sub;
      }
    }

    p.message {
      .px2rem(margin-left, 80);
      .px2rem(padding-right, 24);
      padding-bottom: 7px;
      font-size: 13px;
      border-bottom: 1px solid @bg-color;
    }

    .cell {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 70);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 49);

      p {
        &:first-child {
          color: @gray-font-color;
        }

        &:last-child {
          color: #ed9d25;

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
  }

  .cost-total {
    .px2rem(padding-top, 45);
    .px2rem(padding-bottom, 45);
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

      p {
        &.price {
          .px2rem(width, 100);
          color: red;

          &.primary {
            color: #333;
          }
        }

        &.invoice {
          color: @gray-font-color;
        }
      }
    }
  }

  .explain {
    .px2rem(padding-top, 32);
    .px2rem(padding-right, 48);
    .px2rem(padding-bottom, 32);
    .px2rem(padding-left, 24);
    .px2rem(margin-bottom, 72);
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
