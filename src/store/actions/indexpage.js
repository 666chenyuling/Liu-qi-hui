import React, {useReducer} from 'react'
import {reducer} from '../reducers/indexReducer'
import {IndexContext } from '../store/index'

export const Indexpagestore=props=>{
 const [state, dispatch] = useReducer(reducer, initialState)
 return(
     <IndexContext.Provider value={{state, dispatch}} >
       {props.children}
     </IndexContext.Provider>
 )
}