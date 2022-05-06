import {SET_ADDRESS,DESTORY_ADDRESS,SET_SESSION,DESTROY_SESSION,SET_USERMESSAGE} from './types'
import {Login} from '@/api/login'

export const useAction=(state,dispatch)=>{
    return {
        getAddress:async()=>{
            var BMap = window.BMap;
            var geoc = new BMap.Geocoder();
            var geolocation = new BMap.Geolocation();
            
           const addressState=await new Promise((resolve,reject)=>{
                geolocation.getCurrentPosition(function (r) {
                    geoc.getLocation(r.point, function (rs) {
                       // console.log(rs)   //具体信息可以打印出来看一下，根据需求取值     经纬度，城市，街道等等
                       let address=rs.addressComponents
                       let cityAddress=address.province+address.city+address.district
                       let city=address.city
                      resolve({cityAddress,city})
                    });
                });
            })
             
            dispatch({type:SET_ADDRESS,payload:addressState}) 
            return addressState
        },
        
        login: async (tel, password,telarea) => {
            // console.log(`login with ${tel} & ${password}`);
            let userInfo=null
            let message=null
            const session = await new Promise(resolve => {
              //调用密码登录接口
              let res= Login({tel:tel, password: password,telarea:telarea})
              res.then((res)=>{
                console.log('res',res);
                userInfo=res.userInfo
                message=res.message
              resolve({
                token: res.token,
                expireTime: new Date("2030-09-09"),
              })
              })    
            });
            
            // dispatch SET_TOKEN
            dispatch({
              type: SET_SESSION,
              payload: session
            });
            //改变用户信息状态
            dispatch({
              type:SET_USERMESSAGE,
              payload:{tel:tel, password: password,...userInfo}
            })
            return message;
          },
          logout: () => {
            dispatch({
              type: DESTROY_SESSION
            });
          }
    }
}