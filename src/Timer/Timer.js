import React from 'react'
import "./Timer.css";
function Timer({count}) {
  return (
    <div className="timer">
    {/* <p>Timer</p>
    {count} */}
    <div className="btn btn-two" >
    {count} 
      </div>
    </div>
  )
}

export default Timer;