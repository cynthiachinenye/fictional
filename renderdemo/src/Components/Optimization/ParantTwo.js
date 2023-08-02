import React,{useState} from 'react'
import {MemoizedChildTwo} from './ChildTwo'
// using memo

const ParantTwo = () => {
    const [count,setCount] = useState(0)
    const [name,setName] =useState('Cynthia')

    console.log('ParentTwo render')
  return (
    <div>
      <button onClick= {()=> setCount(c=>c + 1)}> Count - {count}</button>
      
       <button onClick={() => setName('codevolution')}>Change name</button>

      <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParantTwo
