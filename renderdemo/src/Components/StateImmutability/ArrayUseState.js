import React, {useState} from 'react'
    
 const initialState = ['cynthia', 'Agu']

const ArrayUseState = () => {
     const [person,setPerson] = useState(initialState)
     const handleClick = () => {
        // person.push('cyn')
        // person.push('kachi')
        // setPerson(person)

        const newPerson = [...person]
        newPerson.push('cynth')
        newPerson.push('kachi')
        setPerson(newPerson)
     }
     console.log('array render')
  return (
    <div>
      <button onClick={handleClick}> Click</button>

      {
        person.map(person =>(
            <div key={person}>{person}</div>
        ))
      }
    </div>
  )
}

export default ArrayUseState
