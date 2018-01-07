<template>
  <div class="home">
      <div class="add-task-content">
          <input type="text" class="task-input" v-model="taskInput" placeholder="请输入内容">
          <el-button @click="addTask" class="task-btn">确定</el-button>
      </div>
      <div class="task-list">
          <transition-group name="bounceLeft" tag="ul"  class="list-group">
              <li @click="showSlideToggle($event)" v-for="(task,index) in taskList" :key="index">
                  <div class="index">{{index + 1}}</div>
                  <div class="task">{{task}}</div>
                  <div @click="showDetail($event)" class="more">.<br>.<br>.
                      <div class="detail">
                          <div class="btn" @click="deleteTask(index)" >删除</div>
                          <div class="btn" @click="finished($event)" >完成</div>
                          <div @click="showSlideToggle1($event)" class="btn">备注</div>
                      </div>
                  </div>
                  <div class="remarks">
                      备注：这次的完成度为70%，实在太累先放一放
                  </div>
              </li>
          </transition-group>
      </div>
      <div @click="hiddenMask" class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
          taskInput:"",
          taskList:[],
          nowTargetE:""
    }
  },
    methods:{
        /*
        * 添加task
        * */
        addTask:function () {
            if (this.taskInput == "")
                return false
            this.taskList.push(this.taskInput)
            this.taskInput=""
            store.set("taskList",this.taskList)
        },
        /**
         * 初始化页面中需要使用的taskList
         */
        initTaskList:function(){
            this.taskList=store.get("taskList")
        },
        /**
         *删除任务
         * @param index
         */
        deleteTask:function (index) {
            this.taskList.splice(index,1)
            store.set("taskList",this.taskList)
        },
        /**
         * 标记完成任务
         * @param event
         */
        finished:function (event) {
            let e = event.currentTarget
            let targetE = $(e).parent().parent().parent().children(".task")
            targetE.toggleClass("addlinethrough")
        },
        /**
         * 展示备注
         * @param event
         */
        showDetail:function (event) {
            event.stopPropagation()
            let e = event.currentTarget
            let targetE = $(e).children(".detail")
            this.nowTargetE = targetE
            targetE.toggle()
            $(".mask").toggle()
        },
        /**
         * 隐藏遮罩
         */
        hiddenMask:function () {
            $(".mask").toggle()
            this.nowTargetE.toggle()
        },
        /**
         * 点击li的内容，展示detail
         * @param event
         */
        showSlideToggle:function (event) {
            let e = event.currentTarget
            let targetE = $(e).children(".remarks")
            targetE.slideToggle()
        },
        /**
         * 同上不过用在了备注这个按钮
         * @param event
         */
        showSlideToggle1:function (event) {
            let e = event.currentTarget
            let targetE = $(e).parent().parent().parent().children(".remarks")
            targetE.slideToggle()
        }

    },
    mounted(){
        this.initTaskList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .home
        width 100%
        display block
  .add-task-content
      width 100%
      display flex
  .task-input
      font-size 1.6rem
      flex-grow 1
      display inline-block border 0
      box-sizing border-box
      height 4.5rem
      padding 0
      padding-left 0.5rem
      border 0

  .task-btn
      width 8rem
      padding 0
      display inline-block
      box-sizing border-box
      height 4.5rem
      vertical-align top
      border 0
      border-left 1px silver solid

  .task-list
      padding-top 2rem
      width 100%
    ul
        margin 0
        padding 0
        width 100%
        display block
      li
          position relative
          list-style none
          border-bottom 1px silver solid
          line-height 5rem
          display flex
          flex-wrap wrap

        .index
            width 5%
            text-align center
        .task
            width 85%
            overflow hidden
            padding-left 1rem
            padding-right 1rem
            height 5rem
        .more
            width 8%
            height 5rem
            color #666
            text-align center
            font-size 50px
            line-height 8px
            text-align top
            position relative
          .detail
              position absolute
              top 5rem
              right 0
              width 8rem
              background-color #ffffff
              opacity 1
              font-size 1.6rem
              line-height 2.4rem
              padding 1rem
              box-sizing border-box
              z-index 71
              display none
            .btn + .btn
                border-top 1px #000000 solid
  .addlinethrough
      text-decoration line-through
  .mask
      position fixed
      top 0
      left 0
      bottom 0
      right 0
      background-color #000
      opacity 0
      display none
      z-index 70

  .remarks
      /*position absolute*/
      /*top 5rem*/
      display block
      width 100%
      height 10rem
      display none




</style>
