import React, { useState ,useEffect,useContext} from 'react';
import {EnvironmentOutline} from 'antd-mobile-icons'
import './index.css'
import {StoreContext} from '@/store/StoreContext'
// import getAddress from '@/utils/BMap'


function RenwuAddress() {
  const {state, dispatch,actions} = useContext(StoreContext)
  const {cityAddress}=state.addressState
  
    
    return (
        <div className='wrapperRenwu'>
            <div className='Environmenticon' ><EnvironmentOutline /></div>
            <div className='RenwuAddressfont'><span>{cityAddress}</span></div>
        </div>
    )
}

export default RenwuAddress
