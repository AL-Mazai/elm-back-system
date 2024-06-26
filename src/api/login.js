import request from '@/utils/request'

// 登录接口
export const Login = data => {
  return request({
    url: '/api/back_system/login',
    method: 'post',
    data,
  })
}

// 获取登录用户信息
export const GetUserinfo = () => {
  return request({
    url: '/api/back_system/6',
    method: 'get',
  })
}
