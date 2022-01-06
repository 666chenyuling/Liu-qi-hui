import React from 'react'
import {SearchBar,Badge,Image} from 'antd-mobile'
import { DownOutline,ScanningOutline} from 'antd-mobile-icons'
import './index.css'
const demoSrc ='https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
export default function SearchTab () {
  return (
    <div className='inputWrapper'>
     <div className='itemOne'>
       <div className='item-One-first'>
       <span>城市</span>
       <DownOutline/>
       </div>
       <div className='item-One-second'><span><SearchBar placeholder={"搜索你兴趣社区"}/></span></div>
     </div>
     <div className='itemTow'>
    <div><ScanningOutline style={{ fontSize: 24 }}/></div>
    <div style={{'--gap':'10px'}}><Badge content='11' style={{'--right':'8%', '--top':'20%' }}><div className='iconBox' >
    <Image
            src={demoSrc}
            width={36}
            height={36}
            fit='cover'
            style={{ borderRadius: 18}}
          />
      </div></Badge></div>
     </div>
     
    </div>
  )
}
