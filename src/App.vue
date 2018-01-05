<template>
  <div id="app">
    <el-container>
      <el-header>今日计划</el-header>

      <el-main>
        <router-view/>
      </el-main>

      <el-footer>
          <router-link to="/">今日计划</router-link>
          <router-link to="/week">周计划</router-link>
          <router-link to="/history">历史</router-link>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center

    .el-header, .el-footer
        background-color #409EFF
        color #333
        text-align center
        line-height 6rem
        flex-grow 0

    .el-footer
        display flex
      a
          flex-grow 1
      a + a
          border-left 1px silver solid
    .el-main {
        background-color #E9EEF3
        color #333
        flex-grow 1
        padding 1rem
    }
    .el-container
        flex-direction column
        color red
        height 100vh
        box-sizing border-box
        text-align left
        font-size 1.6rem


/*.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}*/



</style>
