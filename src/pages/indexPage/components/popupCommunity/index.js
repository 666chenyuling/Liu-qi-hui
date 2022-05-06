import React, { useState,useRef } from 'react'
import {NavBar, Button,Toast,Space,TextArea,Avatar } from 'antd-mobile'
import {  MoreOutline,SmileOutline,AddCircleOutline  } from 'antd-mobile-icons'
import short from 'short-uuid';

import './index.css'

const rightsrc =
'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
const leftsrc='https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
function PopupCommunity(props) {
    const [visible, setVisible] = useState(false)
    const [textValue, setTextValue] = useState('')
    const textareadom=useRef(null)
    const popuphtml=useRef(null)
    const [usemessage,setUsemessage]=useState([
      {key:1,direction:'left',textcontent:'hello哪哈hhahhhhhhhhhhhhhh',textsrc:leftsrc},
      {key:2,direction:'right',textcontent:'hello哪哈hhahhhhhhhhhhhhhh',textsrc:rightsrc }
    ])
    const back = () =>{
        props.setVisible(false)
    
   }

    const moretab=()=>{
        Toast.show({
            content: '点击了更多区域',
            duration: 1000,
          })
    }
    const right = (
        <div style={{ fontSize: 24 }}>
          <Space style={{ '--gap': '16px' }}>
            
            <MoreOutline onClick={moretab} />
          </Space>
        </div>
      )
   
    const senttextarea =()=>{
      let key=short.generate()
      textareadom.current.clear()
      // console.log(textareadom);
     
      setUsemessage([...usemessage,{key:key,direction:'right',textcontent:textValue,textsrc:rightsrc}])
      
    } 
    const rendertextarea=(usemessage)=>{
     return (usemessage || []).map(item=>(
      item.direction==='left'?
      <div className='popupCommunityContentLeft popupmsg' key={item.key}>
          <Avatar src={item.textsrc} style={{ '--size': '40px' }} />
            <section><span>{item.textcontent}</span>
             </section>
             {/* <img src={rightsrc} style={{width:'40px'}} alt=''></img> */}
             
          </div>:<div className='popupCommunityContentRight popupmsg' key={item.key}>
          
            <section><span>{item.textcontent}</span>
             </section>
             <Avatar src={item.textsrc} style={{ '--size': '40px' }} />
             {/* <img src={rightsrc} style={{width:'40px'}} alt=''></img> */}
             
          </div>
     ))
    }

    return (
        <div className='popupCommunityWrapper'>
         <div className='popupCommunityHead'>   
         <NavBar right={right} onBack={back} style={{backgroundColor:'rgb(243, 243, 243)'}} className='popupCommunityNavBar'>
          {}
        </NavBar>
        </div>
        <div className='popupCommunityContent' ref={popuphtml}>
         {rendertextarea(usemessage)}
        </div>
        <div className='popupCommunityFooter'>
           <div><SmileOutline fontSize={36} /></div>
           <div> <TextArea
           rows={1}
          placeholder='请输入内容'
          value={textValue}
          onChange={val => {
            setTextValue(val)
          }}
          autoSize={{ minRows:1, maxRows: 4 }}
          style={{backgroundColor:'white',lineHeight:'2%','--font-size':'24px'}}
          ref={textareadom}
        /></div>
           <div><AddCircleOutline fontSize={36} /></div>
           <div><Button color='primary' size='middle' onClick={senttextarea} > 发送 </Button></div>
        </div>

        </div>
    )
}

export default PopupCommunity
