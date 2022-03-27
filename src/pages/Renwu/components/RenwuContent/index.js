import React, { useState } from 'react';
import { Card, Toast, Button,Image ,Tag,Space } from 'antd-mobile'
import {StarOutline } from 'antd-mobile-icons'
import './index.css'

const demoSrc = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
function RenwuContent(props) {
    const {}=props
    const [storeName,setStoreName]=useState('榕江猪脚饭')
    const [stortTime,setStoreTime]=useState('00:00-03:00')
    const renderTags=(itemTags)=>{
        return (itemTags||[]).map((item)=>(item))
    }
    return (
        <div className='RenwuContentWrapper'>
        <Card  >
            <div className='RenwuContentOne'>
                <div className='RenwuContentOneImg'>
                <Image
                   src={demoSrc}
                   width={64}
                   height={64}
                   fit='cover'
                   style={{ borderRadius: 8 }}
                 />
                </div>
                <div className='RenwuContentOneReq'>
                    <div className='RenwuContentOneReqName'>
                        {storeName}
                    </div>
                    <div className='RenwuContentOneReqTime'>
                        营业时间：{stortTime}
                    </div>
                    <div className='RenwuContentOneReqTag'>
                        <Space>
                        <Tag color='#2db7f5'>#2db7f5</Tag>
                        <Tag color='#87d068'>#87d068</Tag>
                        <Tag color='#108ee9'>#108ee9</Tag>
                        </Space>
                    </div>
                </div>
                <div className='RenwuContentOneIcons'>
                <StarOutline  fontSize={24} />
                </div>
            </div>
            <div className='RenwuContentTow'>
                <div className='RenwuContentTowMon'>
                    <div className='RenwuContentTowMonCommission'>
                        预估佣金：{"￥7.00"}
                    </div>
                    <div className='RenwuContentTowMonNewP'>
                        新人福利：{"￥2"}
                    </div>
                </div>
                <div className='RenwuContentTowBtn'>
                <Button color='primary' size='small' className='RenwuContentbtn'>进入店铺</Button>
                </div>
            </div>
        </Card>    
        </div>
    )
}

export default RenwuContent
