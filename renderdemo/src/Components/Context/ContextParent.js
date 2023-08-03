import React, {useState} from 'react'
import { ChildA } from './ContextChildren'

export const  CountContext = React.createContext()
const CountProvider =CountContext.Provider

const ContextParent = () => {
    const [ count, setCount] = useState(0)
    console.log('Parent context')
  return (
    <div>
      <button onClick={() => setCount( c => c+ 1)}>Count - {count}</button>
       
       <CountProvider  value={count}>
       <ChildA/>
       </CountProvider>
    
    </div>
  )
}

export default ContextParent
