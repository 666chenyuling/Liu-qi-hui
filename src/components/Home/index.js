import React from 'react'

import renderRoutes from '@/routes/renderRoutes'
import { TabBar } from 'antd-mobile';
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
//导入自己的样式文件
import  './index.css'


 function Bottom() {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    console.log(pathname)
    history.push(value)
  }
  const tabItems=[
    { 
      key:"/home/index",
      title:"社区",
      icon:"icon-shouye"
     
    },
    {
      key:"/home/renwu",
      title:"任务",
      icon:"icon-task"
      
    },
    {
      key:"/home/adds",
      title:"广场",
      icon:"icon-fabu"
     
    },
    {
      key:"/home/news",
      title:"消息",
      icon:"icon-xiaoxi",
      
    }, 
    {
      key:"/home/my",
      title:"我的",
      icon:"icon-wode",
      
    }
  ]
  return (
    <TabBar  defaultActiveKey={"/home/adds"} className="tabBar" onChange={value => setRouteActive(value)}>
      {tabItems.map(item => (
        <TabBar.Item
        title={item.title }
        key={item.key}
        icon={<i className={`iconfont ${item.icon} iconClass`} style={{ position:'relative',
        top: 0}}></i>}
        selectedIcon={<i className={`iconfont ${item.icon} iconClass `} style={{color:'rgb(30,85,198)'}}></i>
        }
      >
        
      </TabBar.Item>
      ))}
    </TabBar>
  )
}

export default function Home({route}){
  return(
    <div className='app'>
      <div className='body'>
      {renderRoutes(route.routes)}
      </div>
      <div className='bottom'>
      <Bottom/>
      </div>
    </div> 
  )
}




// export class Home extends Component {
//     state = {
//         //默认选中tabBar
//         selectedTab: this.props.location.pathname
//         //用于控制tabBar的展示和隐藏，这个值应该为false，也就是不隐藏
//         // hidden: false,
//         // //全屏
//         // fullScreen: true,
//       };

//    //渲染TabBar.Item
// renderTabItem(){
//      return tabItems.map(item=>(
//       <TabBar.Item
//       title={item.title !=='发布'?item.title:null}
//       key={item.title}
//       icon={<i className={`iconfont ${item.icon}`} style={item.title==='发布'?{fontSize:35 ,color:'rgb(30,85,198)'}:{}}></i>}
//       selectedIcon={<i className={`iconfont ${item.icon}`} style={item.title==='发布'?{fontSize:35 ,color:'rgb(30,85,198)'}:{}}></i>
//       }
//       selected={this.state.selectedTab === item.path}
//       // badge={1}
//       onPress={() => {
//         this.setState({
//           selectedTab: item.path,
//         });

//         //路由切换
//         this.props.history.push(item.path)
//       }}
     
//     >
     
//     </TabBar.Item>
//      ))
//    }
      
// render() {
//         return (   
//        <div className='app'>
//          <div className='body'>
//         {renderRoutes(this.props.route.routes)}
//          </div>
//         {/* <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}> */}
//         <div className='bottom'>
//         <TabBar
//           unselectedTintColor="#949494"
//           tintColor="rgb(30,85,198)"
//           barTintColor="white"
//           // hidden={this.state.hidden}
//           noRenderContent="true"
//         >
//          {this.renderTabItem()}
//         </TabBar>
//        </div>
//       </div>
//       // </div> 
//         )
//       }
// }

// export default Home
