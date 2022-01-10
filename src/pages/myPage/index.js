import React from 'react'
import { Image,Tag ,Card,Grid,NoticeBar} from 'antd-mobile'
import { SetOutline,SystemQRcodeOutline ,RightOutline,ContentOutline,} from 'antd-mobile-icons'
import './index.css'
import jifen from '../../assets/imgs/jifen1.png'
import zengjia from '../../assets/imgs/zengjia.png'
import weiwancheng from '../../assets/imgs/weiwancheng-.png'
import task from '../../assets/imgs/task.png'
import shenhe from '../../assets/imgs/shenhe.png'
import wancheng from '../../assets/imgs/wancheng-.png'
import yue from '../../assets/imgs/yue.png'
import yinhangka from '../../assets/imgs/yinhangka.png'
import wodeqiajuan from '../../assets/imgs/wodeqiajuan.png'
import fapiao from '../../assets/imgs/fapiao.png'
const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
export default function MyPage() {
  const onAddDosage=()=>{
    console.log('你点击了积分商城');

  }
  const onShop=()=>{
    console.log('你点击了加量服务');
  }
  return (
    <>
    <div className="outWrapper">
    <div className="allContain">
     <div className="myWrapper">
        <div className="myContainIcon">
          <div className="headIcon">
            <Image src={demoSrc}  width={50}
            height={50}
            fit='cover'
            style={{ borderRadius: 25 }}></Image>
          </div>
        </div>
        <div className="myContainEnm">
          <div className="emptyContain"></div>
          <div className="netName">
            <span>{'想飞的灰灰'}</span>
            <span>  <Tag round color='rgb(200,234,0)'>
              {'Lv.6'} 
                   </Tag>
           </span>
          </div>
          <div className="myIdentity">
             <Tag color='#2db7f5' round style={{fontSize:10}} >
               {'游客'}
             </Tag>
          </div>
        </div>
        <div className="myContainSet">
          <div className="setIcons">
            <div className="scanCode">
              <SetOutline/>
            </div>
            <div className="setUp">
              <SystemQRcodeOutline/>
            </div>
          </div>
          <div className="toIndexPage">
            <div className="toIndex">
            <ContentOutline fontSize={10}/>{'主页'}<RightOutline fontSize={10}/>
            </div>
          </div>

        </div>
     </div> 
     {/* 
     1,积分商城
     2，加量服务
     */}
     <Card className="userCard"  >
     <div className="userWrapper">
      <div className="addDosage" onClick={()=>{onAddDosage()}}>
        <div className="addDosageChildOne"><Image src={zengjia}  width={20} height={20} style={{marginTop:4}}></Image>
        <div style={{textAlign:'center',lineHeight: '28px' }}>
        {"加量服务"}

        </div>
        </div>
        <div className="addDosageChildTow">
       
        {'加量服务8折限时抢购'}

        </div>
      </div>
      <div className="shop" onClick={()=>{
        onShop()
      }}>
        <div className="shopChildOne">
        <Image src={jifen}  width={20} height={20} style={{marginTop:4}}> </Image>
        <div style={{textAlign:'center',lineHeight: '28px' }}>
        {"积分商城"}
        </div>
        </div>
        <div className="shopChildTow">
        {'好物0元兑换'}
        </div>
      </div>
     </div>
     </Card>
     {/* 
     1，卡卷，积分
     2，收藏，足记
     */}
     <Card className="cardRoll">
      <Grid columns={4} gap={8} style={{marginTop:8,marginBottom:8}}>
          <Grid.Item>
            <div >{'0'}</div>
            <div >{'星币'}</div>

          </Grid.Item>
          <Grid.Item>
            <div >{'0'}</div>
            <div >{'卡卷'}</div>

          </Grid.Item>
          <Grid.Item>
            <div >{'0'}</div>
            <div >{'收藏'}</div>
          </Grid.Item>
          <Grid.Item>
            <div >{'0'}</div>
            <div >{'足迹'}</div>
          </Grid.Item>
      </Grid>
       {/* <div className='cardRollOne'>

       </div>
       <div className='cardRollTow'></div>
       <div className='cardRollThree'></div>
       <div className='cardRollFour'></div> */}


     </Card>

    {/* 
    1,任务管理
      1.1 待审核任务
      1.2 未完成任务
      1.3 已完成任务
      1.4 售后/待评
    */}
    <Card className='task'>
      <div className='taskHeader'>
        <div className='taskHeaderOne'>{"任务管理"}</div>
        <div className='taskHeaderTow'>
          {'查看全部任务'}<RightOutline />
        </div>
      </div>
      <div className='taskBody'>
        <div className='taskItem'><Image src={shenhe}  width={30}
            height={30}/><div>{'待审核任务'}</div></div>
        <div className='taskItem'><Image src={weiwancheng} width={30}
            height={30}/><div>{'未完成任务'}</div></div>
        <div className='taskItem'><Image src={wancheng} width={30}
            height={30}/><div>{'已完成任务'}</div></div>
        <div className='taskItem'><Image src={task} width={30}
            height={30}/><div>{'任务反馈'}</div></div>
      </div>
      <div className='taskFooter'>
        <div className='taskFooterOne'>
          <NoticeBar  content='默认' style={{backgroundColor:'white', color:'black'}}>

          </NoticeBar>
        </div>
        <div className='taskFooterTow'>
          {'去开启'}<RightOutline />
        </div>
      </div>
    </Card>
    {/* 我的钱包 */}
    <Card className='task'>
      <div className='taskHeader'>
        <div className='taskHeaderOne'>{"我的钱包"}</div>
        <div className='taskHeaderTow'>
          {'余额、发票等'}<RightOutline />
        </div>
      </div>
      <div className='taskBody'>
        <div className='taskItem'><Image src={yue}  width={30}
            height={30}/><div>{'余额'}</div></div>
        <div className='taskItem'><Image src={yinhangka} width={30}
            height={30}/><div>{'银行卡'}</div></div>
        <div className='taskItem'><Image src={wodeqiajuan} width={30}
            height={30}/><div>{'现金劵'}</div></div>
        <div className='taskItem'><Image src={fapiao} width={30}
            height={30}/><div>{'发票'}</div></div>
      </div>
      <div className='taskFooter'>
        <div className='taskFooterOne'>
          <NoticeBar  content='默认' style={{backgroundColor:'white', color:'black'}}>

          </NoticeBar>
        </div>
        <div className='taskFooterTow'>
          {'去认证'}<RightOutline />
        </div>
      </div>
    </Card>
    </div>
    
    </div>
    </>
  )
}
