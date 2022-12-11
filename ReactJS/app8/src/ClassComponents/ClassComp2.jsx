import { Component } from "react";



export default class ClassComp2 extends Component{
    constructor(){
        super()
        this.state={
            heros:["Surya","Karthi","Dhanush","Vijay","RajiniKanth","Kamal Haasan","Vikram"]
        }
    }
    render(){
        return(
            <div>
                <h2>Tamil Heros</h2>
                <ul>
                    {this.state.heros.map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}