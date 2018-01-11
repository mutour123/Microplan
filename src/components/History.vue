<template>
    <div class="history">
        <ul>
            <li v-for="item in historyTaskList">
                <div class="time"><div class="cirle"></div>{{new Date(item.time).getFullYear()+"年"+(new Date(item.time).getMonth()+1)+"月"+new Date(item.time).getDate()}}</div>
               <!-- <h2>{{new Date(item.time).getFullYear()+"年"+(new Date(item.time).getMonth()+1)+"月"+new Date(item.time).getDate()}}</h2>
            -->    <ul class="task-list">
                    <li class="task" v-for="(task,index) in item.list">
                        <span class="index">{{(index+1)}}</span> <span :class="{addlinethrough : task.state}"> {{task.content}}</span>
                    </li>
                </ul>

            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "history",
        data(){
            return {
                historyTaskList:[]
            }
        },
        methods:{
            getHisttory:function(){
                /*getHisttory:()=>{
                console.log("this++++++++++++++++++++")
                console.log(this)
                console.log("初始+++++++++++++++")
                console.log(this.historyTaskList)*/
                this.historyTaskList = store.get("historyTaskList") ? store.get("historyTaskList") : []
                this.historyTaskList.reverse()
           /*     console.log("======================")
                console.log(this.historyTaskList)*/
            }
        },
        mounted(){
            this.getHisttory()
        }
    }
</script>

<style lang="stylus" scoped>
    .history
        overflow auto
        height 100%
        width 100%
    .history::-webkit-scrollbar {
        width: 10px;
    }
    .scrollbar::-webkit-scrollbar-thumb{
        width: 10px;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;

    }



    ul
        margin 0
        padding 0
    li
        list-style none
        /*border 1px saddlebrown solid*/
    .cirle
        position relative
        top .5rem
        margin-right 1rem
        width 2.5rem
        height 2.5rem
        border 1px solid #333
        display inline-block
        border-radius 100%
        /*background-color lawngreen*/
    .time
        font-size 1.8rem
        font-weight bold
        line-height 4rem
        padding-left 1rem
    .task-list
        padding-left 2rem
    .task
        padding-left 3rem
        line-height 3rem
        border-left 1px seagreen solid
    .index
        display inline-block
        width 1.5rem
    .addlinethrough
        text-decoration line-through



</style>
