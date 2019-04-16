import {additem} from '@/api/exam.js'
const state={
}
const mutations={
}
const actions={
    async additems({commit},payload){
    //   let result=await additem(payload);
      console.log(payload,'asdas')
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}
