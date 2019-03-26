import React,{ Component } from 'react';
class Welcome  extends Component{
render(){
    const{name,heroName}=this.props
    //const {state1,state2} = this.state
    return <h1>Welcome: {name}Name/ {heroName}</h1>
    //console.log("test"+this.props.name);
}
}
export default Welcome
