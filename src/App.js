import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'  //We can write any import name but from should be exactly same which we want to import and need to change tag from <Greet/> to <MyGreet/>


import { Component } from 'react';

import Mygreet from './components/Greet'  // same name we should  while returning Greet component

import GreetWithArrowFunction from './components/GreetWithArrowFunction';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Mygreet />
        <Welcome/>
      </div>
    )
  }
}


export default App;
