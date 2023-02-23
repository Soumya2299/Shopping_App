import React from 'react'
import Login from './Login';

// Function to apply protected route on CART Component
function Guard(props) {
    const {Cmp}= props;
    let stat = JSON.parse(localStorage.getItem("stat"));

  return (
    <div>
      {
        stat === true?
        <Cmp/>
        : <Login/>
      }
    </div>
  )
}

export default Guard
