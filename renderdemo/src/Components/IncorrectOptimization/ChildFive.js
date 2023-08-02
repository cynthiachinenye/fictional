import React from 'react'

export const ChildFive = ({name}) => {
  const date = new Date()
    console.log('ChildFive Render')
  return (
    <div>
      Hello {name}. it is currently {date.getHours()}: {date.getMinutes()}: {''} {date.getSeconds()}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
