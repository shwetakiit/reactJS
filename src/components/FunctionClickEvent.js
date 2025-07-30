import React from "react";
import ClickEventHandler from "./ClickEventHandler";

    /*
         Event handler is a function and It is not a function call so don't use  clickEventHandler()  method this work like funtion call 
          Even handler is a function and It is not a function call   

    */
function FunctionClick(){
    function clickEventHandler(){
        console.log("Button clicked");
    }

    return (
     <div>
        {/* <button onClick={clickEventHandler()}>Click</button>  */}
    <button onClick={clickEventHandler}>Click</button> 
     </div>

    )
}

export default FunctionClick;
