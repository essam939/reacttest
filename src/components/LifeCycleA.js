import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'mohamed'
    }
    console.log('LifeCycleA constructor');
  }
  static getDerivedStateFormProp(props,state){
    console.log('LifeCycleA getDerivedStateFormProp');
    return null
  }
  componentDidMount(){
    console.log('LifeCycleA componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponentUpdate');
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate');
    return null

  }
  componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate');

  }
  render() {
    console.log('LifeCycleA render');
    return (
    <div>
      <div>LifeCycleA</div>
      <button onClick={this.ChangeState}>Change state</button>
      <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
