import React,{Component} from "react";
//Using state we have ability to change the message but using props we don't
class StateDemo extends Component{
    
    constructor(){
        super();
        this.state={
            message : 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({  //This method use to alter the state of class component
         message : ' Thank you for subscribing'
        })
    }
    render(){
        return (
            <div>
              <h1>{ this.state.message}   </h1>
             <button  onClick={()=>this.changeMessage()}>Subscrib</button>
           
            </div>
       
        )
    }
}

export default StateDemo;