import React, { createContext, useReducer, useEffect,useCallback } from "react";
import  rootReducer ,{ initialstate } from "./reducers";
import { useAction } from "./actions";

const StoreContext = createContext(initialstate);

function StoreProvider({ children }) {
  // 设置 reducer，得到 `dispatch` 方法以及 `state`
  const [state, dispatch] = useReducer(rootReducer, initialstate);
   //支持异步操作
//    const dispatch=useCallback(asyncer(dispatch,state),[])
  // 生成 `actions` 对象
  const actions = useAction(state, dispatch);
  // 打印出新的 `state`
  useEffect(() => {
    console.log({ newState: state });
  }, [state]);

  // 渲染 state, dispatch 以及 actions
  return (
    <StoreContext.Provider value={{ state, dispatch,actions}}>
      {children}
    </StoreContext.Provider>
  )
}
// const  asyncer=(dispatch,state)=> action=>typeof action ==='function'?action(dispatch,state):dispatch(action)

export { StoreContext, StoreProvider };