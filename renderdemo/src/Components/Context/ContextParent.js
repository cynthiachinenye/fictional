import React, {useState} from 'react'
import { ChildA } from './ContextChildren'


const ContextParent = () => {
    const [ count, setCount] = useState(0)
    console.log('Parent context')
  return (
    <div>
      <button onClick={() => setCount( c => c+ 1)}>Count - {count}</button>
  
     <ChildA/>
    </div>
  )
}

export default ContextParent
