import React from 'react'
import {Space} from 'antd'
import Rotation from './components/rotationChart/index'
import ServiceList from './components/serviceList/index'
import './index.css'

 function IndexPage(){
  return (
    <>
    {/* 轮播图 */}
    <Space direction='vertical' block className="spaceWrapper">
    <Rotation/>
    <ServiceList/>
    </Space>
    </>
  )

}

export default IndexPage