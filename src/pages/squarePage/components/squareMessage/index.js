import React from 'react'
import { useState, useEffect } from 'react'
import {Tabs,Popup} from 'antd-mobile'
import SquareCard from '../squareCard/index'
import SquareComment from '../squareComment/index'
import {VisibleContext,VisibleDescriptionContext} from './store'

export default function SquareMessage() {
  const [visiblePo,setVisiblePo]=useState(false)
  const [visibleComment,setVisibleComment]=useState(false)
  const [visibleDescriptionRes,setVisibleDescriptionRes]=useState(false)
  return (
    <div className="SquareMessageClass">
         <Tabs
          style={{
            '--title-font-size': '13px',
            backgroundColor:'white',
           

          }}
          onChange={(key)=>{}}
          defaultActiveKey={"recommend"}
          activeLineMode='fixed'
        >
          <Tabs.Tab title='关注' key='follow' />
          <Tabs.Tab title='推荐' key='recommend' />
          <Tabs.Tab title='热门' key='hot' />
          <Tabs.Tab title='表白墙' key='confession ' />
          <Tabs.Tab title='职业' key='work' />
        </Tabs>
        <SquareCard setFunction={{setVisiblePo,setVisibleComment}}/>
        {/* 分享弹出框 */}
        <Popup visible={visiblePo}  
        onMaskClick={() => {
          setVisiblePo(false)
        }}
        bodyStyle={{ height: '40vh' }}>
        </Popup>
        
        <VisibleContext.Provider value={setVisibleComment}>
          <VisibleDescriptionContext.Provider value={setVisibleDescriptionRes}>
          {/* 评论弹出框 */}
        <Popup
              visible={visibleComment}
              onMaskClick={() => {
                setVisibleComment(false)
              }}     
              position='right'
              bodyStyle={{ minWidth: '100vw' ,backgroundColor:'rgb(243, 243, 243)'}}
            >
              {/* {visibleComment===true?SquareComment(setVisibleComment):{}} */}
            {/* <SquareComment setCommentFunction={{setVisibleComment}}/> */}
            <SquareComment></SquareComment>
         </Popup>
         {/* 查看全部回复弹出框 */}
         <Popup
          visible={visibleDescriptionRes}
          onMaskClick={() => {
          setVisibleDescriptionRes(true)}}
          bodyStyle={{ minHeight: '100vh' }}
         ></Popup>
         </VisibleDescriptionContext.Provider>
         </VisibleContext.Provider>
    </div>
  )
}
