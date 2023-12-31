import React,{useState,useEffect,useRef} from 'react'

function FocusTimer() {
    const [timer,setTimer]=useState(0)
    const intervalRef =useRef()
    useEffect(()=>{
        intervalRef.current= setInterval(()=>{
            setTimer(prevTimer => prevTimer +1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };

    },[])
  return (
    <div>
        
       Clear Timer - {timer}
       <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default FocusTimer
