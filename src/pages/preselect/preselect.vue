<template>
  <div id="app">
    <mt-header fixed title="预选小仓库">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right">仓位说明</a>
    </mt-header>
    <div id="allmap">

    </div>

    <div class="reservation">
      <h3 class="reservation-title"><span></span>请填写预约信息<span></span></h3>
      <ul class="reservation-condition">
        <li class="condition-item">
          <label>
            <span class="date-icon icon"></span>需搬住日:
          </label>
          <span class="value">{{ formatValue }}</span>
          <span class="choice" @click="$refs.datePicker.open()"></span>
        </li>
        <li class="condition-item">
          <label>
            <span class="time-icon icon"></span>租用时长:
          </label>
          <span class="value">{{ pickerDate.value }}</span>
          <span class="choice" @click="showPicker = true"></span>
        </li>
        <li class="condition-item">
          <label>
            <span class="use-icon icon"></span>小仓库用途:
          </label>
          <div class="radio-group">
            <label>
              <input class="radio" type="radio" v-model="useValue" value="1" />
              <span class="radio-input"></span>
              <span class="radio-text">个人用品</span>
            </label>
            <label>
              <input class="radio" type="radio" v-model="useValue" value="2" />
              <span class="radio-input"></span>
              <span class="radio-text">家庭用品</span>
            </label>
            <label>
              <input class="radio" type="radio" v-model="useValue" value="3" />
              <span class="radio-input"></span>
              <span class="radio-text">公司用品</span>
            </label>
          </div>
        </li>
      </ul>
    </div>

    <div class="furniture-type">
      <p class="tips">请选择您全部需要存放的物品清单，系统根据您的需求匹配仓位</p>
      <mt-navbar v-model="currentCategory">
        <mt-tab-item v-for="item in categoryData" :key="item.id" :id="item.id">{{ item.name }}</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="currentCategory">
        <mt-tab-container-item v-for="item in categoryData" :key="item.id" :id="item.id">
          <div v-for="subItem in item.list" :key="subItem.id" class="categoty-item">
            <img :src="subItem.imgUrl" />
            <span class="name">{{ subItem.name }}</span>
            <span class="num">
              <i class="decrease" @click="decrease(subItem)">-</i>
              <span class="number">{{ subItem.num != 0 ? subItem.num : '' }} 件</span>
              <i class="add" @click="subItem.num++">+</i>
            </span>
            <span class="volume">{{ subItem.volume }}</span>
            <img alt="select-icon"
              class="select-icon"
              @click="selectCategory(subItem)"
              :src="selectCategoryIds.indexOf(subItem.id) !== -1 ? imgSrc.select : imgSrc.unSelect" />
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div class="description">
      <div class="desc-input">
        <h4>更多物品描述</h4>
        <textarea name="description" v-model="description" placeholder="请输入200字以内的物品描述"></textarea>
      </div>
      <p>我们荟聚了上百种大小各异的小仓库，根据您提交的预约条件， 我们将为您筛选合适您的小仓库类型供您选择，请您仔细勾选物品哦！</p>
    </div>

    <div class="information">·物悠无忧 · 链接都市生活·</div>

    <div class="choice-ware">
      <div class="choice-info">
        <div class="icon-wrap">
          <span class="ware-icon"></span>
        </div>

        <div>
          <p>预估大件物品: 2件</p>
          <p>预估仓位总体积: 6.6m³</p>
        </div>
      </div>
      <div class="ensure" @click="popupVisible = true">立即选仓位</div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      modal=true>
      <div class="select-list-warp">
        <div class="title">
          <p>已选清单物品：</p>
          <p><span class="recycle-icon"></span>清空</p>
        </div>
        <div class="select-list">
          <div class="categoty-item" v-for="item in isSelectList.list" :key="item.id" :id="item.id">
            <img :src="item.imgUrl">
            <span class="name">{{item.name}}</span>
            <span class="num">
              <i class="decrease">-</i> <span class="goods-number">{{ item.num }}</span> 件
              <i class="add">+</i></span> <span class="volume">{{ item.volume }}
            </span>
            <span class="needDis" v-if="item.needDis"><i class="circle"></i>需拆卸</span>
            <span class="needDis" v-else></span>
          </div>
          <div class="total-info-warp">
            <div class="total-item">
              <div class="item">
                <p>预计搬运物品:</p>
                <p>两件</p>
              </div>
              <div class="item">
                <p>估算立方数:</p>
                <p>1.8m³</p>
              </div>
              <div class="item">
                <p>搬家拆卸费:</p>
                <p>¥120</p>
              </div>
            </div>
          </div>
          <div class="description">
            <div class="desc-input">
              <h4>更多物品描述</h4>
              <textarea name="description" v-model="description" placeholder="请输入200字以内的物品描述" disabled></textarea>
            </div>
          </div>
        </div>
      </div>
    </mt-popup>
    <mt-datetime-picker
      ref="datePicker"
      type="date"
      year-format="{value}年"
      month-format="{value}月"
      date-format="{value}日"
      @confirm="handleConfirm"
      v-model="pickerValue">
    </mt-datetime-picker>

    <mt-popup v-model="showPicker" position="bottom" class="mint-datetime">
      <mt-picker :slots="slots" @change="onPickerChange" value-key="value"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import BMap from 'BMap'

