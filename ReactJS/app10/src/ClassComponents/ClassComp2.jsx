import { Component } from "react";


export default class ClassComp2 extends Component{
    constructor(){
        super()
        this.state={
             plants:{
                plant1:"Snake Plant",
                plant2:"Desert Rose",
                plant3:"Eucalyptus",
                plant4:"Iris"
             }
        }
    }
    render(){
        return(
            <div>
                <h2>Types of Plants</h2>
                <ul>
                    {Object.values(this.state.plants).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}