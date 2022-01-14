import React from 'react'
import {Tabs} from 'antd-mobile'
import SquareCard from '../squareCard/index'

export default function SquareMessage() {
  return (
    <div className="SquareMessageClass">
         <Tabs
          style={{
            '--title-font-size': '13px',
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
        <SquareCard/>
    </div>
  )
}
