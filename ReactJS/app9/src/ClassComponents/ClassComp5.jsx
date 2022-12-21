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
            },
            show:false
        }
    }
    showDistricts=()=>{
        let newDistricts={...this.state.districts,district1:"Dharmapuri"}
        this.setState({show:true,districts:newDistricts})
    }
    render(){
        return(
            <div>
                <h2>Districts in TamilNadu</h2>
                <button onClick={this.showDistricts}>Show Districts</button>
                {this.state.show && <ul>
                    {Object.values(this.state.districts).map((val,i)=>{
                        return <li key={i}>{val}</li>
                    })}
                </ul>}
            </div>
        )
    }
}