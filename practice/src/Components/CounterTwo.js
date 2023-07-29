import React,{useReducer} from 'react'
const initial = {
    firstCounter:0
    
}
const reduce =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter + action.value}
            case 'decrement':
                return {firstCounter:state.firstCounter - action.value}
                case 'reset':
                    return initial
                    default:return state
    }
}
function CounterTwo() {
   const [count,dispatch] = useReducer(reduce,initial)
  return (
    <div>
      <div>Count - {count.firstCounter} </div>
      <button onClick={()=> dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=> dispatch({type:'increment',value:5})}>Increment5</button>
      <button onClick={() => dispatch({type:'decrement',value:5})}>Decrement5</button>
      <button onClick ={() => dispatch({type:'reset'})}>Reest</button>
   
    </div>
  )
}

export default CounterTwo
