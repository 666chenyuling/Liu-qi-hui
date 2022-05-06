import React ,{useState}from 'react'
import { NavBar, Form ,Input,Button,Radio,Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import {register,regnicknamecheck} from '@/api/login'
import './index.css'
function Register(props) {
    const [form] = Form.useForm()
    const [usernickname,setUsernickname]=useState('')
    const back = () =>{
    props.setPopupVisible(false)
    
    }
   const onFinish=(value)=>{
     new Promise((resolve,reject)=>{
       if(usernickname){
        reject(usernickname)
       }else{
        if(value.possword===value.definepossword){
          resolve(value)
       }else{
          reject('密码确认错误')
       }
       }
      
     }).then((value)=>{
       
        register(value).then(()=>{
          
          Toast.show({
            content:'注册成功',
            icon: 'success',
           })
        props.setPopupVisible(false)

        },(error)=>{
          Toast.show({
            content:error.response.data.message,
            icon: 'fail',
           })
        })
     },(error)=>{
        Toast.show({
         content:error,
         icon: 'fail',
        })
     }).then((value)=>{
      
        // console.log('proValue',value);
     },()=>{

     })
    console.log('注册数据',value);
   }
   const onFinishFailed=({ values, errorFields, outOfDate })=>{
    console.log('失败数据',values);
    console.log('errorFields',errorFields);
    console.log(' outOfDate', outOfDate);
   }
  const nicknamecheck=(value)=>{
    regnicknamecheck(value.target.value).then((value)=>{
      setUsernickname('')
    //  console.log(value);

    },(error)=>{
      console.log(error.response.data.message)
      setUsernickname(error.response.data.message)
     
    })
 
  }
 
    return (
        <div className='popupwrapper'>
            <NavBar back='返回'  onBack={back} >新用户注册</NavBar> 
            <Form layout='horizontal' mode='card' onFinish={onFinish}
            onFinishFailed={onFinishFailed}
             footer={
                <Button block type='submit'shape='rounded' color='primary' size='middle'style={{backgroundColor:' rgba(0, 235, 255, 0.99)' }}>
                  注册
                </Button>
              }
              form={form}
            >
            <Form.Header>注册信息</Form.Header>
            <Form.Item label='网名' name='nickname' rules={[{required: true,message: '用户名不能为空' }]}
           
            >
             <Input placeholder='请输入网名' onBlur={nicknamecheck}  />
            </Form.Item>
             <Form.Item label='邮箱号' name='email' rules={[{required: true ,message: '邮箱号不能为空' }]}>
             <Input placeholder='请输入邮箱号' />
            </Form.Item>
            <Form.Item label='手机号' name='tel' rules={[{required: true ,message: '手机号不能为空' }]}>
             <Input placeholder='请输入手机号' />
            </Form.Item>
            <Form.Item label='用户密码' name='possword' rules={[{required: true ,message: '密码不能为空' }]}>
            <Input placeholder='请输入密码' clearable type='password' />
            </Form.Item>
            <Form.Item label='密码确认' name='definepossword'  rules={[{ required: true , message: '确认密码不能为空' }]} >
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
        </div>
    )
}

export default Register
