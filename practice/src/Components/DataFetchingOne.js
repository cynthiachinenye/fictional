import React, {useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [load,setLoad] = useState(true)
    const [error,setError] = useState('')
    const [post, setPost] = useState[{}]

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            setLoad(false)
            setPost(res.data)
            setError('')
        })
        .catch(error =>{
            setLoad(false)
            setPost({})
            setError('something went wrong!')
        })
    })
    
  return (
    <div>
       
      {load? 'loading':post.title}
      {error?'error':null}
    </div>
  )
}

export default DataFetchingOne
