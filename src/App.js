import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'  //We can write any import name but from should be exactly same which we want to import and need to change tag from <Greet/> to <MyGreet/>


import { Component } from 'react';

import Mygreet from './components/Greet'  // same name we should  while returning Greet component

import GreetWithArrowFunction from './components/GreetWithArrowFunction.js';
import Welcome from './components/Welcome';
import WithoutUsingJSX from './components/WithoutUsingJSX.js';
import {Greet } from './components/Greet';
import GreetingUseProp from './components/GreetingUseProp.js';
import ClassComponentWithProps from './components/ClassComponentWithProps.js';
import StateExample from './components/StateExample.js';
import Counter from './components/Counter.js'
import DestructuringPropsAndState from './components/DestructuringPropsAndStateInClass.js';
import DestructuringPropsAndSateinFunction from './components/DestructuringPropsAndSateinFunction.js';
import ClickEventHandler from './components/ClickEventHandler.js';
import ClassComponenet from './components/ClassComponent.js';
import functWithJX from   './components/FunctionWithJSX.js';
import GreetingUsingPropsInclass from './components/GreetingUsingPropsInClass.js'
import StateDemo from './components/StateDemo.js';
import FunctionClick from './components/FunctionClickEvent.js';
import ClassClick from './components/ClassClick.js';


class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<Mygreet /> */}
        {/* <Welcome/> */}
        { /*<WithoutUsingJSX/> */}
        <ClassClick/>
        <FunctionClick/>
        <StateDemo/>
        <WithoutUsingJSX/>
        <functWithJX/>
       <ClassComponenet/>
        <Greet/>
        <GreetingUsingPropsInclass name="Shweta" />
      

        {<GreetWithArrowFunction />}
     <GreetingUseProp name="Maggi"  heroName="Batman">
      <p>This is children pros</p>
      <button>Action</button>
     </GreetingUseProp>
        <ClassComponentWithProps name="Lisa" heroName="RK" />
        <ClassComponentWithProps name="lisbon" heroName="Duke" />
        <StateExample />
        <Counter />
        <DestructuringPropsAndState name="abc" email="abc@gmail.com" />
        <DestructuringPropsAndSateinFunction name="abc" email="xyz@gmail.com"/>
        <ClickEventHandler/>
      </div>
    )
  }
}


export default App;
