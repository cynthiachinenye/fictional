import React from 'react'

export const ChildA = () => {
    console.log('childA render')
  return (
    <div>
      childA
      <ChildB/>
    </div>
  )
}
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
    console.log('childC render')
    return (
        <div>
            ChildC
        </div>
    )
}


