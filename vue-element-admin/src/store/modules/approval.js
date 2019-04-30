import {grade,student} from '@/api/approval.js'
const state={
    view_list:[],
    list_view:[]
}
const mutations={
    updata(state,payload){
        for(var i in payload){
            state[i] = payload[i]
        }
    }
}
const actions={
    async grades({commit}){
        let result = await grade();
        commit('updata',{view_list:result})
    },
    async students({commit}){
        let result = await student();
        commit('updata',{list_view:result.exam})
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}
