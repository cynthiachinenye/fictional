
import './App.css';
import ContextParent from './Components/Context/ContextParent';
// import ParentFour from './Components/IncorrectOptimization/ParentFour';
import {ChildA} from './Components/Context/ContextChildren'


// import UseState from './Components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
     <ContextParent>
       <ChildA/>
     </ContextParent>
      </div>
  );
}

export default App;
