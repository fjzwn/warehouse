<template>
  <div id="app">
    <mt-header fixed title="定制搬家">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right">价位说明</a>
    </mt-header>
    <div class="move-info-warp">
      <div class="use-car-time-warp">
        <p><span class="icon clock"></span><b>用车时间:</b></p>
        <p @click="$refs.datePicker.open()"><span class="user-car-time">{{ carUseTime }}</span><span class="icon right"></span></p>
      </div>
      <ul class="address-warp">
        <li>
          <div class="orange-circle"></div>
          <div>
            <p><b>昌南逸墅 (当前定位)</b></p>
            <p><b>详细地址: </b>&nbsp;&nbsp;&nbsp;<input v-model="detailAddress" placeholder="详细地址不能为空" /></p>
          </div>
        </li>
        <li>
          <div class="blue-circle"></div>
          <div>
            <p><b>输入目的地: </b><input v-model="destination" placeholder="目的地不能为空" /></p>
          </div>
        </li>
        <li class="move-distance">
          <div class="distance">
              <span>估算搬家距离</span>
              <i>30KM</i>
          </div>
        </li>
        <li>
          <div class="move-service-icon"></div>
          <div>
            <p><b>搬运服务项目: </b><input v-model="moveService" placeholder="为您专业的提供装运搬卸等服务" /></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="move-category">
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
              <span class="goods-number">{{ subItem.num == 0 ? '' : subItem.num }}</span> 件
              <i class="add" @click="subItem.num++">+</i>
            </span>
            <span class="volume">{{ subItem.volume }}</span>
            <img alt="select-icon"
                 class="select-icon"
                 @click="selectCategory(subItem)"
                 :src="selectCategoryIds.indexOf(subItem.id) !== -1 ? imgSrc.select : imgSrc.unSelect" />
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
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <!-- 住宅类型 -->
    <div class="house-type">
      <p><span class="icon"></span>住宅类型：</p>
      <p class="radio-group">
        <label>
          <input class="radio" type="radio" v-model="houseType"  value="1" />
          <span class="radio-input" :class="houseType == 1 ? 'houseSelect' : ''"></span>
          <span class="radio-text">别墅</span>
        </label>
        <label>
          <input class="radio" type="radio" v-model="houseType" value="2" />
          <span class="radio-input" :class="houseType == 2 ? 'houseSelect' : ''"></span>
          <span class="radio-text">大楼</span>
        </label>
      </p>
    </div>

    <!-- 所在楼层 -->
    <div class="floor-position">
      <p><span class="icon"></span>所在楼层：</p>
      <div class="at-floor" @click="setPopupVisible(1)">
        {{ nowFloor }}
        <span class="down"></span>
      </div>
      <p class="lift-radio-group">
        <label>
          <input class="radio" type="radio" v-model="liftType"  value="1" />
          <span class="radio-text" :class="liftType == 1 ? 'lift-select' : 'lift-not-select'">无电梯</span>
        </label>
        <label>
          <input class="radio" type="radio" v-model="liftType" value="2" />
          <span class="radio-text" :class="liftType == 2 ? 'lift-select' : 'lift-not-select'">有电梯</span>
        </label>
      </p>
    </div>
    <div class="extra-info">
      <div>
        <p><span class="icon use"></span><b>我需要购买耗材:</b></p>
        <p><span class="select-use-pack">选购搬运耗材</span><span class="icon right"></span></p>
      </div>
      <div>
        <p><span class="icon message"></span><b>给司机捎句话:</b></p>
        <p><input type="text" placeholder=""/></p>
      </div>
    </div>

    <div class="description">
      <div class="desc-input">
        <h4>更多物品描述</h4>
        <textarea name="description" v-model="description" placeholder="请输入200字以内的物品描述"></textarea>
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
          <p>合计金额: ¥1200</p>
        </div>
      </div>
      <div class="ensure" @click="setPopupVisible(2)">立即结算</div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom"
      modal=true>
      <div class="select-list-warp" v-if="selectList">
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
          <div class="tips">
            <div class="tips-warp">
              <p>温馨提示</p>
              <p>搬家费用计算规则:搬家公里数 + 搬家物品总立方数 + 拆卸费</p>
              <p>由于所选规则不同则产生的费用即不同，请您谨慎选择</p>
            </div>
          </div>
        </div>
      </div>
      <mt-picker :slots="floors" @change="onValuesChange" v-if="floorPicker">
      </mt-picker>
    </mt-popup>
    <mt-datetime-picker
      ref="datePicker"
      type="datetime"
      year-format="{value}"
      month-format="{value}月"
      date-format="{value}日"
      hour-format="{value}时"
      minute-format="{value}分"
      @confirm="handleConfirm"
      v-model="pickerValue">
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  name: 'customMove',
  data () {
    return {
      imgSrc: {
        select: require('../../assets/selected-warn-icon.png'),
        unSelect: require('../../assets/select-icon.png')
      },
      carUseTime: '点击选择预约车辆时间',
      pickerValue: new Date(),
      detailAddress: '',
      destination: '',
      moveService: '',
      formatValue: '',
      moveProject: '',
      currentCategory: '1',
      selectCategoryList: [],
      categoryData: [{
        id: '1',
        name: '需拆卸',
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
        name: '无需拆卸',
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
        name: '大件物品',
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
        name: '零碎物品',
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
            num: 1}
        ]
      }
      ],
      houseType: '1',

      showPicker: false,
      pickerDate: '',
      slots: [
        {
          flex: 1,
          values: [{value: '一个月', key: 1}, { value: '三个月', key: 2 }]
        }
      ],

      description: '',
      popupVisible: false,
      floors: [
        {
          values: [
            '1楼',
            '2楼',
            '3楼'
          ]
        }
      ],
      nowFloor: '1楼',
      floorPicker: false,
      liftType: 1,
      selectList: false,

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
      const h = date.getHours()
      const min = date.getMinutes()
      return `${y}年${this.formatZero(m)}月${this.formatZero(d)}日${this.formatZero(h)}时${this.formatZero(min)}分`
    },
    handleConfirm () {
      this.carUseTime = this.pickerValue ? this.formatDate(this.pickerValue) : ''
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
    },
    onPickerChange (picker, values) {
      this.pickerDate = values[0]
    },
    onValuesChange (picker, values) {
      this.nowFloor = values[0]
    },
    setPopupVisible (type) {
      this.popupVisible = true
      type === 1 ? this.floorPicker = true : this.floorPicker = false
      type === 2 ? this.selectList = true : this.selectList = false
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
  .mint-popup {
    width: 100%;
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
    border-bottom: 1px solid @bg-color;
  }

  .move-info-warp {
    background-color: #fff;
    .use-car-time-warp {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 100);
      .px2rem(padding-left, 24);
      .px2rem(padding-right, 24);
      border-bottom: 1px solid @bg-color;
      color: #777575;
      .icon {
        display: inline-block;
        .px2rem(width, 40);
        .px2rem(height, 40);
        margin-right: 5px;
        vertical-align: middle;

        &.clock {
          background: url('../../assets/clock.png') no-repeat 0 0;
          background-size: cover;
        }
        &.right {
          background: url('../../assets/arrow-right.png') no-repeat 0 0;
          .px2rem(width, 24);
          .px2rem(height, 46);
          background-size: cover;
        }
      }
      .user-car-time {
        .px2rem(margin-right, 15);
      }
      border-bottom: 1px solid @bg-color;
    }

    .address-warp {
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        .px2rem(height, 130);
        .px2rem(padding-left, 32);
        .px2rem(padding-right, 24);
        border-bottom: 1px solid @bg-color;
        color: #777575;
        p {
          .px2rem(margin-top, 10);
          .px2rem(margin-bottom, 10);
          input {
            .px2rem(margin-left, 20);
            .px2rem(width, 450)
          }
        }
        .orange-circle {
          .px2rem(width, 28);
          .px2rem(height, 28);
          .px2rem(margin-right, 8);
          border: 1px solid #ed9d25;
          border-radius: 50%;
        }
        .blue-circle {
          .px2rem(width, 28);
          .px2rem(height, 28);
          .px2rem(margin-right, 8);
          border: 1px solid deepskyblue;
          border-radius: 50%;
        }
        .move-service-icon {
          background: url('../../assets/move-box.png') no-repeat 0 0;
          .px2rem(width, 28);
          .px2rem(height, 28);
          background-size: cover;
          margin-right: 5px;
        }
      }
      li:nth-child(2) {
        border-bottom: none;
      }
      .move-distance {
        text-align: center;
        .distance {
          width: 60%;
          background-color: #ed9d25;
          .px2rem(height, 80);
          .px2rem(line-height, 80);
          color: #fff;
          border-radius: 5px;
          margin: auto;
          .px2rem(font-size, 25);
        }
      }
    }
  }

  .move-category {
    margin-bottom: 6px;

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
        background-color: @color-warn;
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
        color: @color-warn;
        border-bottom: 1px solid @bg-color;

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
            border: 1px solid @color-warn;
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

        .select-icon {
          .px2rem(width, 36);
          .px2rem(height, 36);
        }
      }
    }
    .total-info-warp {
      .px2rem(height, 150);
    }
    .total-item {
      width: 57%!important;
      .item {
        .px2rem(height, 50)!important;
      }
    }
  }

  // 住宅类型
  .house-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
    .px2rem(height, 98);
    .px2rem(padding-left, 48);
    .px2rem(padding-right, 48);
    background-color: #fff;

    p:first-child {
      span.icon {
        display: inline-block;
        .px2rem(width, 34);
        .px2rem(height, 34);
        margin-right: 6px;
        background: url('../../assets/build-icon.png') no-repeat 0 0;
        background-size: cover;
        vertical-align: middle;
      }
    }
    .houseSelect {
      border: 5px solid #ed9d25!important;
    }
    p.radio-group {
      margin-left: 18px;
      input {
        display: none;
      }
      label:first-child {
        .px2rem(margin-right, 60);
      }

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
        .radio-input {
          &:after {
            content: "";
            display: inline-block;
            width: 10px;
            height: 10px;
            margin: 2px;
            background-color: @color-warn;
            border-radius: 100%;
          }

          .radio-text {
            color: @color-warn;
          }
        }
      }
    }
  }

  // 所在楼层
  .floor-position {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 6px;
    .px2rem(height, 173);
    .px2rem(padding-left, 48);
    .px2rem(padding-right, 48);
    background-color: #fff;

    p:first-child {
      span.icon {
        display: inline-block;
        .px2rem(width, 34);
        .px2rem(height, 34);
        margin-right: 6px;
        background: url('../../assets/floor-icon.png') no-repeat 0 0;
        background-size: cover;
        vertical-align: middle;
      }
    }
    .at-floor {
      color: #ed9d25!important;
      .px2rem(margin-left, 20);
      .down {
        display: inline-block;
        .px2rem(width, 34);
        .px2rem(height, 34);
        background: url('../../assets/down.png') no-repeat 0 0;
        background-size: cover;
        vertical-align: middle;
      }
    }
    .lift-radio-group {
      input {
        display: none;
      }
      .px2rem(margin-left, 120);
      .radio-text {
        display: inline-block;
        .px2rem(width, 80);
        .px2rem(height, 80);
        .px2rem(line-height, 80);
        .px2rem(margin-right, 30);
        text-align: center;
        border-radius: 50%;
        vertical-align: middle;
        &.lift-select {
          color: #fff;
          background-color: #ed9d25;
        }
        &.lift-not-select {
          border: 1px solid #ed9d25;
          color: #ed9d25;
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

  //额外信息
  .extra-info {
    background-color: #fff;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .px2rem(height, 100);
      .px2rem(padding-left, 48);
      .px2rem(padding-right, 24);
      border-bottom: 1px solid @bg-color;
      color: #777575;
      .select-use-pack {
        .px2rem(margin-right, 10);
      }
      .icon {
        display: inline-block;
        .px2rem(width, 40);
        .px2rem(height, 40);
        margin-right: 5px;
        vertical-align: middle;

        &.use {
          background: url('../../assets/move-box.png') no-repeat 0 0;
          background-size: cover;
        }
        &.message{
          background: url('../../assets/order-icon.png') no-repeat 0 0;
          background-size: cover;
        }
        &.right {
          background: url('../../assets/arrow-right.png') no-repeat 0 0;
          .px2rem(width, 24);
          .px2rem(height, 46);
          background-size: cover;
        }
      }
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
    z-index: 99999;
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
      background-color: #ed9d25;
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
            color: @color-warn;
          }
          .decrease, .add {
            display: inline-block;
            width: 18px;
            height: 18px;
            line-height: 1;
            text-align: center;
            border: 1px solid @color-warn;
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
          color: @color-warn;
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
      background-color: @color-warn;
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
