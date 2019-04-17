import {
  userData,
  identity,
  apiAuthority,
  identityApiAuthorityRelation,
  viewAuthority,
  identityViewAuthorityRelation
} from '@/api/userManagement';

const state = {
  userData: [], //获取用户数据
  identitysData: [], //获取身份数据
  apiAuthoritysData: [], //获取api接口权限数据
  viewAuthoritysData: [], //获取视图权限数据
  identityViewAuthorityRelationsData: [], //获取身份和视图权限关系
  identityApiAuthorityRelationsData: [], //获取身份和api权限关系
  existingViewValue: [], //已有视图
  apiJurisdictionIdValue: [], //api接口权限id
  viewJurisdictionIdValue: [], //视图权限id
  identityIdValue: [], //身份id
  userIdValue: [] //用户id
}

const mutations = {
  //获取用户数据
  userDatas(state, payload) {
    state.userData = payload;
    state.userData.forEach(item => {
      //用户id
      state.userIdValue.push(item.user_name)
    })
  },
  //获取身份数据
  identitys(state, payload) {
    state.identitysData = payload;
    state.identitysData.forEach(item => {
      //身份id
      state.identityIdValue.push(item.identity_text)
    })
  },
  //获取api接口权限数据
  apiAuthoritys(state, payload) {
    state.apiAuthoritysData = payload;
    state.apiAuthoritysData.forEach(item => {
      //视图权限id
      state.apiJurisdictionIdValue.push(item.api_authority_text)
    })
  },
  //获取身份和api权限关系
  identityApiAuthorityRelations(state, payload) {
    state.identityApiAuthorityRelationsData = payload;
  },
  //获取视图权限数据
  viewAuthoritys(state, payload) {
    state.viewAuthoritysData = payload;
    state.viewAuthoritysData.forEach(item => {
      //视图权限id
      state.viewJurisdictionIdValue.push(item.view_authority_text)
    })
  },
  //获取身份和视图权限关系view_authority_text
  identityViewAuthorityRelations(state, payload) {
    state.identityViewAuthorityRelationsData = payload;
    state.identityViewAuthorityRelationsData.forEach(item => {
      //已有视图
      state.existingViewValue.push({authority:item.view_authority_text,view_id:item.view_id})
    })
    state.existingViewValue=[...new Set(state.existingViewValue)]
  }
}

const actions = {
  // 展示用户数据
  async setUserData({
    commit
  }, payload) {
    console.log(6, payload);
    let result = await userData(payload);
    commit('userDatas', result.data)
  },
  //展示身份数据
  async setidentity({
    commit
  }, payload) {
    console.log(7, payload);
    let result = await identity(payload);
    commit('identitys', result.data)
  },
  //展示api接口权限数据
  async setApiAuthority({
    commit
  }, payload) {
    console.log(9, payload);
    let result = await apiAuthority(payload);
    commit('apiAuthoritys', result.data)
  },
  // 展示身份和api权限关系
  async setIdentityApiAuthorityRelation({
    commit
  }, payload) {
    console.log(11, payload);
    let result = await identityApiAuthorityRelation(payload);
    commit('identityApiAuthorityRelations', result.data)
  },
  // 获取视图权限数据
  async setViewAuthority({
    commit
  }, payload) {
    console.log(13, payload);
    let result = await viewAuthority(payload);
    commit('viewAuthoritys', result.data)
  },
  //展示身份和视图权限关系
  async setidentityViewAuthorityRelation({
    commit
  }, payload) {
    console.log(15, payload);
    let result = await identityViewAuthorityRelation(payload);
    commit('identityViewAuthorityRelations', result.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
