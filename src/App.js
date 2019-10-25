import React,{Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import operation from './actions';
import LogIn from './components'

function App() {
  const counter = useSelector(state=>state.counter)
  const isLogged = useSelector(state=>state.isLogged)
  const dispatch = useDispatch()
  return (
    <Fragment>
<h1>{counter}</h1>
        <button onClick={()=>dispatch(operation.increment())}>+</button>
        <button onClick={()=>dispatch(operation.decrement())}>-</button>
       <LogIn check={isLogged}/>
       <button onClick={()=>dispatch(operation.isLogged())} >Log In</button>

    </Fragment>
  );
}

export default App;
