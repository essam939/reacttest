import React from 'react';
import './MyStyle.css';
function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
  return (
    <div>
      {/**لإستخدام 2 كلاس  */}
      <h1 className ={`${className} font-xl`} >StyleSheet</h1>
    </div>
  )
}

export default StyleSheet
