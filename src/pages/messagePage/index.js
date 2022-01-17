
import {NavBar,Toast, List,Image} from 'antd-mobile'
import React from 'react'
// import {
//   UnorderedListOutline,
// } from 'antd-mobile-icons'
import './index.css'
import kefu from '../../assets/imgs/messageImgs/kefu.png'
import hudongxiaoxi from '../../assets/imgs/messageImgs/hudongxiaoxi.png'
import xitongxiaoxi from '../../assets/imgs/messageImgs/xiaoxi-xitongxiaoxi.png'
import pinlun from '../../assets/imgs/messageImgs/xiaoxi.png'
import dianzan from '../../assets/imgs/messageImgs/dianzan.png'
import remenhuodong from '../../assets/imgs/messageImgs/pre_icon_remenhuodong.png'
import qunxiaoxi from '../../assets/imgs/chuangjianqunliao.png'
export default function MessagePage() {
  const back=()=> Toast.show({
    content: '点击了返回区域',
    duration: 1000,
  })
  return (
    <>
    
    <div className='messageWrapper'>
       <NavBar onBack={back} className='navBar'>标题</NavBar>
       <List  className='defaultClass'>
        <List.Item prefix={<Image width={30} height={30} src={dianzan}/>} onClick={() => {}}>点赞</List.Item>
        <List.Item prefix={<Image width={30} height={30} src={pinlun}/>} onClick={() => {}}>评论</List.Item>
        <List.Item prefix={<Image width={30} height={30} src={hudongxiaoxi}/>} onClick={() => {}}>互动消息</List.Item>
        <List.Item prefix={<Image width={30} height={30} src={qunxiaoxi}/>} onClick={() => {}}>群消息</List.Item>
      </List>
      <List  className='activeClass'>
        <List.Item prefix={<Image width={30} height={30} src={remenhuodong}/>} onClick={() => {}}>热门活动</List.Item>
        <List.Item prefix={<Image width={30} height={30} src={xitongxiaoxi}/>} onClick={() => {}}>系统消息</List.Item>
        <List.Item prefix={<Image width={30} height={30} src={kefu}/>} onClick={() => {}}>我的客服</List.Item>
      
      </List>

      
    </div>
    </>
  )
}
