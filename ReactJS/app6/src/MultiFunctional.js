import { FirstClass1 } from "./MultiClassComponents/ClassComp1";
import MainClass2 from "./MultiClassComponents/ClassComp2";
import { SecondClass3 } from "./MultiClassComponents/ClassComp3";
import MainClass4 from "./MultiClassComponents/ClassComp4";
import MainClass5 from "./MultiClassComponents/ClassComp5";
import { FirstClass6, SecondClass6 } from "./MultiClassComponents/ClassComp6";

export default function MultiFunctional(){
    return(
        <div>
          <FirstClass1/>
            <MainClass2/>
            <SecondClass3/>
            <MainClass4/>
            <MainClass5/>
            <SecondClass6/>
            <FirstClass6/>
        </div>
    )
}