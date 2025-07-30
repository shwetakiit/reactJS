import React,{Component} from "react";

class SetStateDemo extends Component{

    constructor(props){
        super(props);

        this.state={
            count:0
        }
    }

    increment(){
      //  this.state.count=;
        this.setState(
            {count:this.state.count+1},

           ()=>{
            console.log('Call back value',this.state.count);
           }

        );
        console.log(this.state.count);
    }

    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}> UpdateCount</button>
            </div>
        )
    }

}

export default SetStateDemo;