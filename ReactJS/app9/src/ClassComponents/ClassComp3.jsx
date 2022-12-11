import { Component } from "react";


export default class ClassComp3 extends Component{
    constructor() {
        super()
        this.state = {
            districts: {
                district1:"Karimnagar",
                district2:"Nalgonda",
                district3:"Medak",
                district4:"Nizamabad",
                district5:"Warangal"
            }
        }
    }
    render(){
        return(
            <div>
                <h2>Districts in Telengana</h2>
                <ul>
                    {Object.values(this.state.districts).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}