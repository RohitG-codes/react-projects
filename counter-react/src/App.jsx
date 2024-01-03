import { useState } from "react";

function App() {
  //let counter = 5;
  let [counter, setCounter] = useState(5);

  const inVAlue = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const deVAlue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };


  // const inVAlue = () => {
  //   if (counter < 10) {
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //   }
  // };

  // const deVAlue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //     setCounter(counter - 1);
  //     setCounter(counter - 1);
  //     setCounter(counter - 1);
  //   }
  // };


//the above example is not working for useState, cause it sends all the updates to the ui as a whole batch,here all the setCunter updates all the same counter variable
//that is why on a single click only the values are increasing and decreasing by 1 and not by 4
//to overcome this, we can use a callback function inside the setCounter mehod which takes the previous counter value at a time, given below
//here prevCounter gets the last updated state value everytime for the callback function  

  // const inVAlue = () => {
  //   if (counter < 50) {
  //     setCounter( prevCounter => prevCounter + 1 );
  //     setCounter( prevCounter => prevCounter + 1 );
  //     setCounter( prevCounter => prevCounter + 1 );
  //     setCounter( prevCounter => prevCounter + 1 );
  //   }
  // };

  // const deVAlue = () => {
  //   if (counter > 0) {
  //     setCounter( prevCounter => prevCounter - 1 );
  //     setCounter( prevCounter => prevCounter - 1 );
  //     setCounter( prevCounter => prevCounter - 1 );
  //     setCounter( prevCounter => prevCounter - 1 );
  //   }
  // };



  return (
    <>
      <h1>Counter Project in React</h1> <br />
      <h2>Current Counter Value : {counter}</h2>
      <h3>Current Counter Value : {counter}</h3>
      <h4>Current Counter Value : {counter}</h4>
      <h5>Current Counter Value : {counter}</h5>
      <h6>Current Counter Value : {counter}</h6> <br />
      <button onClick={inVAlue}>Increase Value</button> <br />
      <button onClick={deVAlue}>Decrease Value</button>
    </>
  );
}

export default App;
