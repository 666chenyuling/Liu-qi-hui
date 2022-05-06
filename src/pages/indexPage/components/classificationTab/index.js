import React from 'react'
import  { useState } from 'react'
import { Tabs} from 'antd-mobile'
import { StickyContainer} from 'react-sticky';
import CommunityCard from '../communityCard'
import './index.css'
const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
const demoSrc2= 'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
const items=[
  {
   title:'推荐',
   key:'1',   
   cardMessages:[
     {
     key:'11',  
     demoSrc:`${demoSrc}`,
     cardColors:['rgba(248,0,0,1)','rgba(255,255,0,0.1)'],
     tags:[{ key:'111',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'112',tagColor:'success',tagContent:'dududu'}],
     cardText:'坐等一个人可以给我唱体面坐等一个人可以给我唱体面',
     gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
     peopleNum:{yearTime:'90后',peoples:'80人'}
  },
  {
    key:'12',
    demoSrc:`${demoSrc2}`,
    cardColors:['rgba(0,156,144,1)','rgba(255,255,0,0.1)'],
    tags:[{key:'121',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'122',tagColor:'success',tagContent:'dududu'}],
    cardText:'you my love ',
    gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
    peopleNum:{yearTime:'00后',peoples:'10人'}
 },
 {
  key:'13',
  demoSrc:`${demoSrc2}`,
  cardColors:['rgba(0,15,144,1)','rgba(255,255,0,0.1)'],
  tags:[{key:'121',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'122',tagColor:'success',tagContent:'dududu'}],
  cardText:'you my love ',
  gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
  peopleNum:{yearTime:'00后',peoples:'10人'}
},
{
  key:'14',
  demoSrc:`${demoSrc2}`,
  cardColors:['rgba(233,120,144,1)','rgba(255,255,0,0.1)'],
  tags:[{key:'121',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'122',tagColor:'success',tagContent:'dududu'}],
  cardText:'you my love ',
  gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
  peopleNum:{yearTime:'00后',peoples:'10人'}
},
{
  key:'15',
  demoSrc:`${demoSrc2}`,
  cardColors:['rgba(50,158,144,1)','rgba(255,255,0,0.1)'],
  tags:[{key:'121',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'122',tagColor:'success',tagContent:'dududu'}],
  cardText:'you my love ',
  gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
  peopleNum:{yearTime:'00后',peoples:'10人'}
},
{
  key:'16',
  demoSrc:`${demoSrc2}`,
  cardColors:['rgba(55,156,144,1)','rgba(20,255,0,0.1)'],
  tags:[{key:'121',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'122',tagColor:'success',tagContent:'dududu'}],
  cardText:'you my love ',
  gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
  peopleNum:{yearTime:'00后',peoples:'10人'}
},

]

 },
 {
  title:'我的社区',
  key:'2',
  cardMessages:[
    {
    key:'21',  
    demoSrc:`${demoSrc}`,
    cardColors:['rgba(248,0,0,1)','rgba(255,255,0,0.1)'],
    tags:[{ key:'211',tagColor:'#2db7f5',tagContent:'kongxi'},{key:'212',tagColor:'success',tagContent:'dududu'}],
    cardText:'坐等一个人可以给我唱体面坐等一个人可以给我唱体面',
    gorupImage:[{image:`${demoSrc}`,imageContent:'1'},{image:`${demoSrc}`,imageContent:'2'},{image:`${demoSrc}`,imageContent:'3'},{image:`${demoSrc}`,imageContent:'4'},{image:`${demoSrc}`,imageContent:'5'}],
    peopleNum:{yearTime:'90后',peoples:'80人'}
  
 }
]
},

{
  title:'餐饮',
  key:'3',
  cardMessages:[]
},
{
  title:'旅游',
  key:'4',
  cardMessages:[]
},
{
  title:'游戏',
  key:'5',
  cardMessages:[]
},
{
  title:'美妆',
  key:'6',
  cardMessages:[]
},
{
  title:'商业',
  key:'7',
  cardMessages:[]
  
},
]

function renderCards(cardMessages,setVisible){
  // if(cardMessages.length<=3){
  //   setStyle((style)=>style===false)
  // }
  return (cardMessages||[]).map(item=>(
   <CommunityCard item={item} key={item.key} cardKey={item.key} setVisible={setVisible}  ></CommunityCard>
  ))
  
  
}

export default function ClassificationTab(props) {

  const [style,setStyle]=useState(true)
  const renderTabs=(items)=>{
    return (items||[]).map(item=>(
      <Tabs.Tab title={item.title} key={item.key}>
        {renderCards(item?.cardMessages,props.setVisible,style,setStyle)}
    </Tabs.Tab>
    ))
  }
  return (
    <StickyContainer style={{height: 0}}>
    
    <Tabs defaultActiveKey='1' className={style?'tabClass':'tabClass1'} style={{
      '--title-font-size': '13px','overflow':'none'
    }}>

      {renderTabs(items)}
 
    </Tabs>
      
   </StickyContainer>
  )
}
