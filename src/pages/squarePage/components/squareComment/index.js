import React from 'react'
import { useState,useEffect ,useContext} from 'react'
import {Card,Avatar,Image,NavBar,List,Popup}from 'antd-mobile'
import { MoreOutline  } from 'antd-mobile-icons'
import {imgReady} from '@/utils/imgload'
import {VisibleContext, VisibleDescriptionContext} from '../squareMessage/store'
import '../squareCard/index.css'
import './index.css'

const userComments={
name:'古怪的兴义',

}
const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]
function Description(props){
const setVisibleDescriptionRes=useContext(VisibleDescriptionContext) 
 return (
   <>
    <div className='descriptionClass'>
       <div className='descriptionReply'>
       <input type="checkbox" name="" id="descriptionCheck"/>
             <div className="descriptionText">
          
            零零落落零零落落零零落落零零落落零零落落零零落落零零落落来了额sad <br/>sad萨达撒打算打算打大叔大叔大叔的撒打算大的坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷111可口可乐坎坎坷坷快乐快乐快乐sodas
            <img src="" alt="" className="iconfont "/> 
           </div>
          <div className="open">
          <label htmlFor="descriptionCheck" className="btn"></label>
          </div>  
       </div>
       <div className='requestText'></div>
    </div>
    <div className='descriptionRes'>
      <div className='descriptionResText'>
        <span style={{fontSize:14}}>华为员工</span>:{ `零零落落零零落落零零落落零零落落零零落落零零落落零零落落来了额sad sad萨达撒打算打算零零落落零零落落零零落落零零落落零零落落零零落落零零落落来了`}
      </div>
      
       <button className='buttonClass' onClick={()=>{setVisibleDescriptionRes(true)}}>{`查看全部6条回复`}</button>  
      
    </div>
    <div className='descriptionIcons'>
      <div className='descriptionTime'><span>{'01-15'}</span></div>
      <div className='descriptionIcon'>
        <span className="iconfont icon-pinglun " onClick={()=>{}}></span>
        <span  className="iconfont icon-dianzan" onClick={()=>{}}></span>
      </div>
    </div>
   </>
 )
}
export default function SquareComment(props) {
  const setVisibleComment= useContext(VisibleContext);
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
      <NavBar right={right} onBack={()=>{setVisibleComment(false)}}>
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
           <div className='peopleFunctionComment'><span className="followClass" onClick={()=>{setFollow('已关注')}} style={follow==='已关注'?{backgroundColor:'rgb(243, 243, 243)',color:'rgb(180, 180, 180)', border: 'transparent'}:{}}>{follow}</span></div>
         </div>
         <div className='squareText'>
           <div className='commentPostsText'>
           <input type="checkbox" name="" id="commentCheck"/>
             <div className="commentText">
          
            零零落落零零落落零零落落零零落落零零落落零零落落零零落落来了额sad <br/>sad萨达撒打算打算打大叔大叔大叔的撒打算大的坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷111可口可乐坎坎坷坷快乐快乐快乐sodas
            <img src="" alt="" className="iconfont "/> 
           </div>
          <div className="open">
          <label htmlFor="commentCheck" className="btn"></label>
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
      <div className='detailedCommentClass '>
        <div className="allComment">
          <div>{`全部评论`}</div>
          <div>{`点赞30`}</div>
        </div>
        <div className="comments">
          <List>
            <List.Item 
            key={userComments.name}
            prefix={
              <Image
                src={demoAvatarImages[0]}
                style={{ borderRadius: 13 }}
                fit='cover'
                width={26}
                height={26}
              />
            }
            description={<Description />}
            >
            {userComments.name}
            </List.Item>
          </List>
        </div>
      </div>
    
     
    </div>
    
  )
}
