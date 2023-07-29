import React,{useReducer} from 'react'
const initial = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
            case 'decrement':
            return state -1
            case 'reset':
                return initial
                default:
                    return state
    }
}
function CounterOnes() {
   const [count,setCount] = useReducer(reducer,initial)
  return (
    <div>
      <div>Count - {count} </div>
      <button onClick={()=> setCount('increment')}>Increment</button>
      <button onClick={() => setCount('decrement')}>Decrement</button>
      <button onClick ={() => setCount('reset')}>Reest</button>
    </div>
  )
}

export default CounterOnes
