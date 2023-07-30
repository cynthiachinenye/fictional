import React from 'react'
import { userContext, channelContext} from './App'
function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {
            user => 
            {
                return(
               <channelContext.Consumer>
                {
                    channel =>
                    {
                        return <div>user context value : {user} <br/>channel context value: {channel}</div>
                    }
                }
               </channelContext.Consumer> 
  )}
        }
      </userContext.Consumer>
    </div>
  )
}

export default ComponentF
