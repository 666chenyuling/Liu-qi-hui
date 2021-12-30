import React from 'react'
import { Grid } from 'antd-mobile'
import './index.css'
import chuangjianqunliao from '../../../../assets/imgs/chuangjianqunliao.png'
import gengduo from '../../../../assets/imgs/gengduo.png'
import huiyuanguanli from '../../../../assets/imgs/huiyuanguanli.png'
import renyuanrenzheng from '../../../../assets/imgs/renyuanrenzheng.png'
import shengjifuwubanben from '../../../../assets/imgs/shengjifuwubanben.png'
export default function ServiceList() {
  // const items=[]
  return (
    <Grid columns={5} gap={4} style={{marginTop: 15}}>
    <Grid.Item>
     <div className="iconClass">
     <img src={chuangjianqunliao} alt=""></img>
     <h2>社区创建</h2>
     </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'>  
        <img src={renyuanrenzheng} alt=""></img>
        <h2>社长认证</h2>
    </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'>     
     <img src={shengjifuwubanben} alt=""></img>
     <h2>社区升级</h2>
    </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'>     
     <img src={huiyuanguanli} alt=""></img>
     <h2>社区管理</h2>
     </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'>     
     <img src={gengduo } alt=""></img>
     <h2>更多服务</h2>
    </div>
    </Grid.Item>
    </Grid>
  )
}
