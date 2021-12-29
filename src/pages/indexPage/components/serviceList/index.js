import React from 'react'
import { Grid } from 'antd-mobile'
import './index.css'

export default function ServiceList() {
  // const items=[]
  return (
    <Grid columns={5} gap={4}>
    <Grid.Item>
     <div className="iconClass">
     {/* <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gengduo"></use>
     </svg> */}
       {/* <li className={`iconfont icon-gengduo`} style={{fontSize:35 }}></li> */}
     </div>
    </Grid.Item>
    <Grid.Item>
     <div className=''>2</div>
    </Grid.Item>
    <Grid.Item>
     <div className=''>3</div>
    </Grid.Item>
    <Grid.Item>
     <div className=''>4</div>
    </Grid.Item>
    <Grid.Item>
     <div className=''>5</div>
    </Grid.Item>
    </Grid>
  )
}
