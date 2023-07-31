import React ,{useState}from 'react'
import useCounterCustom from './useCounterCustom'

function CounterCustomTwo() {
   const[count,increment,decrement,reset] = useCounterCustom(0,1)
  return (
    <div>
      <h2> Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterCustomTwo
