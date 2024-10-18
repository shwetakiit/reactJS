import React  from "react";
const DestructuringPropsAndSateinFunction =props =>{
  const{name,email}=props; //Destructing properties  similarly we can destruct state
    console.log(props);

    return (
        <div>
         <h1>
            Hello {name} and {email}
         </h1>

        </div>
    )
}

export default DestructuringPropsAndSateinFunction;