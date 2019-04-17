import {addClass,upDateClass} from '@/api/class/classManage.js'

const state = {
    classData:[]
}

const getters = {

}

const mutations={
   updateState(state,payload){
    for(let key in payload){
        state[key] = payload[key];
    }
    console.log(state.classData)
   } 
}

const actions = {
    async curUpDateClass({commit},payload){ 
      let res = await upDateClass(payload)
      if(res.code == 1){
        commit('updateState',{classData:res.data})
      }
    },
    async addClass({commit},payload){
        let res = await addClass(payload)
        //console.log(res,'paododo..')
    }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
