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
        <li>
          <div class="move-service-icon"></div>
          <div>
            <p><b>搬运服务项目: </b><input v-model="moveService" placeholder="为您专业的提供装运搬卸等服务" /></p>
          </div>
        </li>
      </ul>
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
      <div class="ensure">立即结算</div>
    </div>
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
      carUseTime: '点击选择预约车辆时间',
      pickerValue: new Date(),
      detailAddress: '',
      destination: '',
      moveService: ''
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
      background-color: #ed9d25;
    }
  }

}
</style>
