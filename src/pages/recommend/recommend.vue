<template>
  <div id="app">
    <mt-header fixed title="预选小仓库">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right">仓位说明</a>
    </mt-header>

    <div class="warehouse-process">
      <div class="time-info">
        <div class="check-date">
          <p>搬入日期</p>
          <p>2018-01-13</p>
        </div>
        <div class="arrow">
          <p>个人用品</p>
          <p></p>
        </div>
        <div class="cycle">
          <p>租用时长</p>
          <p>1个月</p>
        </div>
      </div>

      <div class="expect-info">
        <p>预估大件物品：2件</p>
        <p>预计仓位总体积：6.6m³</p>
      </div>

      <ul class="time-line clearfix">
        <li class="active">填写预选</li>
        <li class="active">智能选仓</li>
        <li>付款预订</li>
        <li>门店确认</li>
      </ul>
    </div>

    <div class="recommend-tips">
      <span class="arrow"></span>
      <p>根据您的预选，系统为您推荐 <span>2个组合方案</span></p>
    </div>

    <div class="program" v-for="item in programList" :key="item.key">
      <div class="cell-header">
        <p class="name">{{ item.name }}</p>
        <p class="volume">{{ item.volumeTotle }}m³</p>
      </div>
      <ul class="cell-content">
        <li v-for="subItem in item.volumeList" :key="subItem.id">
          <p class="name">{{ subItem.name }}</p>
          <span class="volume">{{ subItem.volume }}</span>
        </li>
      </ul>
      <div class="cell-footer">
        <span class="plus">+</span>
        <span class="price">¥{{ item.price }}</span>
      </div>
    </div>

    <mt-button type="primary"><span class="icon"></span>我想自主选择仓位</mt-button>
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
  name: 'recommend',
  data () {
    return {
      currentTab: 'index',

      programList: [
        {
          id: 1,
          name: '推荐套餐一',
          volumeTotle: 8,
          price: 1180,
          volumeList: [
            {
              id: '1-1',
              name: 'B 中小型经济仓位    6m³',
              volume: '120cm*150cm*240cm'
            },
            {
              id: '1-2',
              name: 'A 迷你存储柜    2m³',
              volume: '120cm*150cm*240cm'
            },
            {
              id: '1-3',
              name: 'A 迷你存储柜    2m³',
              volume: '120cm*150cm*240cm'
            }
          ]
        },
        {
          id: 2,
          name: '推荐套餐二',
          volumeTotle: 7.5,
          price: 980,
          volumeList: [
            {
              id: '1-1',
              name: 'B 中小型经济仓位    4m³',
              volume: '120cm*150cm*240cm'
            },
            {
              id: '1-2',
              name: 'A 迷你存储柜    3.5m³',
              volume: '120cm*150cm*240cm'
            }
          ]
        }
      ]
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

  .warehouse-process {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .px2rem(padding-top, 40);
    .px2rem(padding-bottom, 66);
    color: #fff;
    background-color: @color-primary;

    .time-info {
      display: flex;
      align-items: center;

      .check-date, .cycle {
        p:last-child {
          font-weight: bold;
        }
      }

      .arrow {
        .px2rem(margin-left, 56);
        .px2rem(margin-right, 56);
        text-align: center;

        p:last-child {
          .px2rem(width, 178);
          .px2rem(height, 24);
          background: url('../../assets/arrow-two-way.png') no-repeat 0 0;
          background-size: cover;
        }
      }
    }

    .expect-info {
      .px2rem(padding-left, 40);
      .px2rem(padding-right, 40);
      padding-top: 3px;
      padding-bottom: 3px;
      margin-top: 20px;
      margin-bottom: 25px;
      border: 1px solid #fff;
      border-radius: 21px;
    }

    .time-line {
      width: 100%;

      li {
        position: relative;
        float: left;
        width: 25%;
        text-align: center;

        &:before {
          position: absolute;
          content: '';
          bottom: -10px;
          right: 50%;
          width: 100%;
          height: 2px;
          background-color: #36843d;
        }

        &:after {
          position: absolute;
          content: '';
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background-color: #36843d;
          border-radius: 100%;
          z-index: 2;
        }

        &:first-child {
          &:before {
            content: initial;
          }
        }

        &.active {
          &:first-child {
            &:after {
              background-color: #fff;
            }
          }

          &:nth-of-type(2), &:nth-of-type(3), &:last-child {
            &:after, &:before {
              background-color: #fff;
            }
          }
        }
      }
    }
  }

  .recommend-tips {
    padding: 10px;
     margin-bottom: 8px;
    text-align: center;
    background-color: #fff;

    .arrow {
      display: inline-block;
      .px2rem(width, 30);
      .px2rem(height, 24);
      background: url('../../assets/arrow-double.png') no-repeat 0 0;
      background-size: cover;
    }

    p {
      color: @gray-font-color;

      span {
        color: @color-primary;
      }
    }
  }

  .program {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 8px;
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 24);
    padding-bottom: 16px;
    background-color: #fff;

    .cell-header {
      text-align: center;

      .name {
        color: @color-primary;
        margin-bottom: 16px;
      }
      .volume {
        font-size: 16px;
        font-weight: bold;
      }
    }

    .cell-content {
      .px2rem(padding-left, 30);

      li {
        position: relative;
        padding: 12px 0;

        &:before {
          position: absolute;
          content: '';
          left: -16px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background-color: #36843d;
          border-radius: 100%;
          z-index: 2;
        }

        &:after {
          position: absolute;
          content: '';
          top: 50%;
          left: -13px;
          width: 2px;
          height: 100%;
          margin-top: -2px;
          background-color: #dadada;
        }

        &:last-child {
          padding-bottom: 0;

          &:after {
            content: initial;
          }
        }

        .name {
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: normal;
        }

        .volume {
          padding: 1px 3px;
          color: #fff;
          background-color: #dadada;
          border-radius: 12px;
        }
      }
    }

    .cell-footer {
      .plus {
        font-size: 24px;
        font-weight: bold;
      }
      .price {
        color: @color-primary;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }

  button {
    display: block;
    margin: 24px auto;
    .px2rem(width, 500);
    .px2rem(height, 80);
    .px2rem(line-height, 80);
    font-size: 13px;
    border-radius: 0;

    span {
      display: inline-block;
      .px2rem(width, 32);
      .px2rem(height, 32);
      margin-right: 6px;
      background: url('../../assets/select-box.png') no-repeat 0 0;
      background-size: cover;
      vertical-align: middle;
    }
  }

  .information {
    position: relative;
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
