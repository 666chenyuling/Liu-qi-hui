import React from 'react'
import {NavBar, Button,Toast } from 'antd-mobile'
import Createcommunity from './components/createcommunity'
import Administration from './components/administration'
import Authentication from './components/authentication'
import Moreservice from './components/moreservice'
import Upgrade from './components/upgrade'

function PopupService(props) {
  //1创建2认证3升级4管理5更多
  const back = () =>{
   props.setServicevisible(false)
   console.log(props.servicetype);
  }
   
    return (
        <div>
           <NavBar onBack={back}  style={{backgroundColor:'rgb(243, 243, 243)'}}>{props.servicetype}</NavBar>  
           <Createcommunity servicetype={props.servicetype} setServicevisible={props.setServicevisible} />
           <Administration servicetype={props.servicetype}  setServicevisible={props.setServicevisible}/>
           <Authentication servicetype={props.servicetype}  setServicevisible={props.setServicevisible} />
           <Moreservice servicetype={props.servicetype}  setServicevisible={props.setServicevisible} />
           <Upgrade servicetype={props.servicetype}   setServicevisible={props.setServicevisible}/>
        </div>
    )
}

export default PopupService
