import React from 'react'
import {Space} from 'antd'
import {Card} from 'antd-mobile'
import Rotation from './components/rotationChart/index'
import ServiceList from './components/serviceList/index'
import ClassificationTab from './components/classificationTab/index'
import './index.css'

 function IndexPage(){
  return (
    <>
    {/* 轮播图 */}
    <Space direction='vertical'  className="spaceWrapper">
    <Card>
    <Rotation/>
    <ServiceList/>
    </Card>
    <ClassificationTab></ClassificationTab>
    </Space>
    </>
  )

}

export default IndexPage