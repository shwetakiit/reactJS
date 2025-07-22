import React, { Component } from "react";

class GreetingUsingPropsInClass extends Component {
  render() {
    return (
      <div>
        <h2>Class component for using prop</h2>
        <h1> Class Component !! Welcome {this.props.name}   </h1>
      </div>
    );
  }
}

export default GreetingUsingPropsInClass;
