import {SET_ADDRESS,DESTORY_ADDRESS,SET_SESSION,DESTROY_SESSION,SET_USERMESSAGE , INIT_USERMESSAGE } from './types'

export const initialstate={
    addressState:{
        cityAddress:'南昌',
        city:'南昌'
    },
    session: {
        // J.W.T Token
        token: "",
        // 过期时间
        expireTime: null
      },
    usermessage: {
        username:'',
        nickname:'',
        possword:null,
        telarea:'86',
        tel:null,
        headimg:null,
        role:'',
        power:[],
        email:'',
    },

}

const addresReducer=(state=initialstate.addressState,action)=>{
const {type ,payload}=action
// console.log(payload);
switch(type){
    case SET_ADDRESS:
        return{
            ...state,
            ...payload
        }
    case  DESTORY_ADDRESS :
        return{
           ...initialstate.addressState 
        }  
    default:
        return state    
}
}

const LoginReducer = (state = initialstate.session, action) => {
    // console.log({ ...state });
  
    const { type, payload } = action;
    switch (type) {
      case SET_SESSION:
        
        return { 
            ...state,
            ...payload
          
        };
      case DESTROY_SESSION:
        return {
           ...initialstate 
        };
      default:
        return state
    }
  };

  const UserReducer=(state=initialstate.usermessage,action)=>{
    const { type, payload } = action; 
    switch (type) {
        case SET_USERMESSAGE:
          return { 
              ...state,
              ...payload
            
          };
        case INIT_USERMESSAGE:
          return {
             ...initialstate 
          };
        default:
          return state
      }
  }
export default function rootReducer(state,action){
    //旧的state
    const {addressState,session,usermessage}=state
    return {
        addressState:addresReducer(addressState,action),
        session:LoginReducer(session,action),
        usermessage:UserReducer(usermessage,action)
    }
}