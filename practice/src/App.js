
import React from 'react';
import './App.css';
import FocusInput from './Components/FocusInput';
import ClassTimer from './Components/ClassTimer';
import FocusTimer from './Components/FocusTimer';
import CustomHookOne from './Components/CustomHookOne';
import CustomHookTwo from './Components/CustomHookTwo';
import CounterCustom from './Components/CounterCustom';
import CounterCustomTwo from './Components/CounterCustomTwo';
import FormInputCustom from './Components/FormInputCustom';
// import Counter from './Components/Counter';
// import DataFetchingOne from './Components/DataFetchingOne';
// import DataFetchingTwo from './Components/DataFetchingTwo';
// import ComponentC from './ComponentC';
// import DataFetching from './Components/DataFetching';
//  export const userContext = React.createContext()
//  export const channelContext = React.createContext()
// import CounterOnes from './Components/CounterOnes';
// import CounterTwo from './Components/CounterTwo';
// import CounterThree from './Components/CounterThree';
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
  return (
    // <countContext.Provider value={{countState:count, countDispatch:dispatch}}>
    <div className="App">
       {/* <DataFetchingTwo /> */}
      {/* <DataFetching/> */}
      {/* <userContext.Provider value={'Cynthia'}>
        <channelContext.Provider value= {'codevolution'}>
      <ComponentC/>
      </channelContext.Provider>
      </userContext.Provider> */}
      {/* <CounterOnes/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <div>Count - {count}</div>
      
      <ComponentC/> */}
      {/* <ComponentA/> */}
      {/* <ComponentB/> */}
      {/* <DataFetchingOne/> */}
     {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ClassTimer/>
      <FocusTimer/>
      <CustomHookOne/>
      <CustomHookTwo/> */}
      <CounterCustom/>
      <CounterCustomTwo/>
      <FormInputCustom/>
    </div>
    // </countContext.Provider>
    
   );
}

export default App;
