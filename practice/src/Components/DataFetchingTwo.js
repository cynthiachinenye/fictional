import React, {useReducer,useEffect} from 'react'
import axios from 'axios'

  const initial = 
  {
    load:true,
    error:'',
    post:{}
  }
  const reducer =(state,action) =>
  {

    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                load:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return{
                load:false,
                post:{},
                error:'something is wrong!'
            }
        default:
            return state
    }
  }
function DataFetchingTwo() {
    const [state,dispatch] = useReducer(reducer,initial)
    useEffect(() => {
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(res =>{
          console.log('FETCH_SUCCESS')
           dispatch({type: 'FETCH_SUCCESS', payload:res.data})
        })
        .catch(error =>{
           dispatch({type:'FETCH_ERROR'})
        })
    })
  return (
    <div>
      
      {state.load? 'loading':state.post.title}
      {state.error? state.error:null}
    </div>
  )
}

export default DataFetchingTwo
