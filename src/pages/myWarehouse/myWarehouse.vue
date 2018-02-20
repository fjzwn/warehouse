<template>
  <div id="app">
    <mt-header fixed title="我的小仓库">
      <a href="javascript:;" slot="left" class="back"></a>
    </mt-header>
    <div class="mint-navbar">
      <a class="mint-tab-item" :class="currentStatus == item.id ? 'is-selected' : '' " @click="changeStatus(item.id)" v-for="item in orderStatus" :id="item.id" :key="item.id">
        <span :class="currentStatus == item.id ? 'tab-box-shadow' : 'default-padding' ">
         <div class="mint-tab-item-icon">
            <div class="icon-relative"><img :src="item.icon">
              <span class="number-circle">{{ item.number }}</span>
            </div>
         </div>
        <div class="mint-tab-item-label">
          {{ item.name }}
        </div>
        </span>
      </a>
    </div>
    <mt-tab-container v-model="currentStatus">
      <mt-tab-container-item v-for="item in orderStatus" :key="item.id" :id="item.id">
        <div
          v-for="subItem in item.list"
          :key="subItem.id"
          >
          <ul class="order-info" :class="subItem.overdue == 1 ? 'overdue-status' : ''">
            <li class="cell order-num">
              <span class="order-number">编号：{{ subItem.orderNum }}</span>
              <span class="order-status">{{ subItem.orderStatus }}</span>
            </li>
            <li class="cell">
                <span class="cell-title">预定租期：</span>
                <b>{{ subItem.bookDate }}</b>
            </li>
            <li class="cell">
                <span class="cell-title">合计金额：</span>
                <i class="red-font">¥{{ subItem.cost }}</i>
            </li>
            <li class="capacity">
              <span class="cell-title">仓位容量：</span>
              <p>
                <span v-for="(capacityItem, key) in subItem.capacity" :key="key">{{ capacityItem }}</span>
              </p>
            </li>
            <li class="cell">
              <span class="cell-title">到期时间：</span>
              <i class="red-font">{{ subItem.cutOffDate }}</i>
            </li>
          </ul>

          <ul class="contact-way" :class="subItem.overdue == 1 ? 'overdue-status' : ''">
            <li class="cell">
              <p><span class="icon store"></span>门店地址: <i>{{ subItem.address }}</i></p>
              <p><span class="icon address"></span></p>
            </li>
            <li class="cell">
              <p><span class="icon tel"></span>门店热线: <i>{{ subItem.tel }}</i></p>
              <p></p>
            </li>
          </ul>

          <div class="order-act" :class="subItem.overdue == 1 ? 'overdue-status' : ''">
            <p></p>
            <div>
              <span class="button order-detail-act">订单详情</span>
              <span class="button order-renew-act active">立即续费</span>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="information">·物悠无忧 · 链接都市生活·</div>
  </div>
</template>

<script>
export default {
  name: 'myWarehouse',
  data () {
    return {
      currentStatus: 1,
      orderStatus: [
        {
          id: 1,
          name: '待付款',
          number: 4,
          icon: require('../../assets/wait-pay.png'),
          list: [
            {
              id: 1,
              orderNum: 11111111,
              orderStatus: '待付款',
              bookDate: '一个月',
              cost: '445',
              capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
              cutOffDate: '2018-01-01',
              address: '上海市杨浦区国顺东路800号1-3F',
              tel: 13055213031,
              overdue: 0
            },
            {
              id: 5,
              orderNum: 66667712312,
              orderStatus: '已过期',
              bookDate: '一个月',
              cost: '445',
              capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
              cutOffDate: '2018-01-01',
              address: '上海市杨浦区国顺东路800号1-3F',
              tel: 13055213031,
              overdue: 1
            }
          ]
        },
        {
          id: 2,
          name: '未入库',
          number: 5,
          icon: require('../../assets/not-repo.png'),
          list: [
            {
              id: 2,
              orderNum: 22222222,
              orderStatus: '未入库',
              bookDate: '一个月',
              cost: '445',
              capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
              cutOffDate: '2018-01-01',
              address: '上海市杨浦区国顺东路800号1-3F',
              tel: 13055213031,
              overdue: 0
            }
          ]
        },
        {
          id: 3,
          name: '已入库',
          number: 6,
          icon: require('../../assets/already-repo.png'),
          list: [
            {
              id: 3,
              orderNum: 33333333,
              orderStatus: '已入库',
              bookDate: '一个月',
              cost: '445',
              capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
              cutOffDate: '2018-01-01',
              address: '上海市杨浦区国顺东路800号1-3F',
              tel: 13055213031,
              overdue: 0
            }
          ]
        },
        {
          id: 4,
          name: '待续费',
          number: 7,
          icon: require('../../assets/wait-renew.png'),
          list: [
            {
              id: 4,
              orderNum: 44444444,
              orderStatus: '待续费',
              bookDate: '一个月',
              cost: '445',
              capacity: ['A迷你存储柜 0.7m³', 'B小型自助仓 6.5m³'],
              cutOffDate: '2018-01-01',
              address: '上海市杨浦区国顺东路800号1-3F',
              tel: 13055213031,
              overdue: 0
            }
          ]
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    changeStatus (id) {
      this.currentStatus = id
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

  .mint-navbar {
    color: #939393;
    .mint-tab-item {
      &.is-selected {
        border-bottom: none;
      }
      .tab-box-shadow {
        display: inline-block;
        .px2rem(padding-top, 13);
        .px2rem(padding-bottom, 13);
        .px2rem(padding-left, 16);
        .px2rem(padding-right, 16);
        border: 1px solid #dedede;
        border-top: none;
        border-radius: 5px;
        box-shadow: 0 2px 5px #dedede;
      }
      .default-padding {
        display: inline-block;
        .px2rem(padding-top, 13);
        .px2rem(padding-bottom, 13);
        .px2rem(padding-left, 16);
        .px2rem(padding-right, 16);
      }
      .icon-relative {
        position: relative;
        .number-circle {
          position: absolute;
          .px2rem(top, -12);
          .px2rem(right, -12);
          .px2rem(height, 30);
          .px2rem(width, 30);
          .px2rem(line-height, 30);
          .px2rem(font-size, 12);
          border-radius: 50%;
          background-color: red;
          color: #fff;
        }
      }
    }
    .px2rem(margin-bottom, 6);
  }

  .order-info {
    margin-bottom: 1px;
    background-color: #fff;
    .cell {
      .px2rem(line-height, 70);
      .px2rem(height, 70);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 49);

      &.order-num {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid @bg-color;
        .order-number {
          color: #b5b5b6;
        }
        .order-status {
          color: @color-primary;
        }
      }

      .cell-title {
        color: #bababa;
      }
    }

    .capacity {
      display: flex;
      align-items: center;
      justify-content: center;
      .px2rem(min-height, 80);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 49);
      .cell-title {
        color: #bababa;
      }
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

    &.overdue-status {
      b, .red-font, .order-status{
        color: #bababa !important;
      }
      .capacity p span {
        background-color: #dedede;
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
      color: #777575;

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
    &.overdue-status p{
      color:#bababa!important;;
    }
  }

  .order-act {
    margin-bottom: 6px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .px2rem(height, 70);
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 49);
    border-bottom: 1px solid @bg-color;
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
      color: #bababa;
    }
    &.overdue-status .order-renew-act{
      color: #bababa;
      border: 1px solid #bababa;
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
}
</style>
