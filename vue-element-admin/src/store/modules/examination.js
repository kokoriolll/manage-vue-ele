import { CreateExam,ClassType,Subject,AllExam } from '@/api/examination.js'

const state = {
    ClassTypeData:[],
    SubjectData:[],
    AllExamData:[]
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
  },
  getAllExam(state,payload){
    console.log(payload,'pay...')
    state.AllExamData = payload
  }
}

const actions = {
  //获取课程类型
  async ClassType({commit},payload){
    let result = await ClassType()
    commit('getClassType',result.data)
  },
  //获取课程
  async Subject({commit},payload){
    let result = await Subject()
    commit('getSubject',result.data)
  },
  //创建试卷
  async CreateExam({commit},payload){
    let result = await CreateExam(payload)
    return result
  },
  //获取所有试卷列表
  async AllExam({commit},payload){
    let result = await AllExam()
    commit('getAllExam',result.exam)    
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
