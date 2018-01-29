<template>
  <div id="app">
    <mt-header fixed title="我的小仓库">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right">价位说明</a>
    </mt-header>
    <div class="page-title-warp">
      <p class="page-title">待入仓的订单</p>
    </div>
    <div class="order-list">
      <div v-for="item in repoOrderList" :key="item.id">
        <p class="date">{{ item.date }}</p>
          <div class="item-enter">
          <ul class="order-info">
            <li class="cell order-date-warp">
              <p><span class="icon ware"></span>悠悠小仓库</p>
              <span class="order-date">订单时间: {{ item.orderDate }}</span>
            </li>
            <li class="cell">
              <span>预定租期：<b>{{ item.bookDate }}</b></span>
            </li>
            <li class="cell">
              <span>合计金额：<i class="red-font">¥{{ item.cost }}</i></span>
            </li>
            <li class="capacity">
              <span>仓位容量：</span>
              <p>
                <span v-for="(capacityItem, key) in item.capacity" :key="key">{{ capacityItem }}</span>
              </p>
            </li>
            <li class="cell">
              <span>到期时间：<i class="red-font">{{ item.cutOffDate }}</i></span>
            </li>
          </ul>

          <ul class="contact-way">
            <li class="cell">
              <p><span class="icon store"></span>门店地址: <i>{{ item.address }}</i></p>
              <p><span class="icon address"></span></p>
            </li>
            <li class="cell">
              <p><span class="icon tel"></span>门店热线: <i>{{ item.tel }}</i></p>
              <p></p>
            </li>
          </ul>

          <div class="order-act">
            <p><i class="square green"></i> <span class="red-font">已付款，待入仓</span></p>
            <div>
              <span class="button order-detail-act active">订单详情</span>
            </div>
          </div>
        </div>
      </div>

      <div v-for="item in moveOrderList" :key="item.id">
        <p class="date">{{ item.date }}</p>
        <div class="item-service">
          <ul class="order-info">
            <li class="cell order-date-warp">
              <p><span class="icon custom-move"></span>定制搬家</p>
              <span class="order-date">订单时间: {{ item.orderDate }}</span>
            </li>
            <li class="migrate">
              <div class="from">
                <div class="from-bg">
                  <h4>搬出地址</h4>
                  <p>{{ item.moveOnAddress.area}}</p>
                  <p>{{ item.moveOnAddress.detail}}</p>
                </div>
              </div>
              <div class="line">
                <p></p>
                <p></p>
              </div>
              <div class="to">
                <div class="from-bg">
                  <h4>搬入地址</h4>
                  <p>{{ item.moveInAddress.area }}</p>
                  <p>{{ item.moveInAddress.detail}}</p>
                </div>
              </div>
            </li>
            <li class="cell">
              <span>联系人：{{ item.contact }}</span>
            </li>
            <li class="cell">
              <span>预约时间：{{ item.appointmentDate }}</span>
            </li>
            <li class="cell">
              <span>订单总额：<i class="red-font">¥{{ item.cost }}</i></span>
            </li>
          </ul>
          <div class="order-act">
            <p><i class="square orange"></i> <span class="red-font">{{ item.orderStatus }}</span></p>
            <div>
              <span class="button order-detail-act active">订单详情</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <div class="all">全部历史账单</div>
    <div class="information">·物悠无忧 · 链接都市生活·</div>
    <mt-tabbar v-model="currentTab" fixed>
      <mt-tab-item id="index">
        <img slot="icon" src="../../assets/index-icon.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="../../assets/order-icon.png">
        我的订单
      </mt-tab-item>
      <mt-tab-item id="user">
        <img slot="icon" src="../../assets/user-icon.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  name: 'orderList',
  data () {
    return {
      currentTab: 'index',
      repoOrderList: [
        {
          id: 3,
          date: '1月18号 星期四',
          orderDate: '2018-01-01',
          bookDate: '一个月',
          cost: '445',
          capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
          cutOffDate: '2018-01-01',
          address: '上海市杨浦区国顺东路800号1-3F',
          tel: 13055213031,
          orderStatus: '已付款，待入仓'
        },
        {
          id: 4,
          date: '1月18号 星期四',
          orderDate: '2018-01-01',
          bookDate: '一个月',
          cost: '445',
          capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
          cutOffDate: '2018-01-01',
          address: '上海市杨浦区国顺东路800号1-3F',
          tel: 13055213031,
          orderStatus: '已付款，待入仓'
        }
      ],
      moveOrderList: [
        {
          id: 5,
          date: '1月18号 星期四',
          orderDate: '2018-01-01',
          moveOnAddress: {
            area: '上海市 奉贤区',
            detail: '振泰路 243 号 101 室'
          },
          moveInAddress: {
            area: '上海市 杨浦区',
            detail: '国顺东路 800 号 1-3 F'
          },
          contact: '杨师傅 13055213031',
          appointmentDate: '2018年5月5日 09:09:09',
          cost: 55555,
          orderStatus: '已付款，等待服务'
        }
      ]
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
    color: red;
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

  .page-title-warp {
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 49);
    .px2rem(padding-top, 24);
    font-size: 14px;
  }

  .order-list {
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 24);
    .date {
      .px2rem(margin-top, 30);
      .px2rem(margin-bottom, 20);
    }

    .item-enter, .item-service {
      background-color: #fff;
      -moz-box-shadow: 0 2px 5px 2px #bababa;
      box-shadow: 0 2px 5px 1px #bababa;
      border-radius: 5px;
      .cell {
        .px2rem(line-height, 70);
        .px2rem(height, 70);
        .px2rem(padding-left, 24);
        .px2rem(padding-right, 49);

        &.order-date-warp {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid @bg-color;
          .order-status {
            //color: @color-primary;
          }
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

            &.ware {
              background: url('../../assets/ware.png') no-repeat 0 0;
              background-size: cover;
            }

            &.store {
              background: url('../../assets/store.png') no-repeat 0 0;
              background-size: cover;
            }

            &.custom-move {
              background: url('../../assets/shafa.png') no-repeat 0 0;
              background-size: cover;
            }

            &.tel {
              background: url('../../assets/tel.png') no-repeat 0 0;
              background-size: cover;
            }
          }
        }
      }
      .order-act {
        margin-bottom: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .px2rem(height, 70);
        .px2rem(padding-left, 24);
        .px2rem(padding-right, 49);
        .button {
          &:first-child {
            .px2rem(margin-right, 15);
          }
          &:last-child {
            .px2rem(margin-right, -18);
          }
          &.active {
            color: @color-primary;
            border: 1px solid @color-primary;
          }
          .px2rem(padding-left, 24);
          .px2rem(padding-right, 24);
          display: inline-block;
          height: 24px;
          line-height:24px;
          border: 1px solid #bababa;
          border-radius: 12px;
        }
        .square {
          display: inline-block;
          .px2rem(width, 18);
          .px2rem(height, 18);
          &.green {
            background-color: @color-primary;
          }
          &.orange {
            background-color: #ed9d25;
          }
        }
      }
    }

    .item-service {
      .migrate {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .px2rem(padding-left, 30);
        .px2rem(padding-right, 30);
        margin-bottom: 6px;
        text-align: center;
        background-color: #fff;

        .from, .to {
          .px2rem(padding-top, 40);
          .px2rem(padding-bottom, 40);
          .from-bg {
            background-color: #f5f5f5;
            .px2rem(padding-left, 10);
            .px2rem(padding-right, 10);
          }
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

      .order-info .cell:last-child {
        border-bottom: 1px solid @bg-color;
      }
    }

    .item-enter {
      .order-info {
        .capacity {
          display: flex;
          align-items: center;
          justify-content: center;
          .px2rem(min-height, 80);
          .px2rem(padding-left, 24);
          .px2rem(padding-right, 49);

          p {
            flex: 1;

            span {
              display: inline-block;
              padding: 1px 3px;
              margin: 3px 3px 3px 0;
              color: #fff;
              background-color: @color-primary;
            }
          }
        }
      }

      .contact-way {
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
    }
  }
  .all {
    width: 65%;
    text-align: center;
    .px2rem(height, 80);
    .px2rem(line-height, 80);
    background-color: gray;
    margin: auto;
    color: #fff;
    font-size: 14px;
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
}
</style>
