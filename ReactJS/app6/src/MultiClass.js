import { Component } from "react";
import MainClass1 from "./MultiClassComponents/ClassComp1";
import MainClass2 from "./MultiClassComponents/ClassComp2";
import { FirstClass3 } from "./MultiClassComponents/ClassComp3";
import MainClass4 from "./MultiClassComponents/ClassComp4";
import { SecondClass5 } from "./MultiClassComponents/ClassComp5";
import MainClass6 from "./MultiClassComponents/ClassComp6";


export default class MultiClass extends Component{
   render(){
    return(
        <div>
           <MainClass1/>
            <MainClass2/>
            <FirstClass3/>
            <MainClass4/>
            <SecondClass5/>
            <MainClass6/>

        </div>
    )
   }
}