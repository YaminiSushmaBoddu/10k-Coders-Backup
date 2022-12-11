import { Component } from "react";

export class FirstClass1 extends Component {
    render() {
        return (
            <div>
                <h1>This is First Class1</h1>  
           </div>
        )
    }
}

export class SecondClass1 extends Component {
    render() {
        return (
            <div>
                <h1>This is Second Class1</h1>
            </div>
        )
    }
}

export default class MainClass1 extends Component {
    render() {
        return (
            <div>
                <h1>This is Main Class1</h1>
            </div>
        )
    }
}