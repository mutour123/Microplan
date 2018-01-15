<template>
    <div class="login">
        <div class="inputCon">
             <input v-model="username" class="username" type="text" placeholder="请输入用户名">
             <input v-model="password" class="password" type="password" placeholder="请输入密码">
        </div>
        <button @click="login" class="loginBtn">登录</button>
        <router-link to="/resign" class="noNober">没有账号？</router-link>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                username: "念念公子",
                password: "123456",

            }
        },
        methods: {
            login(){
                let _this=this
                if(!(this.username&&this.password))
                    return false
                this.$http.post('/api/login',{
                    username: this.username,
                    password: this.password
                }).then(function(res){
                    if(res.data.state === 1){
                        store.set('username',_this.username)
                        _this.$router.push('/day')
                    }
                }).catch(function(err){
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
