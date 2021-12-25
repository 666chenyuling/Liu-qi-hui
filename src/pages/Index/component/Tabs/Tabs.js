import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import './index.css'


const  tabs=[
  { title: '推荐' },
  { title: '美食' },
  { title: '玩乐' },
  { title: '酒店' },
  { title: '摄影' },
  { title: '护肤' },
  { title: '萌宠' },
  { title: '影视' },
  { title: '情感' },
  { title: 'Vlog' },
];

function RenderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1,top:30 }}><Tabs.DefaultTabBar {...props} page={6} style={{fontSize:12}} /></div>}
  </Sticky>);
}

//  function RenderContent (tabs){
//    useEffect(()=>{
//      console.log(tabs);
//    })
// return(<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
//   <p>Content of {tabs.title}</p>
 
// </div>); 
//  }

export  const MyTab = () => (
  <div>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initialPage={'t2'}
        renderTabBar={RenderTabBar}
      >
       
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 1
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 2
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 3
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 4
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 5
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 6
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 7
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 8
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 9
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
          Content of 10
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
);


// export class MyTab extends Component {
//     state={
//         tabs:[
//             { title: '推荐' },
//             { title: '美食' },
//             { title: '玩乐' },
//             { title: '酒店' },
//             { title: '摄影' },
//             { title: '护肤' },
//             { title: '萌宠' },
//             { title: '影视' },
//             { title: '情感' },
//             { title: 'Vlog' },
//           ],
//     }

//     renderContent = tab =>
//     (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px', backgroundColor: '#fff' }}>
//       <p>Content of {tab.title}</p>
//     </div>); 
    
//     render() {
//         return (
//             <div >
//             <WhiteSpace />
//             <StickyContainer>
//              <Tabs tabs={this.state.tabs} renderTabBar={props =><Sticky>  {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} page={6} style={{fontSize:12}} /></div>}</Sticky>}>
//              {this.renderContent}
//             </Tabs>
//            </StickyContainer>
//            <WhiteSpace />
//             </div>
//          );
//    }
// }

//  export default MyTab
