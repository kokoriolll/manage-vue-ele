import request from '@/utils/request'

//添加用户
export function addUsers(data) {
  return request({
    url: 'http://169.254.12.55:7001/user',
    method: 'post',
    data
  })
}

//更新用户信息（用户名，用户密码，用户身份）
export function updataUserInfo(token) {
  return request({
    url: '/user/user',
    method: 'put',
    params: {
      token
    }
  })
}

//添加身份
export function addIdentity(data) {
  return request({
    url: '/user/identity/edit',
    method: 'get',
    data
  })
}

//添加api接口权限
export function addAuthorityApi(data) {
  return request({
    url: '/user/authorityApi/edit',
    method: 'get',
    data
  })
}

//添加视图权限
export function addAuthorityView(data) {
  return request({
    url: '/user/authorityView/edit',
    method: 'get',
    data
  })
}

//给身份设定api接口权限
export function identityApi(data) {
  return request({
    url: '/user/setIdentityApi',
    method: 'post',
    data
  })
}

//给身份设定视图权限
export function identityView(data) {
  return request({
    url: '/user/setIdentityView',
    method: 'post',
    data
  })
}

//展示用户数据
export function userData() {
  return request({
    url: 'http://169.254.12.55:7001/user/user',
    method: 'get'
  })
}

//展示身份数据
export function identity() {
  return request({
    url: 'http://169.254.12.55:7001/user/identity',
    method: 'get'
  })
}

//展示api接口权限数据
export function apiAuthority() {
  return request({
    url: 'http://169.254.12.55:7001/user/api_authority',
    method: 'get'

  })
}

//展示身份和api权限关系

export function identityApiAuthorityRelation() {
  return request({
    url: '/user/identity_api_authority_relation',
    method: 'get'

  })
}

//获取视图权限数据
export function viewAuthority() {
  return request({
    url: '/user/view_authority',
    method: 'get'

  })
}

//展示身份和视图权限关系
export function identityViewAuthorityRelation() {
  return request({
    url: '/user/identity_view_authority_relation',
    method: 'get'

  })
}
