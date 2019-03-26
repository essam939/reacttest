import React,{Component} from 'react';

const Greet =({name,heroName})=>{
  return(
  <div>
  <h1>hello {name} {heroName} </h1>
   {/* {prop.children}  */}
  </div>
  )
}
export default Greet
