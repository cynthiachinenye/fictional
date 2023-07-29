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
function CounterThree() {
   const [count,setCount] = useReducer(reducer,initial)
   const [count2,setCount2] = useReducer(reducer,initial)
  return (
    <div>
      <div>Count - {count} </div>
      <button onClick={()=> setCount('increment')}>Increment</button>
      <button onClick={() => setCount('decrement')}>Decrement</button>
      <button onClick ={() => setCount('reset')}>Reest</button>
   
      <div>
      <div>Count2 - {count2} </div>
      <button onClick={()=> setCount2('increment')}>Increment</button>
      <button onClick={() => setCount2('decrement')}>Decrement</button>
      <button onClick ={() => setCount2('reset')}>Reest</button>
    </div>
    </div>
  )
}

export default CounterThree
