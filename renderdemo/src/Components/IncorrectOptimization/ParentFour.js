import React,{useState} from 'react'
import { MemoizedChildFive } from './ChildFive'

const ParentFour = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Cynthia')
    console.log('Parent Render')
  return (
    <div>
      <button onClick={()=>setCount(c => c + 1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      
      <MemoizedChildFive/>

    </div>
  )
}

export default ParentFour
