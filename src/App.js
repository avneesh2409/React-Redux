import React,{Fragment} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import operation from './actions';


function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <Fragment>
<h1>{counter}</h1>
        <button onClick={()=>dispatch(operation.increment())}>+</button>
        <button onClick={()=>dispatch(operation.decrement())}>-</button>
       
    </Fragment>
  );
}

export default App;
