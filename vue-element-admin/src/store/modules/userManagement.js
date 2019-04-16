import {
  addUsers,
  updataUserInfo,
  addIdentity,
  addAuthorityApi,
  addAuthorityView,
  identityApi,
  identityView
} from '@/api/userManagement';

const state = {

}

const mutations = {

}

const actions = {
  //添加用户
  async setAddUsers({
    commit
  }, payload) {
    console.log(payload);
    let result = await addUsers(payload);
    return result;
  },
  //更新用户信息（用户名，用户密码，用户身份）
  async setUpdataUserInfo({
    commit
  }, payload) {
    console.log(payload);
    let result = await updataUserInfo(payload);
    return result;
  },
  //添加身份
  async setAddIdentity({
    commit
  }, payload) {
    console.log(payload);
    let result = await addIdentity(payload);
    return result;
  },
  //添加api接口权限
  async setAddAuthorityApi({
    commit
  }, payload) {
    console.log(payload);
    let result = await addAuthorityApi(payload);
    return result;
  },
  //添加视图权限
  async setAddAuthorityView({
    commit
  }, payload) {
    console.log(payload);
    let result = await addAuthorityView(payload);
    return result;
  },
  //给身份设定api接口权限
  async setIdentityApi({
    commit
  }, payload) {
    console.log(payload);
    let result = await identityApi(payload);
    return result;
  },
  //给身份设定视图权限
  async setIdentityView({
    commit
  }, payload) {
    console.log(payload);
    let result = await identityView(payload);
    return result;
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
