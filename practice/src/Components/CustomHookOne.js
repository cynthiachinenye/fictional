import React , {useState}from 'react'
import useFirstCustomHok from './useFirstCustomHok'

function CustomHookOne() {
    const[count,setCount] = useState(0)

   useFirstCustomHok(count)
  return (
    <div>
      <button onClick ={()=> setCount(count + 1)}> Count - {count}</button>
    </div>
  )
}

export default CustomHookOne
