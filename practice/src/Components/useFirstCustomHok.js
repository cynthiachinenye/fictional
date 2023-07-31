import {useEffect} from 'react'

//   first custom hook

function useFirstCustomHok(count) {
    useEffect(()=>{
        document.title = `count ${count}`
    },[count])
}

export default useFirstCustomHok
