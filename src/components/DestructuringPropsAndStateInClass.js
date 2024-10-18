
import React,{Component} from "react";
class DestructuringPropsAndState extends React.Component{

    render(){
        const{name,email}=this.props

        return (
            <h1>
                Deatils {name} and {email}
            </h1>
        )
    }
}

export default DestructuringPropsAndState;