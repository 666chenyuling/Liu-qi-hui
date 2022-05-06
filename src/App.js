import { BrowserRouter } from 'react-router-dom';
// import {renderRoutes} from 'react-router-config';
import { routes } from './routes/routerConfig'
import React,{useEffect, useContext} from 'react'
import renderRoutes from './routes/renderRoutes'
import {StoreContext} from '@/store/StoreContext'
import './app.css'

export default function App() {
  const {state, dispatch,actions} = useContext(StoreContext)
  useEffect(() => {
    actions.getAddress()
  }, [])
  return (
    <BrowserRouter>
      <div className="App" >
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  )
}
