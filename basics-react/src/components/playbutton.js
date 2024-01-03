import "./playbutton.css";
import { useState } from "react";


function PlayButton({ message, children, onPlay, onPause }) {
  const [status,setStaus]= useState(true);

  function handleCLick(e) {
    e.stopPropagation();
    if (status) {
      onPause();
    } else {
      onPlay();
    }
    //status =!status; //if true then false or if false then true
    setStaus(!status);
  }
  return (
    <>
      <button onClick={handleCLick}>{children} : {status ? '>>' : '||'}</button>
    </>
  );
}
export default PlayButton;
