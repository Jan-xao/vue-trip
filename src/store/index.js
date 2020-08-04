import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    userPerson: '',
  },
  mutations: {
    initList(state,list){
      state.list = list
    },
    personName(state,name){
      state.userPerson = name
    },
    register(state,userlist){
      state.list.users.push(userlist)
    }
  },
  actions: {
    getList(context) {
      axios.get('/api1/users').then(response => {
        const result = response.data 
        // console.log(result.data,result.data instanceof Array)
        if (result.code===0) { // 如果结果中的数据 code === 0 进行花括号内的操作
          context.commit('initList',result.data)
          // console.log('seller', result.data.name)
        }
      })
    }
  },
  modules: {
  }
});
