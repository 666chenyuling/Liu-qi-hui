import { BrowserRouter } from 'react-router-dom';
// import {renderRoutes} from 'react-router-config';
import {routes} from './routes/routerConfig'
import React from 'react'
import renderRoutes from './routes/renderRoutes'
export default function App() {
  return (
    <>
      <BrowserRouter>
     {renderRoutes(routes)}
      </BrowserRouter>
     </> 
    )
}
