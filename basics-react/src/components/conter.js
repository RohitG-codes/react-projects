import "./counter.css";
import { useState } from "react";
function Counter() {
  const [num, setNum] = useState(0);
  function handleCLick(e) {
    e.stopPropagation();
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    console.log(num);
  }
  return (
    <>
    <div style={{textAlign:'center'}}>
      <h1>{num}</h1>
      <button onClick={handleCLick}>Click To Increament</button>
      </div>
    </>
  );
}
export default Counter;
