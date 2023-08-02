import React,{useState} from 'react'
// import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

const ParentThree = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Cynthia')
    console.log('Parent Render')
  return (
    <div>
      <button onClick={()=>setCount(c => c + 1)}> Count - {count}</button>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      {/* <MemoizedChildThree name={name}> 
       <strong> Hello </strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour/>

    </div>
  )
}

export default ParentThree
