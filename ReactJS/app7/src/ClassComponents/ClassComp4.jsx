import { Component } from "react";


export default class ClassComp4 extends Component{
    constructor(){
        super()
        this.state={
            movies:{
                movie1:"Adipursh",
                movie2:"Salar",
                movie3:"Projectk",
                movie4:"Spirit"
            }
        }
    }
    render(){
        return(
            <div>
                <h2>Prabhas Upcoming Movies</h2>
                <ul>
                    {Object.values(this.state.movies).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}