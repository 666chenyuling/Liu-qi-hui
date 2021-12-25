import React, { Component } from 'react';
import { Carousel, Icon,SearchBar } from 'antd-mobile';
/* 导入标签页 组件*/
import {MyTab}  from '../Index/component/Tabs/Tabs'
// import MyTab  from '../Index/component/Tabs/Tabs'
/* 导入气泡组件 */
import Popover from '../Index/component/Popover/Popover'


import './index.css';
/* 导入axios */
import axios from 'axios'
/* 导入flex组件 */
import { Flex } from 'antd-mobile';
import Meishi from '../../assets/imgs/meishi1.png';
import Gengduo from '../../assets/imgs/gengduo.png';
import Dianyin from '../../assets/imgs/dianyin.png';
import Jiaju from '../../assets/imgs/jiaju.png'
import Jingdian from '../../assets/imgs/jingdian.png'
import Judian from '../../assets/imgs/judian.png'
import Meirong from '../../assets/imgs/meirong.png'
import Paizhao from '../../assets/imgs/paizhao.png'
import Xiuxian from '../../assets/imgs/xiuxian.png'
import Yiliao from '../../assets/imgs/yiliao.png'

// //获取当前的位置信息
// navigator.geolocation.getCurrentPosition(position=>{
//   console.log('当前位置',position)
// })
// var map = new BMapGL.Map("container");
// // 创建地图实例 
// var point = new BMapGL.Point(116.404, 39.915);
// // 创建点坐标 
// map.centerAndZoom(point, 15);
// // 初始化地图，设置中心点坐标和地图级别 

export class Index extends Component {
    state = {
      /* 搜索栏 */
      mes:"消息",
      /* 轮播图转态图 */
      swiper: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      cityName:'北京',
      }

    //获取轮播图数据的方法
    async getSwiper(){
      const res=await axios.get('http://localhost:8080/home/swiper')
      this.setState({
        swiper:res.data.body
      })
    }
  //   myFun(result){
  //     var cityName = result.name;
  //     map.setCenter(cityName);
  //     alert("当前定位城市:" + cityName);
  // }
    
      
       componentDidMount() {
        const _this=this;
        var BMap = window.BMap;
        var geoc = new BMap.Geocoder();
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            geoc.getLocation(r.point, function (rs) {
                console.log(rs)   //具体信息可以打印出来看一下，根据需求取值     经纬度，城市，街道等等
                var addComp = rs.addressComponents;
                let cityName = addComp.city;
                _this.setState({
                    cityName:cityName,  //城市名
                })
                console.log(_this.state.cityName);
            });
        });
          /* 挂载后立马调用getSwiper函数 */
       this.getSwiper()
       
    }  

       
 

     

    //渲染轮播图结构
    renderSwiper(){
      return this.state.swiper.map(item => (
        <a
          key={item.id}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: 150 ,overflow:'hidden' }}
        >
          <img
            // src={`http://localhost:8080${item.imgSrc}.png`}
            src={`https://zos.alipayobjects.com/rmsportal/${item}.png`}
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
            alt=""
          />
        </a>
      ))
    }

    onChange= ( mes) => {
      this.setState({ mes });
    };
    clear = () => {
      this.setState({ mes: '' });
    };
    render() {
       
            return (
                <div className='index'>
                 {/* 轮播图 */} 
                 <Carousel autoplay={true} infinite={true} autoplayInterval={4000} cellSpacing={0}>
                    {this.renderSwiper()}
                 </Carousel>
                {/* 搜索栏区 */}
                <Flex className="search" >
                  <Flex.Item style={{flex:3, textAlign:'right',}} onClick={()=>{this.props.history.push('/citylist')}}>
                   <span style={{display:"inline-block" ,lineHeight:40,verticalAlign:"middle"}}>{this.state.cityName} <Icon type={'down'} style={{marginTop:7,paddingTop:7}}/></span>
                  
                  </Flex.Item>
                  <Flex.Item style={{flex:10}}>
                    <SearchBar 
                    value={this.state.mes} placeholder="Search" 
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => this.props.history.push('/search')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    cancelText=' '
                    showCancelButton
                   className="searchInput"
                    onChange={this.onChange}></SearchBar>
                  </Flex.Item>
                  <Flex.Item style={{flex:1}}>
                    <Popover></Popover>
                  </Flex.Item>
                </Flex>
                {/* 导航菜单 */}
               <Flex className="nav">
                 <Flex.Item>
                <img src={Meishi} alt=""></img>
                 <h2>美食</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Xiuxian} alt=""></img>
                 <h2>休闲/玩乐</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Judian} alt=""></img>
                 <h2>酒店/民宿</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Dianyin} alt=""></img>
                 <h2>电影/演出</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Meirong} alt=""></img>
                 <h2>医学美容</h2>
                 </Flex.Item>
               </Flex>
               <Flex className="nav">
                 <Flex.Item>
                <img src={Jingdian} alt=""></img>
                 <h2>景点攻略</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Paizhao} alt=""></img>
                 <h2>拍照/写真</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Yiliao} alt=""></img>
                 <h2>医疗/口腔</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Jiaju} alt=""></img>
                 <h2>家具/装修</h2>
                 </Flex.Item>
                 <Flex.Item>
                <img src={Gengduo} alt=""></img>
                 <h2>更多</h2>
                 </Flex.Item>
               </Flex>
               {/* 内容展示区 */} 
                {/* <Card style={{backgroundColor:'rgb(245,245,249)',padding:0}} full> */}
                < MyTab></ MyTab>
                {/* </Card> */}
                
                </div>
              );
        
    }
}

export default Index
