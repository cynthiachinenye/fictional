import React,{useReducer} from 'react'
const initial = {
    firstCounter:0,
    secondCounter:10

}
const reduce =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter + action.value}
            case 'decrement':
                return {...state, firstCounter:state.firstCounter - action.value}
                case 'increment2':
                    return {...state, secondCounter:state.secondCounter + action.value}
                    case 'decrement2':
                        return {...state,secondCounter:state.secondCounter - action.value}
                       
                case 'reset':
                    return initial
                    default:return state
    }
}
function CounterTwo() {
   const [count,dispatch] = useReducer(reduce,initial)
  return (
    <div>
      <div>first-Counter  - {count.firstCounter} </div>
      <div>second-Counter  - {count.secondCounter}</div>
      <button onClick={()=> dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={() => dispatch({type:'decrement',value:1})}>Decrement</button>
      <button onClick={()=> dispatch({type:'increment',value:5})}>Increment5</button>
      <button onClick={() => dispatch({type:'decrement',value:5})}>Decrement5</button>
      <div>
        
        
        <button onClick={()=> dispatch({type:'increment2',value:10})}>Increment10</button>
      <button onClick={() => dispatch({type:'decrement2',value:10})}>Decrement10</button>
      
      </div>
      <button onClick ={() => dispatch({type:'reset'})}>Reest</button>
   
    </div>
  )
}

export default CounterTwo
