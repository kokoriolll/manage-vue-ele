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
  code: '',
  msg: ''
}

const actions = {
  //添加用户
  async setAddUsers({
    state
  }, payload) {
    let result = await addUsers(payload);
    Tips(result, state)
    return result;
  },
  //更新用户信息（用户名，用户密码，用户身份）
  async setUpdataUserInfo({
    state
  }, payload) {
    let result = await updataUserInfo(payload);
    Tips(result, state)
    return result;
  },
  //添加身份
  async setAddIdentity({
    state
  }, payload) {
    let result = await addIdentity(payload);
    Tips(result, state)
    return result;
  },
  //添加api接口权限
  async setAddAuthorityApi({
    state
  }, payload) {
    let result = await addAuthorityApi(payload);
    Tips(result, state)
    return result;
  },
  //添加视图权限
  async setAddAuthorityView({
    state
  }, payload) {
    let result = await addAuthorityView(payload);
    Tips(result, state)
    return result;
  },
  //给身份设定api接口权限
  async setIdentityApi({
    state
  }, payload) {
    let result = await identityApi(payload);
    Tips(result, state)
    return result;
  },
  //给身份设定视图权限
  async setIdentityView({
    state
  }, payload) {
    let result = await identityView(payload);
    Tips(result, state)
    return result;
  },
}

//提示
function Tips(result, state) {
  if (result) {
    state.code = result.code;
    state.msg = result.msg;
  } else {
    state.code = 0
    state.msg = "失败了"
  }
  return state
}

export default {
  namespaced: true,
  state,
  actions
}
