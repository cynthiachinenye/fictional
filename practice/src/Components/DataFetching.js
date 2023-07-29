import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post,setPost] = useState([])
    useEffect (() => {
        axios.get= ('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => {
            console.log('res')
        })
        .catch(err => {
            console.log('err')
        })
    })
  return (
    <div>
      <ul>
        {
            post.map(post => (<li key={post.id}>{post.title}</li>))
        }
      </ul>
    </div>
  )
}

export default DataFetching
