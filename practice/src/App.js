
import React from 'react';
import './App.css';
// import DataFetchingOne from './Components/DataFetchingOne';
// import DataFetchingTwo from './Components/DataFetchingTwo';
// import ComponentC from './ComponentC';
// import DataFetching from './Components/DataFetching';
//  export const userContext = React.createContext()
//  export const channelContext = React.createContext()
// import CounterOnes from './Components/CounterOnes';
// import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
// import ComponentA from './Components/ComponentA';
// import ComponentB from './Components/ComponentB';
// import ComponentC from './ComponentC';

// export const countContext = React.creatContext()
// const initial = 0
// const reducer = (state, action) =>{
//     switch(action){
//         case 'increment':
//             return state + 1
//             case 'decrement':
//             return state -1
//             case 'reset':
//                 return initial
//                 default:
//                     return state
//     }
// }
function App() {
  // const [count, dispatch] = useReducer(reducer,initial)
  // return (
    // <countContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
       {/* <DataFetch/ingTwo /> */}
      {/* <DataFetching/> */}
      {/* <userContext.Provider value={'Cynthia'}>
        <channelContext.Provider value= {'codevolution'}>
      <ComponentC/>
      </channelContext.Provider>
      </userContext.Provider> */}
      {/* <CounterOnes/> */}
      {/* <CounterTwo/> */}
      <CounterThree/>
      {/* <div>Count - {count}</div>
      
      <ComponentC/> */}
      {/* <ComponentA/> */}
      {/* <ComponentB/> */}
      {/* <DataFetchingOne/> */}
     
    </div>
    // </countContext.Provider>
  // );
}

export default App;
