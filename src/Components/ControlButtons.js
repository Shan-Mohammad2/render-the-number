import React from 'react'
import "./ControlButtons.css";

function ControlButtons({handleReset, handlePauseResume,isPaused}) {

  
  return (
    <div>
    {/* <p>ControlButtons</p> */}
    <div className="Control-Buttons">
    <div className="btn-grp">
      <div className="btn btn-two" 
           onClick={handleReset}>
        Reset
      </div>
      <div className="btn btn-one" 
           onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </div>
    </div>
      {/* <div>{props.active ? ActiveButtons : StartButton}</div> */}
    </div>
    </div>
  )
}

export default ControlButtons;