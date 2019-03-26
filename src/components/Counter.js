import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increment()
    {
        this.setState({
    
          count :this.state.count+1
        },
        ()=>{console.log('Callback valu',this.state.count)
    })
        console.log(this.state.count);
    }
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
  render() {
    return (
     
      <div>
 <div>count-{this.state.count}</div>
 <button onClick={()=>this.Increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
