import React, { useState } from 'react'
import {Space} from 'antd'
import {Card,Popup, Button} from 'antd-mobile'
import Rotation from './components/rotationChart/index'
import ServiceList from './components/serviceList/index'
import ClassificationTab from './components/classificationTab/index'
import SearchTab from './components/searchTab/index'
import PopupCommunity from './components/popupCommunity'
import PopupService from './components/popupService'
// import {MyTab} from '../Index/component/Tabs/Tabs'
import './index.css'

 function IndexPage(){
  const [visible, setVisible] = useState(false)
  const [servicevisible,setServicevisible]=useState(false)
  const [servicetype,setServicetype]=useState('')
  return (
    <>
   
    <Space direction='vertical'  className="spaceWrapper" >
    <SearchTab style={{position: 'fixed',top:0}}></SearchTab>
    <Space direction='vertical' className="homeWrapper"  >
    <Card>
      {/* 轮播图 */}
    <Rotation/>
    {/* 菜单列表 */}
    <ServiceList setServicevisible={setServicevisible} setServicetype={setServicetype}/>
    </Card>
    </Space>
    {/* <MyTab></MyTab> */}
    <ClassificationTab setVisible={setVisible}></ClassificationTab>
    {/* <Card>
    
    </Card> */}
    </Space>
    {/* 群聊弹出框 */}
    <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              position='right'
              bodyStyle={{ width: '100vw' }}
            >
             <PopupCommunity setVisible={setVisible}/>
     </Popup>  
     {/* 社区菜单弹出框 */}
     <Popup
              visible={servicevisible}
              onMaskClick={() => {
                setServicevisible(false)
              }}
              position='right'
              bodyStyle={{ width: '100vw' }}
            >
            <PopupService setServicevisible={setServicevisible} servicetype={servicetype}/>
     </Popup>  
    </>
  )

}

export default IndexPage