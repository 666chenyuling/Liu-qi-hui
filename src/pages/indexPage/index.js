import React from 'react'
import {Space} from 'antd'
import {Card} from 'antd-mobile'
import Rotation from './components/rotationChart/index'
import ServiceList from './components/serviceList/index'
import ClassificationTab from './components/classificationTab/index'
import SearchTab from './components/searchTab/index'
// import {MyTab} from '../Index/component/Tabs/Tabs'
import './index.css'

 function IndexPage(){
  return (
    <>
   
    <Space direction='vertical'  className="spaceWrapper" >
    <SearchTab style={{position: 'fixed',top:0}}></SearchTab>
    <Space direction='vertical' className="homeWrapper"  >
    <Card>
      {/* 轮播图 */}
    <Rotation/>
    <ServiceList/>
    </Card>
    </Space>
    {/* <MyTab></MyTab> */}
    <ClassificationTab></ClassificationTab>
    {/* <Card>
    
    </Card> */}
    </Space>
    </>
  )

}

export default IndexPage