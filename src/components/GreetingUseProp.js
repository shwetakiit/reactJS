import React, { Component } from "react";

const GreetingUseProp = (props) => {
  console.log(props);
 // props.name="Daina"   Props are immutable so we can't reassign
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default GreetingUseProp;
