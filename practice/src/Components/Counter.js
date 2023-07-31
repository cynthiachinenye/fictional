import React,{useState,useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne =() =>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo =() =>{
        setCounterTwo(counterTwo + 1)
    }
     // to check if function is even or odd using usememo hook
    const isEven = useMemo(() =>{
        // to knw how fast the ui update is
        let i = 0
        while(i <2000000000) i++
        return counterOne % 2 === 0

        
    },[counterOne])
   
    
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter One- {counterOne}</button>
        <span> {isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter
