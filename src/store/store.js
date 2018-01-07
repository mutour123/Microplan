/*
* vuex提供两个非常靠谱的方法
* mapActions  管理事件
* mapGetters  获取数据
*
* */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
    count:20,
}

const mutations={
    incremt(state){//处理数据（状态）的变化
        state.count++;
    },
    decremtno(state){
        state.count--;
    },
    clickodd(state){
        state.count++
    }
}

const actions={
    incremtno:({//处理你要干什么，异步请求，判断，流程控制
                   commit
               })=>{
        commit('incremt')
    },
    decremtno:({
                   commit
               })=>{
        commit('decremtno');
    },
    clickodd:({
                  commit,
                  state
              })=>{
        if(state.count%2==0)
            commit('clickodd')
    },
    clickAsync:({commit})=>{
        new Promise((reslove)=>{
            setTimeout(function () {
                commit('incremt');
                reslove();
            },1000);
        });
    }


}

const getters={
    count(state){
        return state.count;
    }
}


//需要导出store对象
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
