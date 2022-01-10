import React from 'react'
import {Card,Tag,Image,Button} from 'antd-mobile'
import './index.css'
// const demoSrc =
//   'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'



export default function CommunityCard(props) {
  const {item,cardKey}=props
  const renderTags=(tags)=>{
    return (tags||[]).map(item=>(
      <Tag round color={item.tagColor} key={item.key}> {item.tagContent}</Tag>
    ))
    
  }
  const renderImage=(gorupImage)=>{
    return(gorupImage||[]).map(item=>(
      <div><Image className='image'  src={item.image} key={item.imageContent}>{item.imageContent}</Image></div>
    ))
  }
  const onBodyClick=()=>{
  console.log('hhhhhhh'+cardKey);
 }
  return (
    <>
    <div className='cardWrapper' style={{background:`url('${item.demoSrc}')`, borderRadius:'8px'}}>
       <Card
          onBodyClick={onBodyClick}
          style={{ borderRadius: '8px',background:` linear-gradient(to bottom right, ${item.cardColors[0]} , ${item.cardColors[1]})` , marginBottom:'10px' }}
          className='cardWrapper'
        >
        
          <div className='cardContent'>
            <div className='cardHeader'>
              <div>
              {renderTags(item.tags)}
              </div>
            </div>
            <div className='cardBody'>
              {item.cardText}
            </div>
            <div className='cardFooter'>
              
               <div className="gorup">
                 {renderImage(item.gorupImage)}
			           
		          </div>
              <div className='peopleNum'>{item.peopleNum.yearTime}|{item.peopleNum.peoples}</div>
               <div className='bnt'>
                 <Button size='mini' color='warning' >
                   立即加入
                 </Button>
               </div>
            </div>
          </div>
        </Card>
    </div>
    </>
  )
}
