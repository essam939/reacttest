import React,{ Component } from 'react';
class Welcome  extends Component{
render(){
    return <h1>Welcome: {this.props.name}Name/ {this.props.heroName}</h1>
    //console.log("test"+this.props.name);
}
}
export default Welcome
