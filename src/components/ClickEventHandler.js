import React ,{ Component } from "react";

class ClickEventHandler extends React.Component {

    clickHandler(){
        console.log('Clicked button')
    }

    render(){

        return (
            <div>
            <button onClick={this.clickHandler}>clickMe</button>
            </div>

        )
    }

}

export default ClickEventHandler;