<template>
    <div class="mine">
        <ul>
            <router-link tag="li" to="/history">我的历史</router-link>
            <router-link tag="li" to="/login">登录</router-link>
            <router-link tag="li" to="/resign">注册</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mine"
    }
</script>

<style lang="stylus" scoped>
    .mine
        width 100%
        height 100%
    ul
        margin 0
        padding 0
    li
        list-style none
        line-height 5rem
        padding-left 2rem
        border-bottom 1px silver solid
        &:hover
            background-color #8c939d
    a
        border  1px slateblue solid

</style>
