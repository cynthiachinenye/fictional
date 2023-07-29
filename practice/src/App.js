
import React from 'react';
import './App.css';
import ComponentC from './ComponentC';
// import DataFetching from './Components/DataFetching';
 export const userContext = React.createContext()
 export const channelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <DataFetching/> */}
      <userContext.Provider value={'Cynthia'}>
        <channelContext.Provider value= {'codevolution'}>
      <ComponentC/>
      </channelContext.Provider>
      </userContext.Provider>
      
    </div>
  );
}

export default App;