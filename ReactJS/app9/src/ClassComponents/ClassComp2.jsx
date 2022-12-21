import { Component } from "react";


export default class ClassComp2 extends Component {
   constructor () {
        super()
        this.state = {
            districts: ["West Godavari", "East Godavari", "Kadapa", "Karnool", "Guntur", "Chittoor"],
            show:false
        }
        
    }
    showDistricts=()=>{
          this.setState({show:true})
    }
    
    render() {
        return (
            <div>
            <h2>Districts in Andhra Pradesh</h2>
               <button onClick={this.showDistricts}>Show Districts</button>
               {this.state.show && <ul>
                  {this.state.districts.map((val,i)=>{
                      return <li key={i}>{val}</li>
                  })}
                </ul>}
            </div>
        )
    }
}