<template>
  <div id="app">
      <el-container>
          <el-header>{{actionList[action]}}<span @click="getDayTaskList" class="share">分享</span></el-header>
          <el-main>
              <keep-alive>
                  <transition mode="out-in"
                              enter-active-class="animated bounceInLeft">
                      <router-view/>
                  </transition>
              </keep-alive>
          </el-main>
          <el-footer>
              <router-link @click.native="changeAction(0)" to="/day">今日计划</router-link>
              <router-link @click.native="changeAction(1)" to="/share">分享圈</router-link>
              <router-link @click.native="changeAction(2)" to="/history">历史</router-link>
          </el-footer>
      </el-container>
     <!-- <div @click="showAdd($event)" class="edit-btn">
          <div  class="add-btn">add</div>
          <router-link @click.native="commit(true)" to="/edit" class="add-week-plan">周</router-link>
          <router-link @click.native="commit(false)" to="/edit" class="add-day-plan">日</router-link>
      </div>-->


  </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return{
            actionList:[
                "今日计划",
                "分享圈",
                "历史"
            ],
            action: 0
        }
    },
    methods: {
        /**
         * 初始化action
         * */
        initAction: function () {
            console.log("dajiahao")
            this.action = store.get("action") ? store.get("action") : 0
        },
        /**
         * 展示右下角的按钮
         * @param event
         */
        showAdd: function (event) {
            let e = event.currentTarget
            let target1 = $(e).children(".add-week-plan")
            let target2 = $(e).children(".add-day-plan")
            target1.toggleClass("changeBtnWeek")
            target2.toggleClass("changeBtnDay")
        },
        /**
         * 改变header的文字
         * @param num
         */
        changeAction: function (num) {
            this.action = num
        },
        /**
         * 得到要分享的今日计划
         */
        getDayTaskList: function (){
            let shareTaskIist = store.get("dayTaskList") ? store.get("dayTaskList"):{}
            if (shareTaskIist.list.length){
                this.$http.post("/api/addshare",{
                    shareList : JSON.stringify(shareTaskIist),
                    shareUser : "念念公子"
                })
                    .then(function(res){
                        if(res.data.ok == 1 )
                            console.log("成功")
                    })
                    .catch(function(err){
                        console.log(err)
                    })
            }

        }
    },
    mounted:function(){
        this.initAction()
    },
    watch: {
        action: function (newAction) {
            store.set("action",this.action)
        }
    }
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
          color #333
          text-decoration none
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
    .edit-btn
        position fixed //先是定位position
        right 2rem
        bottom 8rem
        padding 0//盒子模型
        border 1px saddlebrown solid
        width 6rem //二是控制外观
        height 6rem
        background-color yellow
        border-radius 100%
        line-height 6rem
        text-align center
        letter-spacing 0
        font-size 1.6rem  //三是内容，字体

      .add-btn
          position relative
          height 100%
          width 100%
          z-index 50
          border-radius 100%
          background-color yellow
      .add-week-plan,
      .add-day-plan
          position absolute
          top 0.5rem
          left 0.5rem
          width 5rem
          height 5rem
          border 1px salmon solid
          border-radius 100%
          background-color lawngreen
          line-height 5rem
          font-size 1.6rem
          transition .5s
    .changeBtnWeek
        top -13rem
    .changeBtnDay
        top -6.5rem
    .share
        display inline-block
        float right




</style>
