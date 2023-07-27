import React, {useState} from 'react'

function HookCounterTwo() {
    const initial=0
    const [count,setCount]=useState(initial)
   const incrementByFive = ()=>{
       for(let i=0; i<5;i++){
        setCount(prevCount => prevCount +1)
       }
    }
  return (
    <div>
      count : {count}
      <button onClick={() =>setCount(initial)}>reset</button>
      <button onClick={()=>      setCount(prevCount => prevCount +1)}>increment</button>
      <button onClick ={() =>     setCount(prevCount => prevCount -1)}>decrement</button>
      <button onClick = {incrementByFive}>increment5</button>
      </div>
  )
}

export default HookCounterTwo
