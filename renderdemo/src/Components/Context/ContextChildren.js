import React, {useContext} from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log('childA render')
  return (
    <div>
      childA
      <ChildB/>
    </div>
  )
}
export const MemoizedChildA = React.memo(ChildA)
export const ChildB = () => {
    console.log('ChildB render')
    return (
        <div>
            ChildB 
            <ChildC/>
        </div>
    )
}

export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('childC render')
    return (
        <div>
            ChildC is Count : {count}
        </div>
    )
}


