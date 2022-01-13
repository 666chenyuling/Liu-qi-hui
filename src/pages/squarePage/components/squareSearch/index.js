import React from 'react'
import {SearchBar,Toast} from 'antd-mobile'
import './index.css'

export default function SquareSearch() {
  return (
    <div className='squareSearch'>
      <div className='inputClass'>
      <SearchBar  onFocus={() => {Toast.show('获得焦')}}/>
      </div>
      <div className='iconStyle'>
      <span className='iconfont icon-fabu'/>
      </div>
    </div>
  )
}
