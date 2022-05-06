import React from 'react';
import "./CounterWatch.css";
import ControlButtons from "../Components/ControlButtons";
import Timer from '../Timer/Timer';
import { useState, useEffect } from 'react';


function CounterWatch() {

const [counter, setCounter]=useState(0);
// const [ time,setTime]=useState();
// const [stop, setStop] = useState(false);
  const [isPaused, setIsPaused]=useState(false);
  
//   useEffect(() => {
//     setTimeout(()=>setCount(count+1),1000);
   
// });

const handleReset = () => {
  setCounter(0);
  setIsPaused(false);
}
const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  useEffect(()=>{
  let interval = null;
  if (isPaused === false) {
    interval = setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  } 
  else {
    clearTimeout(interval);
  }
  return () => clearTimeout(interval); //it's for component  did unmount
});
  
  return (

    <div className="stop-watch">
    <p className='color'>Counter</p>
    <Timer  count={counter}  />
    <ControlButtons  handleReset={handleReset} handlePauseResume={handlePauseResume} isPaused={isPaused}/>
    </div>
  );
  }

export default CounterWatch;