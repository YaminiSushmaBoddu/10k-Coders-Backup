import ClassComp1 from "./ClassComponents/ClassComp1";
import ClassComp2 from "./ClassComponents/ClassComp2";
import ClassComp3 from "./ClassComponents/ClassComp3";
import ClassComp4 from "./ClassComponents/ClassComp4";
import ClassComp5 from "./ClassComponents/ClassComp5";
import ClassComp6 from "./ClassComponents/ClassComp6";
import FunctionalComp1 from "./FunctionalComponents/FunctionalComp1";
import FunctionalComp2 from "./FunctionalComponents/FunctionalComp2";
import FunctionalComp3 from "./FunctionalComponents/FunctionalComp3";
import FunctionalComp4 from "./FunctionalComponents/FunctionalComp4";
import FunctionalComp5 from "./FunctionalComponents/FunctionalComp5";
import FunctionalComp6 from "./FunctionalComponents/FunctionalComp6";
import './style.css'

function App() {
  return (
     <div>
        <h1 id="heading">TFI Heros</h1>
        <ClassComp1/>
        <FunctionalComp1/>
        <hr/>
        <ClassComp2/>
        <FunctionalComp2/>
        <hr/>
        <ClassComp3/>
        <FunctionalComp3/>
        <hr/>
        <ClassComp4/>
        <FunctionalComp4/>
        <hr/>
        <ClassComp5/>
        <FunctionalComp5/>
        <hr/>
        <ClassComp6/>
        <FunctionalComp6/>
        <hr/>
     </div>
  );
}

export default App;
