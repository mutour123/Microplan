<template>
    <div class="share">
        <div class="aPage" v-for="nowdata in shareList">
            <div class="header">
                <div class="pic-con">
                    <img class="pic" src="../../static/img/logo.png" alt="">
                </div>
                <div class="title">
                    <div class="name">{{nowdata.shareUser}}</div>
                    <div class="time">{{new Date(nowdata.shareList.time).getFullYear() + "年" +(new Date(nowdata.shareList.time).getMonth()+1)+"月"+new Date(nowdata.shareList.time).getDate()+"日"}}</div>
                </div>
            </div>
            <div class="content">
                <ul>
                    <li class="task-con">
                        <ul>
                            <li class="task" v-for="(task,index) in nowdata.shareList.list">
                                {{(index+1)+"，" + task.content}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="dianzhan">
                <ul class="dianzancon">
                    <li @click="addyes" class="dianzhanList"><img class="dianzhanPic" src="../../static/img/timg.jpg" alt=""></li>
                    <li @click="addComment" class="dianzhanList"><img class="dianzhanPic1" src="../../static/img/pinglun.png" alt=""></li>
                </ul>
                <div :class="{commentInputconShow : comment0InputconIsShow}" class="commentInputcon">
                    <input v-model="comment0Input" class="commentInput" type="text" placeholder="评论">
                    <div @click="addCommentInput(nowdata.index,nowdata.shareUser)" class="commentBtn">提交</div>
                </div>
                <div :class="{commentInputconShow : comment1InputconIsShow}" class="commentInputcon">
                    <input v-model="comment1Input" class="commentInput" type="text" placeholder="评论">
                    <div @click="addComment1Input(nowdata.index)" class="commentBtn">提交</div>
                </div>
            </div>
            <div class="comment">
                <ul>
                    <li @click="addHuifu($event)" class="commentList" v-for="item in nowdata.comment">
                        <span class="username targ">{{item.commentPeo}}</span>
                        <span v-if="item.grade">回复</span>
                        <span class="username" v-if="item.grade">{{item.toPeo}}</span>:
                        <span >{{item.comment}}</span>
                    </li>
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
                shareList:[],
                comment0InputconIsShow:false,
                comment1InputconIsShow:false,
                comment0Input:"好好学习，天天向上",
                comment1Input:"你也要好好学习，天天向上",
                grade: 0,
                targetP:"",
                targetParent:""
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
            },
            addyes: function () {
                console.log("你点了一个赞")
            },
            addComment: function(){
                this.comment0InputconIsShow = !this.comment0InputconIsShow
            },
            addCommentInput(index,username){
                let  _this = this
                _this.comment0InputconIsShow = !_this.comment0InputconIsShow
                if (!this.comment0Input)
                    return
                let commentPeo = store.get("username")
                let json = {
                    "commentPeo": commentPeo,
                    "toPeo": username,
                    "comment": _this.comment0Input,
                    "grade" : 0,
                    "index": index
                }
                this.$http.post('/api/addcomment',json)
                    .then(function(res){
                        if (res.data.ok == 1) _this.getShareList()
                    })
                    .catch(function(err){
                        console.log(err)
                    })
            },
            addComment1Input(index){
                this.comment1InputconIsShow = !this.comment1InputconIsShow
                let  _this = this
                if (!this.comment1Input)
                    return
                let commentPeo = store.get("username")
                let json = {
                    "commentPeo": commentPeo,
                    "toPeo": _this.targetP,
                    "comment": _this.comment1Input,
                    "grade" : 1,
                    "index": index
                }

                this.$http.post('/api/addcomment',json)
                    .then(function(res){
                        if(res.data.ok == 1){
                            _this.getShareList()
                        }

                    })
                    .catch(function(err){
                        console.log(err)
                    })

            },
            addHuifu(event){
                this.comment1InputconIsShow = !this.comment1InputconIsShow
                let e = event
                let target = e.currentTarget
                this.targetParent = $(target).parent()
                let targP = $(target).children(".targ")
                this.targetP = targP.text()
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
    .dianzancon
        overflow hidden
    .commentInput
        outline none
        width 85.5%
        height 3rem
        border 0px
        background-color rgba(255,255,255,0)
    .commentBtn
        text-align center
        display inline-block
        line-height 3rem
        box-sizing border-box
        width 13%
        border-left 1px silver solid
    .commentInputcon
        display none
        width 100%
        border 1px silver solid
    .commentInputconShow
        display block
</style>
