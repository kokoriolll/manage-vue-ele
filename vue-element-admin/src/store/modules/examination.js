import { CreateExam,ClassType,Subject } from '@/api/examination.js'

const state = {
    ClassTypeData:[],
    SubjectData:[]
}

const mutations = {
  getCreateExam(state,payload){
    console.log(payload,'pay')
  },
  getClassType(state,payload){
    state.ClassTypeData = payload
  },
  getSubject(state,payload){
    state.SubjectData = payload
  }
}

const actions = {
  async ClassType({commit},payload){
    let result = await ClassType()
    commit('getClassType',result.data)
  },
  async Subject({commit},payload){
    let result = await Subject()
    commit('getSubject',result.data)
  },
  async CreateExam({commit},payload){
    let result = await CreateExam(payload)
    console.log(payload)
    return result
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
