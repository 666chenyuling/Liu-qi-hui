import React from 'react'
import RenwuAddress from './components/RenwuAddress/index'
import RenwuRotation from './components/RenwuRotation/index'
import RenwuSearch from './components/RenwuSearch/index'
import RenwuContent from './components/RenwuContent/index'
import { Card } from 'antd-mobile'

function Renwu() {
    return (
        <div>
           <RenwuAddress/>
           <Card style={{paddingLeft:'30px',paddingRight:'30px',borderRadius:'0px 0px 8px 8px', backgroundImage:'linear-gradient(rgba(0, 234, 255, 0.966), rgba(0, 234, 255, 0.2))'}}>
           <RenwuRotation/>
           
           </Card>
           <RenwuSearch/>
           <RenwuContent/>
        </div>
    )
}

export default Renwu

