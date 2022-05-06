import  service from '@/utils/request'
import qs from 'qs'
//登录接口
export const Login = function (data){
  
    return service.request({
          url:'/loginList/login',
          method:'post',
          dataType:'json',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data
    })
}
//注册接口
export const register=function(data){
  console.log(data);
  return service.request({
    url:'/loginList/register',
    method:'post',
   dataType:JSON,
    headers: {  'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
    // data:data
    data
})
}

//注册网名查重
export const regnicknamecheck=function(value){
  return service.request({
    url:'/loginList/regnicknamerepeat',
    method:'post',
   dataType:JSON,
    headers: {  'content-type': 'application/x-www-form-urlencoded;charset=utf-8'},
    // data:data
    params:{
      nickname:value
    }
  })
}
