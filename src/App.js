import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
class App extends Component {
  render() {
    return (
      <div className="App">
  <Greet name="Essam"  heroName="Batman">
  <p>this is children props</p>
  </Greet>
  <Greet name="hend" heroName="superman">
  <button>Action</button>
  </Greet>
  <Greet name="maro" heroName="wonder"/>
  
<Welcome  name="Essam"  heroName="Batman"/>
<Welcome  name="hend" heroName="superman"/>
<Welcome  name="maro" heroName="wonder"/>

      </div>
    );
  }
}

export default App;
