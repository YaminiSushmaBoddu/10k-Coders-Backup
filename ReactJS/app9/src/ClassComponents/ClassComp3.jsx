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
            },
            show:false
        };
       this.showDistricts =this.showDistricts.bind(this)
    }
    showDistricts(){
        console.log("Called")
              this.setState({show:true})
    }
    render(){
        return(
            <div >
                <h2>Districts in Telengana</h2>
                <button onClick={this.showDistricts}>Show Districts</button>
                {this.state.show &&
                  <ul>
                    {Object.values(this.state.districts).map((val,i)=>{
                        return <li key={i}>{val}</li>
                    })}
                  </ul> }
            </div>
        )
    }
}