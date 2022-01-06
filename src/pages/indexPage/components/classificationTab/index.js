import React from 'react'
import { Tabs} from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';
import './index.css'



export default function ClassificationTab() {
  return (
    <StickyContainer style={{height: 400}}>
    
    <Tabs defaultActiveKey='1' className='tabClass' style={{
      '--title-font-size': '13px','overflow':'none'
    }}>
      
          <Tabs.Tab title='Espresso' key='1'>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            
            <div>4</div>
          </Tabs.Tab>
      
          <Tabs.Tab title='Coffee Latte' key='2'>
            2
          </Tabs.Tab>
      
          <Tabs.Tab title='Cappuccino' key='3'>
            3
          </Tabs.Tab>
      
          <Tabs.Tab title='Americano' key='4'>
            4
          </Tabs.Tab>
          
          <Tabs.Tab title='Flat White' key='5'>
            5
          </Tabs.Tab>
          
          <Tabs.Tab title='Caramel Macchiato' key='6'>
            6
          </Tabs.Tab>
          
          <Tabs.Tab title='Cafe Mocha' key='7'>
            7
          </Tabs.Tab>
          
          
    </Tabs>
      
   </StickyContainer>
  )
}
