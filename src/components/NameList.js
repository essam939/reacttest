import React from 'react'

  function NameList() {
      const names=['bruce','clark','Dianna','bruce']
 const persons = [
     {
         id:1,
        name:'Ahmed',
        age:30,
        skill:'react'
    },
    {
        id:2,
       name:'essam',
       age:25,
       skill:'reactNative'
   },
   {
    id:3,
   name:'Ibrahim',
   age:24,
   skill:'ionic'
}
 ]
     const NameList =names.map((name,index) =><h2 key={index}>{index}{name}</h2>) 
  return (
    <div>
   {NameList}
    </div>
  )
  }








{/*
import React from 'react'

  function NameList() {
 const persons = [
     {
         id:1,
        name:'Ahmed',
        age:30,
        skill:'react'
    },
    {
        id:2,
       name:'essam',
       age:25,
       skill:'reactNative'
   },
   {
    id:3,
   name:'Ibrahim',
   age:24,
   skill:'ionic'
}
 ]
     const personList =persons.map(person =>(<h2>I am{person.name}.I am{person.age}
                                                .I am{person.skill}</h2>)) 
  return (
    <div>
   {personList}
    </div>
  )
  }*/}
export default NameList
/////////////////////////////////////////
{/*
import React from 'react'

  function NameList() {
     const names=['Mohamed','Essam','Asaas']
     const NameList =names.map(name =><h2>{name}</h2>) 
  return (
    <div>
   {NameList}
    </div>
  )
}
export default NameList
*/}