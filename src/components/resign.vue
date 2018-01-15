<template>
    <div class="resign">
        <div class="inputCon">
            <input v-model="username" class="username" type="text" placeholder="请输入用户名">
            <input v-model="password" class="password" type="password" placeholder="请输入密码">
            <input v-model="surePassword" class="password" type="password" placeholder="请确认密码">
            <!--<input class="password" type="password" placeholder="请输入验证码">-->
        </div>
        <button @click="resign"  class="loginBtn">登录</button>
        <router-link to="/resign" class="noNober">已有账号？</router-link>
    </div>
</template>

<script>
    export default {
        name: "resign",
        data(){
            return {
                username: "念念公子",
                password: "123456",
                surePassword: "123456"
            }
        },
        methods:{
            resign(){
                if(!(this.username&&this.password&&this.surePassword&&this.password === this.surePassword))
                    return false
                this.$http.post('/api/adduser',{
                    username: this.username,
                    password: this.password
                })
                    .then(function(res){
                        console.log(res.data)
                    })
                    .catch(function(err){
                        console.log(err)
                    })

            }
        }
    }
</script>

<style lang="stylus" scoped>
    *
        outline none
    .login
        width 100%
        height 100%
    /*border 1px solid red*/
    .username,.password,.loginBtn
        width 100%
        height 4.5rem
        border 1px silver solid
        margin-bottom .2rem
        border-radius 5px
    .noNober
        color #3a8ee6
    .inputCon
        padding-top 3rem
</style>

