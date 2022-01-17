import React from 'react'
import { useState, useEffect } from 'react'
import {Tabs,Popup} from 'antd-mobile'
import SquareCard from '../squareCard/index'
import SquareComment from '../squareComment/index'

export default function SquareMessage() {
  const [visiblePo,setVisiblePo]=useState(false)
  const [visibleComment,setVisibleComment]=useState(false)
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
        {/* 评论弹出框 */}
        <Popup
              visible={visibleComment}
              onMaskClick={() => {
                setVisibleComment(false)
              }}     
              position='left'
              bodyStyle={{ minWidth: '100vw' }}
            >
              {/* {visibleComment===true?SquareComment(setVisibleComment):{}} */}
            {/* <SquareComment setCommentFunction={{setVisibleComment}}/> */}
            <SquareComment></SquareComment>
         </Popup>
    </div>
  )
}
