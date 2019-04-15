import {
  userData,
  identity,
  apiAuthority,
  identityApiAuthorityRelation,
  viewAuthority,
  identityViewAuthorityRelation
} from '@/api/userManagement';

const state = {

}

const mutations = {
  userDatas(state, payload) {

  },
  identitys(state, payload) {

  },
  apiAuthoritys(state, payload) {

  },
  identityApiAuthorityRelationss(state, payload) {

  },
  viewAuthoritys(state, payload) {

  },
  identityViewAuthorityRelations(state, payload) {

  }
}

const actions = {
  // 展示用户数据
  async setUserData({
    commit
  }, payload) {
    console.log(payload);
    let result = await userData(payload);
    console.log(result)
    commit('userDatas', result)
  },
  //展示身份数据
  async setidentity({
    commit
  }, payload) {
    console.log(payload);
    let result = await identity(payload);
    console.log(result)
    commit('identitys', result)
  },
  //展示api接口权限数据
  async setApiAuthority({
    commit
  }, payload) {
    console.log(payload);
    let result = await apiAuthority(payload);
    console.log(result)
    commit('apiAuthoritys', result)
  },
  // 展示身份和api权限关系
  async setIdentityApiAuthorityRelation({
    commit
  }, payload) {
    console.log(payload);
    let result = await identityApiAuthorityRelation(payload);
    console.log(result)
    commit('identityApiAuthorityRelations', result)
  },
  // 获取视图权限数据
  async setViewAuthority({
    commit
  }, payload) {
    console.log(payload);
    let result = await viewAuthority(payload);
    console.log(result)
    commit('viewAuthoritys', result)
  },
  //展示身份和视图权限关系
  async setidentityViewAuthorityRelation({
    commit
  }, payload) {
    console.log(payload);
    let result = await identityViewAuthorityRelation(payload);
    console.log(result)
    commit('identityViewAuthorityRelations', result)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
