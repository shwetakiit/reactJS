import React ,{ Component } from "react";

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count:0
           
        }
    }
    
    increment(){
       // this.state.count=this.state.count+1;//In this way we can see value has increment in console but It doesn't render the changed value on UI 

       this.setState ({
        count:this.state.count + 1 
       },
       ()=>{
        console.log('Call back value',this.state.count)
         })

     
       
         
    
    }
    render(){
        return (
            <div> 
              
              <div>Count -{this.state.count}</div>  
              <button onClick={()=>this.increment()}>Increment</button>
                 </div>
        )
    }
}

export default Counter