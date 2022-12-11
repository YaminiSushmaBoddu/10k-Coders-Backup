import { Component } from "react";


export default class ClassComp5 extends Component {
    constructor() {
        super()
        this.state = {
            heroines: ["Trisha", "Anushka", "Kajal", "Shraddra Kapoor ", "Pooja Hegde"]
        }
    }
    render() {
        return (
            <div>
                <h2>Heroines  worked with Prabhas</h2>
                <ul>
                    {this.state.heroines.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
           </div>
        )
    }
}