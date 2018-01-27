<template>
  <div id="app">
    <mt-header fixed title="订单确定">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right" class="colorful-box"></a>
    </mt-header>

    <div class="warehouse-info">
      <div class="warehouse-img">
        <img src="static/warehouse.png" alt="warehouse-img">
      </div>
      <div class="warehouse-content">
        <div class="wrapper">
          <div class="detail">
            <h3 class="title">悠悠空间迷你仓-杨浦店</h3>
            <p class="sub-title">杨浦区国顺东路800号东楼1-3F</p>
            <p class="tags">
              <span>温湿度控制</span>
              <span>人工智能</span>
              <span>24小时营业</span>
            </p>
          </div>

          <div class="addition">
            <p class="distance">2.2KM</p>
            <p class="price">89元起</p>
          </div>
        </div>

        <div class="discount">
          <p><span>减</span>满198减10、满598减50、满1398减100</p>
          <p><span>首</span>新用户下单立减20元</p>
        </div>
      </div>
    </div>

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

    <div class="check-cycle">
      <p class="description"><span class="icon"></span>入住周期:</p>
      <div class="datetime">
        <div class="cycle-from">
          <p>起始日期</p>
          <p>2018-01-13</p>
        </div>
        <p class="cycle-time">一个月</p>
        <div class="cycle-to">
          <p>截止日期</p>
          <p>2018-03-12</p>
        </div>
      </div>
    </div>

    <div class="select-warehouse">
      <h4><span class="icon"></span>自主选择仓位（可多选）</h4>

      <mt-navbar v-model="currentCategory">
        <mt-tab-item v-for="item in categoryData" :id="item.id" :key="item.id">{{ item.name }}</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="currentCategory">
        <mt-tab-container-item v-for="item in categoryData" :key="item.id" :id="item.id">
          <div
            v-for="subItem in item.list"
            :key="subItem.id"
            class="categoty-item"
            @click="selectCategory(subItem)" :class="selectCategoryIds.indexOf(subItem.id) !== -1 ? 'active' : ''">
            <div class="volume">
              <p>{{ subItem.volume }}</p>
              <p>{{ subItem.volumeDetail }}</p>
            </div>
            <p class="price">¥{{ subItem.price }}元 / 月</p>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>

      <div class="remarks">
        备注：系统计算您 <span>需订购不低于 3.6m³</span>   您可以组合多个仓位哦 系统要求您所选仓位不得低于您在预估表单中估算的所需立方数。
      </div>
    </div>

    <div class="introduction-list">
      <mt-navbar v-model="currentType">
        <mt-tab-item v-for="item in introductionData" :id="item.id" :key="item.id">{{ item.name }}</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="currentType">
        <mt-tab-container-item v-for="item in introductionData" :key="item.id" :id="item.id">
          <div v-for="subItem in item.list" :key="subItem.id" class="categoty-item">
            <div class="basic-info">
              <div>
                <p><span class="title">{{ subItem.title }}</span><span class="volume">{{ subItem.volume }}</span></p>
                <p class="sub-title">{{ subItem.subTitle }}</p>
              </div>
              <p class="price">{{ subItem.price }}元／月起</p>
            </div>
            <div class="detail-info">
              <div class="wrapper">
                <p class="use">{{ subItem.use }}</p>
                <p class="volume-detail">{{ subItem.volumeDetail }}</p>
                <ul v-for="(desc, index) in subItem.description.split(' ')" :key="index">
                  <li>{{ desc }}</li>
                </ul>
              </div>
              <div class="img-url">
                <img :src="subItem.imgUrl" alt="warehouse-img">
              </div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div class="information">·物悠无忧 · 链接都市生活·</div>

    <div class="choice-ware">
      <div class="choice-info">
        <div class="icon-wrap">
          <span class="ware-icon"></span>
          <span class="badge">2</span>
        </div>

        <div style="text-align: center">
          <p>仓位容量: 4.5m³</p>
          <p>（您需选择仓位3.6m³起）</p>
        </div>
      </div>
      <div class="ensure">合计租金: ¥90</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'freedomChoice',
  data () {
    return {
      currentCategory: '1',
      selectCategoryList: [],
      categoryData: [
        {
          id: '1',
          name: '迷你存储柜',
          list: [
            {
              id: '1-1',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            },
            {
              id: '1-2',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            },
            {
              id: '1-3',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            },
            {
              id: '1-4',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            },
            {
              id: '1-5',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            },
            {
              id: '1-6',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            }
          ]
        },
        {
          id: '2',
          name: '小型自助仓',
          list: [
            {
              id: '2-1',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            }
          ]
        },
        {
          id: '3',
          name: '中型自助仓',
          list: [
            {
              id: '3-1',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            }
          ]
        },
        {
          id: '4',
          name: '大型自助仓',
          list: [
            {
              id: '4-1',
              volume: '0.7m³',
              volumeDetail: '0.9*0.9*0.9m',
              price: '90'
            }
          ]
        }
      ],

      currentType: '1',
      introductionData: [
        {
          id: '1',
          name: '仓位介绍',
          list: [
            {
              id: '1-1',
              title: 'A 独立存储柜',
              subTitle: '私人用品、个人珍贵书信、书籍等',
              volume: '0.7m³~1.9m³',
              price: '91',
              use: '个人用品',
              volumeDetail: '0.7CBM -0.9*0.9*0.9m',
              description: '私人用品、个人珍贵书信、照片夹 各类文件档案、首饰盒、CD/DVD 家庭摆设、礼品以及个人喜好书籍',
              imgUrl: 'static/personal-warehouse.png'
            },
            {
              id: '1-2',
              title: 'B 小型迷你仓',
              subTitle: '适用于单人房间的简易家具，私人物品等',
              volume: '2.5m³~6.5m³',
              price: '189',
              use: '单人房间',
              volumeDetail: '4CBM-1.2*1.5*2.4m',
              description: '适用于单人房间的简易家具 容纳标准纸箱：80-84个 此类型迷你仓面积约容纳12个成年人',
              imgUrl: 'static/mini-warehouse.png'
            },
            {
              id: '1-3',
              title: 'C 中型自助仓',
              subTitle: '适用于单人房间的简易家具，私人物品等 副本',
              volume: '7m³~12m³',
              price: '189',
              use: '1-2个房间的家庭物品',
              volumeDetail: '8CBM-1.6*2.2*2.4m',
              description: '1-2个大房间家具以及私人爱好品 冰箱、衣橱、家电设备、大床垫等 商务上的文档、办公桌椅等',
              imgUrl: 'static/medium-warehouse.png'
            },
            {
              id: '1-4',
              title: 'D 大型自助仓',
              subTitle: '大房间家具以及私人爱好品，商务家具等',
              volume: '13m³~22m³',
              price: '189',
              use: '3-4个房间的家庭物品 或者商务资料家具等',
              volumeDetail: '12CBM-1.6*3.5*2.4m',
              description: '3-4个大房间家具以及私人爱好品 冰箱、衣橱、家电设备、大床垫等 商务上的文档、办公桌椅等',
              imgUrl: 'static/large-warehouse.png'
            }
          ]
        },
        {
          id: '2',
          name: '配套说明',
          list: [
            {
              id: '2-1',
              title: 'B 小型迷你仓',
              subTitle: '适用于单人房间的简易家具，私人物品等',
              volume: '2.5m³~6.5m³',
              price: '189',
              use: '单人房间',
              volumeDetail: '4CBM-1.2*1.5*2.4m',
              description: '适用于单人房间的简易家具 容纳标准纸箱：80-84个 此类型迷你仓面积约容纳12个成年人',
              imgUrl: 'static/mini-warehouse.png'
            }
          ]
        }
      ]
    }
  },
  computed: {
    selectCategoryIds () {
      let ids = []
      this.selectCategoryList.forEach(item => ids.push(item.id))
      return ids
    }
  },
  methods: {
    selectCategory (item) {
      if (this.selectCategoryIds.indexOf(item.id) === -1) {
        this.selectCategoryList.push(item)
      } else {
        let removeIndex = 0
        this.selectCategoryList.forEach((i, index) => {
          if (i.id === item.id) {
            removeIndex = index
          }
        })
        this.selectCategoryList.splice(removeIndex, 1)
      }
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

    .colorful-box {
      display: inline-block;
      .px2rem(width, 44);
      .px2rem(height, 44);
      background: url('../../assets/colorful-box.png') no-repeat 0 0;
      background-size: cover;
    }
  }

  .warehouse-info {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .px2rem(padding-left, 24);
    .px2rem(padding-right, 24);
    padding-top: 24px;
    padding-bottom: 18px;
    margin-bottom: 6px;
    background-color: #fff;

    .warehouse-img {
      .px2rem(width, 195);
      .px2rem(margin-right, 24);
    }

    .warehouse-content {
      flex: 1;

      .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid @bg-color;

        .detail {
          flex: 1;

          .title {
            font-size: 15px;
          }

          .sub-title {
            color: #595757;
            margin: 5px 0;
          }

          .tags {
            span {
              display: inline-block;
              margin-bottom: 7px;
              padding: 0 3px;
              color: #fff;
              background-color: #ed9d25;
            }
          }
        }

        .addition {
          .px2rem(margin-left, 24);

          .distance {
            text-align: right;
          }

          .price {
            font-size: 14px;
            color: #ed9d25;
          }
        }
      }

      .discount {
        margin-top: 7px;

        p {
          color: #595757;

          &:first-child {
            span {
              display: inline-block;
              width: 14px;
              height: 14px;
              line-height: 14px;
              margin-right: 3px;
              text-align: center;
              color: #fff;
              background-color: #ed9d25;
            }
          }

          &:last-child {
            span {
              display: inline-block;
              width: 14px;
              height: 14px;
              line-height: 14px;
              margin-right: 3px;
              text-align: center;
              color: #fff;
              background-color: @color-primary;
            }
          }
        }
      }
    }
  }

  .contact-way {
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

  .check-cycle {
    display: flex;
    flex-direction: row;
    align-items: center;
    .px2rem(padding, 24);
    background-color: #fff;
    margin-bottom: 6px;

    .description {
      span {
        display: inline-block;
        .px2rem(width, 24);
        .px2rem(height, 24);
        margin-right: 5px;
        background: url('../../assets/date-cycle.png') no-repeat 0 0;
        background-size: cover;
      }
    }

    .datetime {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .cycle-from, .cycle-to {
        text-align: center;

        p:first-child {
          color: @gray-font-color;
        }
        p:last-child {
          color: #ed9d25;
        }
      }

      .cycle-time {
        .px2rem(width, 100);
        .px2rem(height, 100);
        .px2rem(line-height, 100);
        margin: 0 10px;
        text-align: center;
        color: @color-primary;
        border: 1px solid @color-primary;
        border-radius: 50%;
      }
    }
  }

  .select-warehouse {
    background-color: #fff;
    margin-bottom: 6px;

    h4 {
      .px2rem(height, 80);
      .px2rem(line-height, 80);
      text-align: center;
      color: #fff;
      background-color: @color-primary;
      font-size: 14px;
      font-weight: normal;

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

    .mint-tab-item {
       &.is-selected {
         border-bottom: 2px solid @color-primary;
       }
    }

    .mint-tab-container {
      .px2rem(padding, 24);
      padding-bottom: 0;
      margin-top: 3px;
      background-color: #fff;

      .mint-tab-container-item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        .categoty-item {
          .px2rem(width, 182);
          .px2rem(margin-bottom, 44);
          text-align: center;
          border-radius: 5px;
          overflow: hidden;
          border: 1px solid #a1a1a1;

          &:nth-child(3n-1) {
            .px2rem(margin-left, 75);
            .px2rem(margin-right, 75);
          }

          .volume {
            padding: 6px 0;
            color: @color-primary;
          }

          .price {
            padding: 3px 0;
            color: #fff;
            background-color: #a1a1a1;
          }

          &.active {
            border-color: transparent;

            .volume {
              color: #fff;
              background-color: @color-primary;
            }

            .price {
              background-color: #ed9d25;
            }
          }
        }
      }
    }

    .remarks {
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 50);
      .px2rem(padding-bottom, 24);
      span {
        color: #f00;
      }
    }
  }

  .introduction-list {
    background-color: #fff;

    .mint-tab-item {
      flex: initial;
      width: 32%;
      padding: 12px 0;

      &.is-selected {
        border-width: 2px;
      }
    }

    .mint-tab-container {
      .px2rem(padding, 24);
      padding-bottom: 0;
      margin-top: 3px;
      background-color: #fff;

      .mint-tab-container-item {
        .categoty-item {
          border: 1px solid #efefef;
          padding: 7px;
          margin-bottom: 12px;

          .basic-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid @bg-color;

            div {
              flex: 1;

              p:first-child {
                .title {
                  color: @color-primary;
                  font-size: 16px;
                }

                .volume {
                  padding: 1px 5px;
                  margin-left: 8px;
                  background-color: #dadada;
                  color: #fff;
                  border-radius: 6px;
                }
              }
            }

            p.price {
              color: @color-primary;
            }
          }

          .detail-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;

            div.wrapper {
              flex: 1;
              .px2rem(min-width, 360);

              .use, .volume-detail {
                font-weight: bold;
                font-size: 16px;
                line-height: 1.5;
                text-align: center;
              }
            }

            div.img-url {
              margin-left: 20px;
            }
          }
        }
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
      .px2rem(padding-left, 45);
      .px2rem(padding-right, 45);
      font-size: 14px;
      background-color: @color-primary;
    }
  }
}
</style>
