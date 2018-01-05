<template>
  <div class="Home">
      <div class="add-task-content">
          <input type="text" class="task-input" v-model="taskInput" placeholder="请输入内容">
          <button @click="addTask" class="task-btn">确定</button>
      </div>
      <div class="task-list">
          <!--
          对于每个任务有哪些操作？
            1.标记已经完成
            2.删除（添加错了）
            3.完成是可能有备注

          -->
          <ul>
              <li v-for="(task,index) in taskList">
                  {{index + 1}},{{task}}
              </li>
          </ul>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
          taskInput:"",
          taskList:[
              "做操作系统实验",
              "看电影"
          ]
    }
  },
    methods:{
      addTask:function () {
          console.log("niaho")
         this.taskList.push(this.taskInput)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
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
    ul
        margin 0
        padding 0
      li
          list-style none
          border-bottom 1px silver solid
          padding-left 2rem
          line-height 5rem




</style>
