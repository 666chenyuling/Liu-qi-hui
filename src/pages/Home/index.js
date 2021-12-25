import React, { Component } from 'react'
import {  Route} from 'react-router-dom'
import News from '../News';
import Adds from '../Adds';
import Index from '../Index';
import My from '../My';
import Renwu from '../Renwu';
import { TabBar } from 'antd-mobile';
//导入自己的样式文件
import './index.css'

const tabItems=[
  {
    title:"首页",
    icon:"icon-shouye",
    path:"/home/index"
  },
  {
    title:"任务",
    icon:"icon-task",
    path:"/home/renwu"
  },
  {
    title:"发布",
    icon:"icon-fabu",
    path:"/home/adds"
  },
  {
    title:"消息",
    icon:"icon-xiaoxi",
    path:"/home/news"
  }, 
  {
    title:"我的",
    icon:"icon-wode",
    path:"/home/my"
  }
]
export class Home extends Component {
    state = {
        //默认选中tabBar
        selectedTab: this.props.location.pathname
        //用于控制tabBar的展示和隐藏，这个值应该为false，也就是不隐藏
        // hidden: false,
        // //全屏
        // fullScreen: true,
      };

   //渲染TabBar.Item
renderTabItem(){
     return tabItems.map(item=>(
      <TabBar.Item
      title={item.title !=='发布'?item.title:null}
      key={item.title}
      icon={<i className={`iconfont ${item.icon}`} style={item.title==='发布'?{fontSize:35 ,color:'rgb(30,85,198)'}:{}}></i>}
      selectedIcon={<i className={`iconfont ${item.icon}`} style={item.title==='发布'?{fontSize:35 ,color:'rgb(30,85,198)'}:{}}></i>
      }
      selected={this.state.selectedTab === item.path}
      // badge={1}
      onPress={() => {
        this.setState({
          selectedTab: item.path,
        });

        //路由切换
        this.props.history.push(item.path)
      }}
     
    >
     
    </TabBar.Item>
     ))
   }
      
render() {
        return (   
       <div className="home">
         
       <Route path="/home/news" component={News}/>
       <Route path="/home/index" component={Index}/>
       <Route path="/home/renwu" component={Renwu}/>
       <Route path="/home/adds" component={Adds}/>
       <Route path="/home/my" component={My}/>

        {/* <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}> */}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="rgb(30,85,198)"
          barTintColor="white"
          // hidden={this.state.hidden}
          noRenderContent="true"
        >
         {this.renderTabItem()}
        </TabBar>
      </div>
      // </div> 
        )
      }
}

export default Home
