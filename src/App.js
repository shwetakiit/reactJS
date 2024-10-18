import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'  //We can write any import name but from should be exactly same which we want to import and need to change tag from <Greet/> to <MyGreet/>


import { Component } from 'react';

import Mygreet from './components/Greet'  // same name we should  while returning Greet component

import GreetWithArrowFunction from './components/GreetWithArrowFunction.js';
import Welcome from './components/Welcome';
import WithoutUsingJSX from './components/WithoutUsingJSX.js';
import Greet from './components/Greet';
import GreetingUseProp from './components/GreetingUseProp.js';
import ClassComponentWithProps from './components/ClassComponentWithProps.js';
import StateExample from './components/StateExample.js';
import Counter from './components/Counter.js'
import DestructuringPropsAndState from './components/DestructuringPropsAndStateInClass.js';
import DestructuringPropsAndSateinFunction from './components/DestructuringPropsAndSateinFunction.js';
import ClickEventHandler from './components/ClickEventHandler.js';


class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<Mygreet /> */}
        {/* <Welcome/> */}
        { /*<WithoutUsingJSX/> */}

        {<GreetWithArrowFunction />}
        <GreetingUseProp name="shk" heroName="SRK">

          <p>This is children prop</p>
        </GreetingUseProp>
        <GreetingUseProp name="rk" heroName="SID">
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
