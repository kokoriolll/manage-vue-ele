import {additem,getitem,subject,getQuestionsType} from '@/api/exam.js'
const state={
    examType:[],
    subject:[],
    getQuestionsType:[]
}
const mutations={
    getstyle(state,payload){
        state.examType = payload;
    },
    itemsub(state,payload){
        state.subject = payload;
    },
    getQuestionsTypes(state,payload){
        console.log(payload,'payloa')
        state.getQuestionsType = payload;
    }
}
const actions={
    async additems({commit},payload){
      let result=await additem(payload);
    },
    async getitems({commit},payload){
        let result = await getitem();
        commit('getstyle',result.data)
    },
    async subjects({commit},payload){
        let result = await subject();
        commit('itemsub',result.data)
    },
    async getQuestionsType({commit},payload){
        let result = await getQuestionsType();
        commit('getQuestionsTypes',result.data)
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}
