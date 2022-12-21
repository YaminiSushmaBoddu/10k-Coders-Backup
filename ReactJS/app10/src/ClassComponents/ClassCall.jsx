import { Component } from "react";


export default class ClassCall extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div style={{color:"black",background:"grey",padding:10}}>
                {this.props.msg}
            </div>
        )
    }
}
