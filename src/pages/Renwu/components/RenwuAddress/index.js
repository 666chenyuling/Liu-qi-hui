import React, { useState } from 'react';

import {EnvironmentOutline} from 'antd-mobile-icons'
import './index.css'

function RenwuAddress() {
    const [address,setAddress]=useState('南昌')
    return (
        <div className='wrapperRenwu'>
            <div className='Environmenticon' ><EnvironmentOutline /></div>
            <div className='RenwuAddressfont'><span>{address}</span></div>
        </div>
    )
}

export default RenwuAddress
