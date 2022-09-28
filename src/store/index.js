import { createStore } from "vuex";

export default createStore({
  state: {
    mess:"hehe",
    arrs:[{
      text:"zs"
    },{
      text:"ls"
    },{
      text:"wangw"
    }]
  },
  getters: {},
  mutations: {
    increment(state){
      state.arrs.unshift({text:state.mess})
    },
    delete_mutation(state,payload){
      state.arrs.splice(payload,1)
    }
  },
  actions: {},
  modules: {},
});
