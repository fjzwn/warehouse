<template>
  <div id="app">
    <mt-header fixed title="预选小仓库">
      <a href="javascript:;" slot="left" class="back"></a>
      <a href="javascript:;" slot="right">仓位说明</a>
    </mt-header>

    <div>

    </div>

    <mt-tabbar v-model="currentTab">
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
      currentTab: 'index'
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
}
</style>
