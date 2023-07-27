import './App.css';
import ClassCounterOne from './Component/ClassCounterOne';
import HookCounterFour from './Component/HookCounterFour';
import HookCounterThree from './HookCounterThree';
// import ClassCounter from './Component/ClassCounter';
// import HookCounter from './Component/HookCounter';
// import HookCounterTwo from './HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      <HookCounterThree/>
      <HookCounterFour/>
      <ClassCounterOne/>
    </div>
  );
}

export default App;
