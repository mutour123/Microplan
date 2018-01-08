<template>
    <div class="edit">
        <div class="add-task-content">
            <!--<input type="text" class="task-input" v-model="taskInput" placeholder="请输入内容">-->
            <el-button @click="addTask" class="task-btn">确定</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data() {
            return {
                taskInput:"",
                taskList:[],
            }
        },
        methods:{
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

        },
        mounted(){
            this.initTaskList()
        }
    }
</script>
<style lang="stylus" scoped>
    .add-task-content
        width 100%
        display flex
        background-color yellow
        border 1px silver solid
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


</style>
