import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParenComponent from './components/ParenComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appSyles.module.css'
import Form from './components/Form';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.succes}>sucess</h1>
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
<StyleSheet primary={true}></StyleSheet>
<Inline />
<Message></Message>
<Counter></Counter>
<FunctionClick />
<FunctionClick></FunctionClick>
<ClassClick />
<EventBind></EventBind>
<ParenComponent />
<UserGreeting></UserGreeting>
<NameList></NameList>
<Form></Form>
      </div>
    );
  }
}

export default App;
