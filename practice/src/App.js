
import React,{useReducer} from 'react';
import './App.css';
// import ComponentC from './ComponentC';
// import DataFetching from './Components/DataFetching';
//  export const userContext = React.createContext()
//  export const channelContext = React.createContext()
// import CounterOnes from './Components/CounterOnes';
// import CounterTwo from './Components/CounterTwo';
// import CounterThree from './Components/CounterThree';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const countContext = React.creatContext()
const initial = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
            case 'decrement':
            return state -1
            case 'reset':
                return initial
                default:
                    return state
    }
}
function App() {
  const [count, dispatch] = useReducer(reducer,initial)
  return (
    <countContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
      {/* <DataFetching/> */}
      {/* <userContext.Provider value={'Cynthia'}>
        <channelContext.Provider value= {'codevolution'}>
      <ComponentC/>
      </channelContext.Provider>
      </userContext.Provider> */}
      {/* <CounterOnes/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      <div>Count - {count}</div>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </countContext.Provider>
  );
}

export default App;
