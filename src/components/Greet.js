import React,{Component} from 'react';

const Greet =(prop)=>{
    console.log(prop);
  return(
  <div>
  <h1>hello {prop.name} {prop.heroName} </h1>
  {prop.children}
  </div>
  )
}
export default Greet