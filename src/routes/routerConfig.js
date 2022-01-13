// import Child from '../pages/Todolist/child';
// import {Home} from '../pages/Todolist/home';
// import {Root} from '../pages/Todolist/root';
// import {GrandChild} from '../pages/Todolist/grandChild';
import {Redirect} from 'react-router-dom'
import IndexPage from '@/pages/indexPage/index'
import Renwu from '@/pages/Renwu/index'
import Home from '@/components/Home/index'
// import My from '@/pages/My';
// import Adds from '@/pages/Adds/index'
import MyPage from '@/pages/myPage/index'
import MessagePage from '@/pages/messagePage/index'
import SquarePage from '@/pages/squarePage/index'

export const routes = [
  { path:'/',
   exact:true,
   render: () => <Redirect to={"/home"} />

  },
  {
    path:'/home',
    // exact:true,
    component: Home,
    routes:[ 
      {
        path:'/home/index',
        // exact:true,
        component:IndexPage
      },
      {
        path:'/home/message',
        component:MessagePage

      },

      {
        path:'/home/renwu',
        // exact:true,
        component:Renwu,
      },
      {
        path:'/home/adds',
        // exact:true,
        component:SquarePage
      },
      {
        path:'/home/my',
        // exact:true,
        component:MyPage

      }

    ]
  }
]
