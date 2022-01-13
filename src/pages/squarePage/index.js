import React from 'react'
import SquareSearch from './components/squareSearch/index'
import SquareMessage from './components/squareMessage/index'
import './index.css'

export default function SquarePage() {
  return (
    <div className='squareWrapper'>
      <SquareSearch/>
      <SquareMessage/>
    </div>
  )
}
