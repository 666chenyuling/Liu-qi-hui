import React from 'react'
import {Image} from 'antd-mobile'
import {imgReady} from '@/utils/imgload'
import './index.css'

export default function SquareCard(props) {
  return (
    <div className="SquareCardClass">
      <div className='SquareCardWrapper'>
         <div className='squareHeard'>
           <div className='peopleHead'></div>
           <div className='peopleName'></div>
           <div className='peopleFunction'></div>
         </div>
         <div className='squareText'>
           <div className='postsText'>
           <input type="checkbox" name="" id="check"/>
             <div className="text">
          
            零零落落零零落落零零落落零零落落零零落落零零落落零零落落来了额sad sad萨达撒打算打算打大叔大叔大叔的撒打算大的坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷坎坎坷坷111可口可乐坎坎坷坷快乐快乐快乐sodas
            <img src="" alt="" class="iconfont "/> 
           </div>
        <div class="open">
          <label for="check" class="btn"></label>
        </div>  
           </div>
         </div>
         <div className='squareImg'> 
            <Image/>
         </div>
         <div className='squareFooter'></div>


      </div>
    </div>
  )
}
