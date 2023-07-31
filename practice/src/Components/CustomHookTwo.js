import React , {useState}from 'react'
import useFirstCustomHok from './useFirstCustomHok'

function CustomHookTwo() {
    const[count,setCount] = useState(0)

    useFirstCustomHok(count)
  return (
    <div>
      <button onClick ={()=> setCount(count + 1)}> Count - {count}</button>
    </div>
  )
}

export default CustomHookTwo
