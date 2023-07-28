import React,{useState, useEffect} from 'react'

export default function HookMouse() {
    const [x, setX] = useState(0)
    const [y,setY] =useState(0)

const mousePosition = e =>{
       console.log('mouse event')
       setX(e.clientX)
       setY(e.clientY)
}
    useEffect(() => 
    {
        console.log('useEffect called')
        window.addEventListener('mousemove', mousePosition)
    
      return ()=>{
        console.log('component unounting code')
        window.removeEventListener('mouse',mousePosition)
      }
    },[])
  return (
    <div>
      Hook X - {x} , Y -{y}
    </div>
  )
}
