import { Component } from "react";


export default class ClassComp5 extends Component{
    constructor() {
        super()
        this.state = {
            districts: {
                district1:"Ariyalur",
                district2:"Chennai",
                district3:"Coimbatore",
                district4:"Erode",
                district5:"Madurai"
            }
        }
    }
    render(){
        return(
            <div>
                <h2>Districts in TamilNadu</h2>
                <ul>
                    {Object.values(this.state.districts).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}