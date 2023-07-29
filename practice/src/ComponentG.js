import React,{useContext} from 'react'
import { countContext } from './App'

function ComponentG() {
    const CountContext = useContext(countContext)
  return (
    <div>
      Component G
      <button onClick={()=> CountContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => CountContext.countDispatch('decrement')}>Decrement</button>
      <button onClick ={() => CountContext.countDispatch('reset')}>Reest</button>
    
    </div>
  )
}

export default ComponentG
