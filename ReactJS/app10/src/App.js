import logo from './logo.svg';
import './App.css';
import ClassComp1 from './ClassComponents/ClassComp1';
import ClassComp2 from './ClassComponents/ClassComp2';
import ClassComp3 from './ClassComponents/ClassComp3';
import ClassComp4 from './ClassComponents/ClassComp4';
import ClassComp5 from './ClassComponents/ClassComp5';

function App() {
  return (
    <div className="App">
      <ClassComp1/>
      <hr/>
      <ClassComp2/>
      <hr/>
      <ClassComp3/>
      <hr/>
      <ClassComp4/>
      <hr/>
      <ClassComp5/>
    </div>
  );
}

export default App;
