import Child from '../pages/Todolist/child';
import {Home} from '../pages/Todolist/home';
import {Root} from '../pages/Todolist/root';
import {GrandChild} from '../pages/Todolist/grandChild';


export const routes = [
  { path:'/',
    component: Root,
    routes: [
      { path: '/home',
        exact: true,
        component: Home
      },
      { path: '/child/:id',
        component: Child,
        routes: [{
          path: '/child/:id/grand-child',
          component: GrandChild
        }
        ]
      }
    ]
  }
]
