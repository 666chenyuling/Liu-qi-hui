import React, { useContext, useState } from "react";
import { Divider,Input,Picker, Space ,Form,Button,Radio, Popup} from 'antd-mobile'
import { StoreContext } from "@/store/StoreContext";
import { DownOutline } from 'antd-mobile-icons'
import Register from "./components/register";
import './index.css'
// import { DESTROY_SESSION } from "@/store/types";
// import logo from '@/assets/imgs/login/touxiang.png';
import weixin from '@/assets/imgs/login/weixin.png'
import qq from '@/assets/imgs/login/QQ.png'
import weibo from '@/assets/imgs/login/weibo.png'
const columns = [['86', '01', '02', '03']]
const MobileValue= {telarea:'86',tel:''}
   
function MobileField({value}=MobileValue) {
    const [visible, setVisible] = useState(false)
    const triggerValue=(changedValue)=>{
        value.telarea=changedValue.telarea
    }
    const onRealValueChange=(values)=>{
      MobileValue.tel=values
      value.tel=values
    }
    const onPreValueChange=(value)=>{
        const v = value[0]
        if (v === null) return
        triggerValue({ telarea: v })
    }
    return (
        <>
           <Space align='center'>
        <Space align='center' onClick={() => setVisible(true)}>
          <div>+{value.telarea}</div>
          <DownOutline />
        </Space>
        <Input
          placeholder='请输入手机号'
          onChange={onRealValueChange}
        />
      </Space>
      <Picker
        columns={columns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={[value.telarea]}
        onConfirm={onPreValueChange}
      />  
        </>
    )
}


function Login(props) {
    const { state, dispatch, actions } = useContext(StoreContext);
    const [passwordVisible,setPasswordVisible]=useState(true)
    const [verifyVisible,setVerifyVisible]=useState(false)
    const [popupVisible,setPopupVisible]=useState(false)
    const { user, expireTime } = state.session;
    const changeTabOne=()=>{
        setPasswordVisible(true)
        setVerifyVisible(false)
    }
    const changeTabTow=()=>{
        setPasswordVisible(false)
        setVerifyVisible(true)
    }
   //校验成功的回调
const onFinish =async (values) => {
    // console.log(1111,values)
    let result=await actions.login(values.mobile.tel,values.password,values.mobile.telarea);
    if(result==='登录成功'){
     props.history.push('/')
    }
    console.log('message',result);
  }
//校验失败的回调
const onFinishFailed=({ values, errorFields, outOfDate })=>{
   
}
const onFinishV=()=>{

}
const onFinishVfailed=()=>{

}
//新用户注册
const newRegister=()=>{
 setPopupVisible(true)
}
//忘记密码
const forgetPassword=()=>{
 
}
 //用户名校验
 const checkMobile=()=>{
    
    if (MobileValue.tel) {
        return Promise.resolve()
      }
      return Promise.reject(new Error('手机号不能为空!'))
}
    
    return (
    <div className='loginwrapper'>
     <div className='loginwrapperMargin'>
    <div className='logoWrapper'>

    </div>
    <div className='changeTab'>
    <div className='changeTabOne' onClick={changeTabOne} style={passwordVisible?{fontSize:'20px',backgroundColor:' rgba(0, 234, 255, 0.562)',color:'white'}:{fontSize:'16px'}}>密码登录</div> 
     <div className='changeTabTow' onClick={changeTabTow} style={verifyVisible?{fontSize:'20px',backgroundColor:' rgba(0, 234, 255, 0.562)',color:'white'}:{fontSize:'16px'}}>验证码登入</div>     
    </div> 
    {/* 密码登录 */} 
    <Form layout='vertical'
style={passwordVisible?{display:''}:{display:'none'}}
mode='card'
onFinish={onFinish}
onFinishFailed={onFinishFailed}
initialValues={{
mobile: {telarea:'86',tel:'' },
}}
footer={
 <Button block type='submit'  color='primary' size='large' style={{backgroundColor:' rgba(0, 234, 255, 0.902)' }}>
   提交
 </Button>
} >

<Form.Item
 name='mobile'
 rules={[{ required: true },{ validator: checkMobile }]}
>
 <MobileField/>
</Form.Item>
<Form.Item  name='password'
rules={[{ required: true, message: '密码不能为空' }]}>
   <Input placeholder='请输入密码' clearable type='password' />
</Form.Item>
<Form.Item name='ifo'
rules={[{ required: true, message: '请您先勾选' }]}
>
<Radio value='apple' onChange={(val)=>{
 
}}

style={{
   '--icon-size': '18px',
   '--font-size': '14px',
   '--gap': '6px',
 }}>
     我已阅读并同意<a href="" style={{color:'red'}}>《用户服务协议》</a>和<a href="" style={{color:'red'}}>《隐私协议》</a>
 </Radio>
</Form.Item>
</Form>   
    {/* <Password passwordVisible={passwordVisible}/>  */}

    {/* 验证码登录 */}
    <Form layout='vertical'
     style={verifyVisible?{display:''}:{display:'none'}}
      mode='card'
      onFinish={onFinishV}
      onFinishFailed={onFinishVfailed}
      initialValues={{
        mobile: {telarea:'86',tel:'' },
      }}
      footer={
          <Button block type='submit'  color='primary' size='large' style={{backgroundColor:' rgba(0, 234, 255, 0.902)' }}>
            提交
          </Button>
        } >
       
       <Form.Item
          name='mobile'
          rules={[{ required: true },{ validator: checkMobile }]}
        >
          <MobileField/>
        </Form.Item>
        <Form.Item name='verify' extra={<Button size='small' onClick={()=>{

        }}>验证码</Button>}>
          <Input placeholder='短信验证码' />
        </Form.Item>
        <Form.Item name='ifo'
         rules={[{ required: true, message: '请您先勾选' }]}
        >
         <Radio value='apple' onChange={(val)=>{
          
         }}
        
         style={{
            '--icon-size': '18px',
            '--font-size': '14px',
            '--gap': '6px',
          }}>
              我已阅读并同意<a href="" style={{color:'red'}}>《用户服务协议》</a>和<a href="" style={{color:'red'}}>《隐私协议》</a>
          </Radio>
        </Form.Item>
     </Form>
        
    {/* <Verifylogin verifyVisible={verifyVisible}/> */}
    
     <div className='loginLinkWrapper'>
         <div className='loginLinkForget' onClick={forgetPassword}>忘记密码？</div>
         |
         <div className='loginLinkregister' onClick={newRegister}>新用户注册</div>
     </div>
     <Divider>第三方登录</Divider>
     <div className='threeImgWrapper'>
         <div className='threeImg'><img src={qq}></img></div>
         <div className='threeImg'><img src={weixin}></img></div>
         <div className='threeImg'><img src={weibo}></img></div>
     </div>
     </div>
     <Popup
              visible={popupVisible}
              onMaskClick={() => {
                setPopupVisible(false)
              }}
              position='right'
              bodyStyle={{ width: '100vw' }}
            >
            <Register setPopupVisible={setPopupVisible}/>
     </Popup>
    </div>
      )
    }
    


export default Login
