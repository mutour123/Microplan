<template>
    <div class="share">
        <div class="aPage" v-for="nowdata in shareList">
            <div class="header">
                <div class="pic-con">
                    <img class="pic" src="../../static/img/logo.png" alt="">
                </div>
                <div class="title">
                    <div class="name">{{nowdata.shareUser}}</div>
                    <div class="time">{{new Date(JSON.parse(nowdata.shareList).time).getFullYear() + "年" +(new Date(JSON.parse(nowdata.shareList).time).getMonth()+1)+"月"+new Date(JSON.parse(nowdata.shareList).time).getDate()+"日"}}</div>
                </div>
            </div>
            <div class="content">
                <ul>
                    <li class="task-con">
                        <ul>
                            <li class="task" v-for="(task,index) in JSON.parse(nowdata.shareList).list">
                                {{(index+1)+"，" + task.content}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="dianzhan">
                <ul>
                    <li class="dianzhanList"><img class="dianzhanPic" src="../../static/img/timg.jpg" alt=""></li>
                    <li class="dianzhanList"><img class="dianzhanPic1" src="../../static/img/pinglun.png" alt=""></li>
                </ul>
            </div>
            <div class="comment">
                <ul>
                    <li class="commentList"><span class="username">念念公子</span>：<span>好好学习，天天向上。你好我好大家好你好我好大家好你好我好大家好。</span></li>
                    <li><span class="username">念念公子</span>：<span>好好学习，天天向上。</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "share",
        data() {
            return {
                shareList:[]
            }
        },
        methods:{
            /**
             * 获取列表
             */
            getShareList: function() {
                let _this = this
                this.$http.get('/api/getshare')
                    .then(function(res){
                        _this.shareList=(res.data).reverse()
                    })
                    .catch(function(err){
                        console.log(err)
                    })
            }
        },
        mounted(){
            this.getShareList()
        }

    }
</script>

<style lang="stylus" scoped>
    .share
        width 100%
        height 100%
    .aPage
        border-bottom  1px silver solid
        padding-bottom 3rem

    .header
        padding .8rem
        height 6rem
    .pic
        width 4.5rem
        border-radius 100%
    .pic-con
        display inline-block
        vertical-align top
    .name
        font-weight bold
        font-size 1.7rem
    .time
        font-size 1.4rem
    .title
        display inline-block
        padding-left .5rem
    ul
        margin 0
        padding 0
    li
        list-style none
    .task-con
        padding-left 2rem
        padding-top .3rem
    .task
        line-height 3rem
    .dianzhan
        overflow hidden
        padding-right 2rem
        /*border-bottom 1px silver solid*/
    .dianzhanList
        padding .5rem
        float right
    .dianzhanPic
        width 4rem
    .dianzhanPic1
        width 2.5rem
        height 2.8rem
    .comment
        padding .5rem
    .username
        color blue
    .commentList
        padding-bottom  1rem



</style>