export default {
  name: 'choice',
  data () {
    return {
      imgSrc: {
        select: require('../../assets/selected-icon.png'),
        unSelect: require('../../assets/select-icon.png')
      },
      pickerValue: new Date(),
      formatValue: '',

      showPicker: false,
      pickerDate: '',
      slots: [
        {
          flex: 1,
          values: [{value: '一个月', key: 1}, { value: '三个月', key: 2 }]
        }
      ],
      useValue: '',

      currentCategory: '1',
      selectCategoryList: [],
      categoryData: [
        {
          id: '1',
          name: '大型家具',
          list: [
            {
              id: '1-1',
              imgUrl: require('../../assets/1.png'),
              name: '床2m',
              volume: '4.4m³',
              num: 1
            },
            {
              id: '1-2',
              imgUrl: require('../../assets/2.png'),
              name: '4m门厨',
              volume: '2.2m³',
              num: 1
            },
            {
              id: '1-3',
              imgUrl: require('../../assets/3.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            },
            {
              id: '1-4',
              imgUrl: require('../../assets/4.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            },
            {
              id: '1-5',
              imgUrl: require('../../assets/5.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            },
            {
              id: '1-6',
              imgUrl: require('../../assets/6.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            },
            {
              id: '1-7',
              imgUrl: require('../../assets/7.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            },
            {
              id: '1-8',
              imgUrl: require('../../assets/8.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            }
          ]
        },
        {
          id: '2',
          name: '大型电器',
          list: [
            {
              id: '2-1',
              imgUrl: require('../../assets/1.png'),
              name: '床2m',
              volume: '4.4m³',
              num: 1
            },
            {
              id: '2-2',
              imgUrl: require('../../assets/2.png'),
              name: '4m门厨',
              volume: '2.2m³',
              num: 1
            },
            {
              id: '2-3',
              imgUrl: require('../../assets/3.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            }
          ]
        },
        {
          id: '3',
          name: '更多大件',
          list: [
            {
              id: '3-1',
              imgUrl: require('../../assets/1.png'),
              name: '床2m',
              volume: '4.4m³',
              num: 1
            },
            {
              id: '3-2',
              imgUrl: require('../../assets/2.png'),
              name: '4m门厨',
              volume: '2.2m³',
              num: 1
            },
            {
              id: '3-3',
              imgUrl: require('../../assets/3.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            }
          ]
        },
        {
          id: '4',
          name: '个人物品',
          list: [
            {
              id: '4-1',
              imgUrl: require('../../assets/1.png'),
              name: '床2m',
              volume: '4.4m³',
              num: 1
            },
            {
              id: '4-2',
              imgUrl: require('../../assets/2.png'),
              name: '4m门厨',
              volume: '2.2m³',
              num: 1
            },
            {
              id: '4-3',
              imgUrl: require('../../assets/3.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            }
          ]
        },
        {
          id: '5',
          name: '小件物品',
          list: [
            {
              id: '5-1',
              imgUrl: require('../../assets/1.png'),
              name: '床2m',
              volume: '4.4m³',
              num: 1
            },
            {
              id: '5-2',
              imgUrl: require('../../assets/2.png'),
              name: '4m门厨',
              volume: '2.2m³',
              num: 1
            },
            {
              id: '5-3',
              imgUrl: require('../../assets/3.png'),
              name: '2m衣橱',
              volume: '1.8m³',
              num: 1
            }
          ]
        }
      ],

      description: '',
      popupVisible: false,
      isSelectList: {
        price: 900,
        list: [
          {
            id: 1,
            imgUrl: require('../../assets/1.png'),
            name: '2m衣橱',
            volume: '1.8m³',
            num: 2,
            needDis: 0
          },
          {
            id: 2,
            imgUrl: require('../../assets/2.png'),
            name: '25m衣橱',
            volume: '1.8m³',
            num: 4,
            needDis: 1
          },
          {
            id: 3,
            imgUrl: require('../../assets/3.png'),
            name: '12m衣橱',
            volume: '1.8m³',
            num: 3,
            needDis: 0
          }
        ]
      }
    }
  },
  computed: {
    selectCategoryIds () {
      let ids = []
      this.selectCategoryList.forEach(item => ids.push(item.id))
      return ids
    }
  },
  mounted () {
    // 百度地图API功能
    let map = new BMap.Map('allmap')
    map.centerAndZoom(new BMap.Point(120.16675, 30.25393), 15)

    let iconUrl = require('../../assets/colorful-box.png')
    let myIcon = new BMap.Icon(iconUrl, new BMap.Size(40, 40))
    let marker = new BMap.Marker(new BMap.Point(120.16675, 30.25393), {icon: myIcon})
    map.addOverlay(marker)
  },
  methods: {
    formatZero (value) {
      return value < 10 ? `0${value}` : value
    },
    formatDate (dateStr) {
      const date = new Date(dateStr)
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = date.getDate()
      return `${y}年${this.formatZero(m)}月${this.formatZero(d)}日`
    },
    handleConfirm () {
      this.formatValue = this.pickerValue ? this.formatDate(this.pickerValue) : ''
    },
    onPickerChange (picker, values) {
      this.pickerDate = values[0]
    },
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
    },
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
  font-size: 12px;
  .mint-popup {
    width: 100%;
  }
  #allmap {
    width:100%;
    height:150px;
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
  }

  .map {
    position: relative;

    .colorful-box-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .px2rem(width, 50);
      .px2rem(height, 50);
    }
  }

  .reservation {
    color: @color-primary;
    background-color: #fff;

    .reservation-title {
      position: relative;
      .px2rem(margin-top, 45);
      .px2rem(margin-bottom, 45);
      font-size: 14px;
      font-weight: normal;
      text-align: center;

      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 8px;
        background-color: @color-primary;
        vertical-align: middle;
        transform: rotate(45deg);
      }

      &:before, &:after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        content: ' ';
        .px2rem(width, 128);
        border-bottom: 1px solid @border-color;
      }

      &:before {
        .px2rem(margin-left, -128);
      }
    }

    .reservation-condition {
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      font-size: 12px;

      .condition-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        .px2rem(padding-left, 20);
        .px2rem(padding-right, 20);
        .px2rem(height, 80);
        margin-bottom: 8px;
        background-color: #f3f7f9;
        border-radius: 3px;

        label {
          color: @gray-font-color;

          .icon {
            display: inline-block;
            .px2rem(width, 36);
            .px2rem(height, 38);
            margin-right: 5px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 0 0;
            vertical-align: middle;

            &.date-icon {
              background-image: url('../../assets/date-icon.png');
            }
            &.time-icon {
              background-image: url('../../assets/time-icon.png');
            }
            &.use-icon {
              background-image: url('../../assets/use-icon.png');
            }
          }
        }

        .value {
          flex: 1;
          text-align: center;
          color: #333;
        }

        .choice {
          display: inline-block;
          .px2rem(width, 36);
          .px2rem(height, 32);
          background: url('../../assets/select-triangle.png') no-repeat 0 0;
          background-size: cover;
        }

        .radio-group {
          margin-left: 12px;

          .radio-input {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-right: 2px;
            margin-top: -1px;
            line-height: 1;
            background-color: #fff;
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 100%;
            vertical-align: middle;
          }

          .radio-text {
            color: #333;
          }

          .radio:checked {
            + .radio-input {
              &:after {
                content: "";
                display: inline-block;
                width: 10px;
                height: 10px;
                margin: 2px;
                background-color: @color-primary;
                border-radius: 100%;
              }

              + .radio-text {
                color: @color-primary;
              }
            }
          }
        }
      }

      @media screen and (max-width: 321px) {
        .condition-item:last-child {
          .px2rem(height, 160);

          .radio-group {
            label:last-child {
              display: block;
              margin-top: 2px;
            }
          }
        }
      }
    }
  }

  .furniture-type {
    .tips {
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      .px2rem(height, 66);
      .px2rem(line-height, 66);
      color: #898989;
      font-size: 12px;
    }

    .mint-tab-item {
      position: relative;
      padding: 0;
      .px2rem(height, 64);
      color: #fff;
      background-color: #d0d5d8;

      border-right: 1px solid #fff;
      &:last-child {
        border-right: 0;
      }

      .mint-tab-item-label {
        .px2rem(line-height, 64);
      }

      &.is-selected {
        background-color: @color-primary;
        border-bottom: 0;
        margin-bottom: 0;

        &:after {
          position: absolute;
          content: '';
          width: 6px;
          height: 6px;
          bottom: -3px;
          left: 50%;
          margin-left: -3px;
          background-color: #fff;
          transform: rotate(45deg);
        }
      }
    }

    .mint-tab-container-item {
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      background-color: #fff;

      .categoty-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .px2rem(height, 100);
        font-size: 12px;
        color: @color-primary;
        border-bottom: 1px dashed @border-color;

        &:first-child {
          .px2rem(margin-top, 16);
        }

        &:last-child {
          border-bottom: 0;
        }

        img {
          .px2rem(width, 80);
          .px2rem(height, 80);
        }

        .name {
          .px2rem(width, 175);
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
          .number {
            display: inline-block;
            width: 28px;
            text-align: center;
          }
        }

        .select-icon {
          .px2rem(width, 36);
          .px2rem(height, 36);
        }
      }
    }
  }

  .description {
    margin-top: 10px;
    .px2rem(padding, 32);
    font-size: 12px;
    background-color: #fff;

    .desc-input {
      .px2rem(padding, 32);
      .px2rem(margin-bottom, 24);
      background-color: #f3f7f9;
      border-radius: 8px;

      h4 {
        color: #c7c8c9;
        margin-bottom: 7px;
      }

      textarea::-webkit-input-placeholder {
        color: #dcdddd;
      }

      textarea {
        width: 100%;
        min-height: 77px;
        background-color: #f3f7f9;
        outline: none;
        resize: none;
      }
    }

    p {
      .px2rem(margin-left, 24);
      .px2rem(margin-right, 24);
      color: @gray-font-color;
      text-align: center;
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
    z-index: 99999;
    font-size: 12px;

    .choice-info {
      display: flex;
      flex: 1;
      align-items: center;
      .px2rem(height, 100);
      .px2rem(padding-left, 16);
      background-color: #4d4d4d;

      .icon-wrap {
        .px2rem(padding, 30);
        .px2rem(margin-top, -36);
        background-color: #4d4d4d;
        border-radius: 50%;

        .ware-icon {
          display: inline-block;
          .px2rem(width, 64);
          .px2rem(height, 64);
          background: url(../../assets/ware-box.png) no-repeat 0 0;
          background-size: cover;
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

  .select-list-warp {
    margin-bottom: 70px;
    .title {
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      background-color: @bg-color;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 100);
      .recycle-icon{
        display: inline-block;
        .px2rem(width, 34);
        .px2rem(height, 34);
        margin-right: 6px;
        background: url('../../assets/recycle.png') no-repeat 0 0;
        background-size: cover;
        vertical-align: middle;
      }
    }
    .select-list {
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      background-color: #fff;
      .categoty-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .px2rem(height, 100);
        font-size: 12px;
        border-bottom: 1px solid @bg-color;
        &:first-child {
          .px2rem(margin-top, 16);
        }

        &:last-child {
          border-bottom: 0;
        }
        .needDis{
          width: 65px;
          .circle {
            display: inline-block;
            .px2rem(width, 22);
            .px2rem(height, 22);
            .px2rem(margin-right, 8);
            border: 1px solid #000000;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        img {
          .px2rem(width, 80);
          .px2rem(height, 80);
        }

        .name {
          .px2rem(width, 175);
        }

        .num {
          .add {
            color: @color-primary;
          }
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
          .goods-number {
            display: inline-block;
            width: 12px;
            text-align: center;
          }

          .decrease {
            color: #999;
            border-color: #999;
          }
        }
      }
      .description {
        margin-top: -20px;
        .px2rem(padding-top, 10);
        .px2rem(padding-bottom, 10);
        textarea {
          color: @color-primary;
          min-height: 50px;
        }
      }
      .tips-warp {
        width: 80%;
        margin: 0 auto 20px;
        color: @gray-font-color;
      }
    }
  }

  .total-info-warp {
    display: flex;
    align-items: center;
    .px2rem(height, 220);
    color: #fff;
    .total-item {
      border-radius: 5px;
      width: 60%;
      background-color: @color-primary;
      margin: auto;
      .px2rem(padding-left, 40);
      .px2rem(padding-right, 40);
      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .px2rem(height, 40);
      }
    }
  }
}
</style>
