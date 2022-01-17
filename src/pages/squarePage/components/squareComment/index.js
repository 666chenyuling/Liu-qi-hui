import React from 'react'
import { useState,useEffect } from 'react'
import {Card,Avatar,Image,NavBar}from 'antd-mobile'
import { MoreOutline  } from 'antd-mobile-icons'
import {imgReady} from '@/utils/imgload'
import '../squareCard/index.css'
import './index.css'
const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]

export default function SquareComment(props) {
  const right=(<div style={{fontSize:24}}>
     <MoreOutline />
  </div>)
  useEffect(() => {
    // console.log('aaaa');
    console.log(props);
  },[])
  const [showImg,setShowImg]=useState('none')
  const [follow,setFollow]=useState('关注')
  return (
    <div className="SquareCommentWrapper">
       <NavBar right={right} onBack={()=>{}}>
          详情
        </NavBar>
      <Card style={{ borderRadius:0}}>
      <div className='SquareCardWrapper'>
         <div className='squareHeard'>
           {/* 头像(挂件) */}
           <div className='peopleHead'><Avatar  src={demoAvatarImages[0]} style={{ '--size': '32px' }}  /></div>
           {/* 网名，发布时间 */}
           <div className='peopleName'>
             <div className='peopleNameChildOne'>{'古怪的兴义'}</div>
             <div className='peopleNameChildTow '>{'4天前'}</div>
           </div>
           {/* 关注按钮 */}
           <div className='peopleFunctionComment'><span className="followClass" onClick={()=>{setFollow('已关注')}} style={follow==='已关注'?{backgroundColor:'rgb(243, 243, 243)',color:'rgb(180, 180, 180)'}:{}}>{follow}</span></div>
         </div>
         <div className='squareText'>
           <div className='postsText'>
           <input type="checkbox" name="" id="check"/>
             <div className="text">
          
            零零落落零零落落零零落落零零落落零零落落零零落落零零落落来了额sad <br/>sad萨达撒打算打算打大叔大叔大叔的撒打算大的坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷111可口可乐坎坎坷坷快乐快乐快乐sodas
            <img src="" alt="" className="iconfont "/> 
           </div>
          <div className="open">
          <label htmlFor="check" className="btn"></label>
        </div>  
           </div>
         </div>
         {/* 
         1，如果帖子有图片展示图片，没有就不展示
         2，预加载图片，根据图片的比值，和数量判断图片展示的大小
         */}
         <div className='squareImg'> 
            <Image style={{display:showImg}}/>
         </div>

      </div>
    </Card>
    </div>
  )
}
