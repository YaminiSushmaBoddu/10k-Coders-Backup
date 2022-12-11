import { Component } from "react";



export default class ClassComp5 extends Component{
    constructor(){
        super()
      this.state={
        Heros:{
            hero1:"Chris Hemsworth",
            hero2:"Leonardo Dicaprio",
            hero3:"Chris Pratt",
            hero4:"Tom Holland"
        }

      }
    }
    render(){
        return(
            <div>
                <h2>Hollywood Heros</h2>
                <ul>
                    {Object.values(this.state.Heros).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}