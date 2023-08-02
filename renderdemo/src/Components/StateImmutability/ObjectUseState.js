import React,{useState} from 'react'
    
const initialState={
    fname:'cynthia',
    lname:'Agu'
}
const ObjectUseState = () => {
    const [person,setPerson] = useState(initialState)

    const changeName = () => {
        // person.fname = 'cynthia'
        // person.lname = 'kachi-ozoudeh'
        // setPerson(person)
        const newPerson ={...person}
            newPerson.fname ='Cynthia'
            newPerson.lname = 'kachi-ozoudeh'
            setPerson(newPerson)
        
    }

    console.log('objectUseState Render')


  return (
    <div>
      <button onClick ={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
