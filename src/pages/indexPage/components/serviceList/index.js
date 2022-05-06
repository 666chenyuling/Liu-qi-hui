import React from 'react'
import { Grid } from 'antd-mobile'
import './index.css'
import chuangjianqunliao from '../../../../assets/imgs/chuangjianqunliao.png'
import gengduo from '../../../../assets/imgs/gengduo.png'
import huiyuanguanli from '../../../../assets/imgs/huiyuanguanli.png'
import renyuanrenzheng from '../../../../assets/imgs/renyuanrenzheng.png'
import shengjifuwubanben from '../../../../assets/imgs/shengjifuwubanben.png'
export default function ServiceList(props) {
  // const items=[] setServicevisible={setServicevisible}
  //1创建2认证3升级4管理5更多
  const Createcommunity=()=>{
    props.setServicetype('社区创建')
    props.setServicevisible(true)
  }
  const Authentication=()=>{
    props.setServicetype('社长认证')
    props.setServicevisible(true)
    
  }
  const Upgrade=()=>{
    props.setServicetype('社区升级')
    props.setServicevisible(true)
    
  }
  const Administration=()=>{
    props.setServicetype('社区管理')
    props.setServicevisible(true)


  }
  const Moreservice=()=>{
    props.setServicetype('更多')
    props.setServicevisible(true)


  }
  return (
    <Grid columns={5} gap={4} style={{marginTop: 15}}>
    <Grid.Item>
     <div className="iconClass" onClick={Createcommunity}>
     <img src={chuangjianqunliao} alt=""></img>
     <h2>社区创建</h2>
     </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'onClick={Authentication}>  
        <img src={renyuanrenzheng} alt=""></img>
        <h2>社长认证</h2>
    </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'onClick={Upgrade}>     
     <img src={shengjifuwubanben} alt=""></img>
     <h2>社区升级</h2>
    </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'onClick={Administration}>     
     <img src={huiyuanguanli} alt=""></img>
     <h2>社区管理</h2>
     </div>
    </Grid.Item>
    <Grid.Item>
     <div className='iconClass'onClick={Moreservice}>     
     <img src={gengduo } alt=""></img>
     <h2>更多服务</h2>
    </div>
    </Grid.Item>
    </Grid>
  )
}
