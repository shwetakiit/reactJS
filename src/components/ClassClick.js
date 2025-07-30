import { Component } from "react";

class ClassClick extends Component {
  clickHanlder() {
    console.log("Button click even in Class component");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHanlder}> Click me</button>
      </div>
    );
  }
}

export default ClassClick;
