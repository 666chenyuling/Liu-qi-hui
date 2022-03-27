import React from 'react'
import { SearchOutline  } from 'antd-mobile-icons'
import './index.css'

function RenwuSearch () {
    return (
        <div className='RenwuSearchWrapper'>
            <div className='RenwuSearchFont'>
               <div></div>
                <div>周边推荐</div>
            </div>
            <div className='RenwuSearchIcon'>
                <div className='RenwuSearchIconWrapper'>
                  <SearchOutline />
                </div>
            </div>
        </div>
    )
}

export default RenwuSearch
