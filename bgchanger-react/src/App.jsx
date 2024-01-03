import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-3">
        <div className="flex flex-wrap gap-3 shadow-lg justify-center p-3 rounded-xl bg-black text-white">
        <button onClick={()=>setColor("red")} className="text-white p-3" style={{backgroundColor:"red"}}>red</button>
        <button  onClick={()=>setColor("green")} className="text-white p-3" style={{backgroundColor:"green"}}>green</button>
        <button  onClick={()=>setColor("yellow")} className="text-white p-3" style={{backgroundColor:"yellow",color:"black"}}>yellow</button>
        <button  onClick={()=>setColor("blue")} className="text-white p-3" style={{backgroundColor:"blue"}}>blue</button>
        <button  onClick={()=>setColor("grey")} className="text-white p-3" style={{backgroundColor:"grey"}}>grey</button>
        <button  onClick={()=>setColor("white")} className="text-white p-3" style={{backgroundColor:"white",color:"black"}}>white</button>
        <button  onClick={()=>setColor("violet")} className="text-white p-3" style={{backgroundColor:"violet"}}>violet</button>
        <button  onClick={()=>setColor("pink")} className="text-white p-3" style={{backgroundColor:"pink",color:"black"}}>pink</button>
        <button  onClick={()=>setColor("aqua")} className="text-white p-3" style={{backgroundColor:"aqua",color:"black"}}>aqua</button>
        <button  onClick={()=>setColor("magenta")} className="text-white p-3" style={{backgroundColor:"magenta"}}>magenta</button>
        </div>
      </div>
    </div>
  );
}

export default App;
