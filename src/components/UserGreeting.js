import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLogIn:false
       }
     }
     
  render() {
    return  this.state.isLogIn && <div>Welcome Vishwas</div>
       {/*
      return(
this.state.isLogIn?
<div>Welcome Vishwas</div>:<div>Welcome guest</div>
      )
     
      ////////////////////////////////////
      let message
      if (this.state.isLogIn) {
          message=  <div>Welcome Vishwas</div>
      }
      else{
          message=<div>Welcome guest</div>
      }
      return <div>{message}</div>
      if(this.state.isLogIn){
          return(
            <div>Welcome Vishwas</div>
          )
      }
      else{
       return( <div>Welcome guest</div>)
      }
      ////////////////////////////////////////
   return (
        <div>
      <div>Welcome Vishwas</div>
      <div>Welcome guest</div>
        </div>
    )*/}
  }
}

export default UserGreeting
