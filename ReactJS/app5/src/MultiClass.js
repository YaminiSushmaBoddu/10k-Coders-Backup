import { Component } from "react";
import { FirstClass1 } from "./MultiClassComponents/ClassComp1";
import MainClass2 from "./MultiClassComponents/ClassComp2";
import { SecondClass3 } from "./MultiClassComponents/ClassComp3";
import MainClass4 from "./MultiClassComponents/ClassComp4";
import { FirstClass5, SecondClass5 } from "./MultiClassComponents/ClassComp5";
import MainClass6 from "./MultiClassComponents/ClassComp6";



export default class MultiClass extends Component{
    render(){
        return(
           <div>
               <FirstClass1/>
               <MainClass2/>
               <SecondClass3/>
               <MainClass4/>
               <FirstClass5/>
               <SecondClass5/>
               <MainClass6/>
           </div>

        )
    }
}