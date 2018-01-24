<template>
  <div id="app">
    <img src="../../assets/1.png" />
    <p>this is choice page</p>
    <mt-button type="default">default</mt-button>
  </div>
</template>

<script>
export default {
  name: 'choice',
  mounted () {
    console.log(111)
  }
}
</script>

<style lang="less">
@import '../../styles/common.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
