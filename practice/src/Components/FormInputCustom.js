import React from 'react'
import useFormCustom from './useFormCustom'

function FormInputCustom() {
    const [firstName,bindFirstName,resetFirstName] =useFormCustom('')
    const [lastName,bindLastName,resetLastName] =useFormCustom('')
    

    const submitHandler= e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>FirstName</label>
        <input {...bindFirstName} type="text" /><br/>
        <label>LastName</label>
        <input {...bindLastName} type="text" /><br/>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default FormInputCustom
