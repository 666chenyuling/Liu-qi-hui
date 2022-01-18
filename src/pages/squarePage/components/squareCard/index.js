import React from 'react'
import { useState, useEffect } from 'react'
import { Avatar, Image,Card } from 'antd-mobile'
import { MoreOutline  } from 'antd-mobile-icons'
import {imgReady} from '@/utils/imgload'
import './index.css'
const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]

export default function SquareCard(props) {
  const [showImg,setShowImg]=useState('none')
  const [support,setSupport]=useState(false)
  
  return (

    <div className="SquareCardClass">
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
           {/* 功能（收藏，不感兴趣，举报，取消） */}
           <div className='peopleFunction'><MoreOutline  fontSize={24}/></div>
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
         <div className='squareFooter'>
           <div className='squareFooterChildOne'>
             <span  className="iconfont icon-dianzan" onClick={()=>{support===true?setSupport(false):setSupport(true)}} style={support===true?{color:'red'}:{}}/>{'点赞'}</div>
           <div className='squareFooterChildTow'>
           <span  className="iconfont icon-pinglun"
           onClick={()=>{props.setFunction.setVisibleComment(true)}}/>{'评论'}
           </div>
           <div className='squareFooterChildThree'>
           <span  className="iconfont icon-fenxiang" onClick={()=>{props.setFunction.setVisiblePo(true)}}/>{'分享'}
           </div>
         </div>


      </div>
    </Card>
    </div>
  )
}
