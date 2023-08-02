import React from 'react'

export const ChildTwo = () => {
    console.log('Child Two ')
  return (
    <div>
      Child Component
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)
