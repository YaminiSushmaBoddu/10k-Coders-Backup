import { Component } from "react";

export class FirstClass4 extends Component{
    render(){
        return(
            <div>
                <h1>This is First Class4 </h1>
            </div>
        )
    }
}

export class SecondClass4 extends Component{
    render(){
        return(
            <div>
                <h1>This is Second Class4 </h1>
            </div>
        )
    }
}

export default class MainClass4 extends Component{
    render(){
        return(
            <div>
                <h1>This is Main Class4 </h1>
                <FirstClass4/>
            </div>
        )
    }
}