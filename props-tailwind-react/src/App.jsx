import "./App.css";
import Cards from "./components/cards";
function App() {
  let myObj1 = {
    name: "Rohit",
    age: "22",
  };
  let myObj2 = {
    name: "Raja",
    age: "29",
  };

  let newarr1 = [1, 2, 3];
  let newarr2 = [3, 2, 1];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Props & T.C
      </h1>
      <Cards
        username="R.G"
        objs={myObj1}
        arrs={newarr1}
        btntext="Click Me"
        imgsrc="https://images.pexels.com/photos/18721030/pexels-photo-18721030/free-photo-of-church-tower-behind-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
      <Cards
        username="R.K.G"
        objs={myObj2}
        arrs={newarr2}
        btntext="Visit Me"
        imgsrc="https://images.pexels.com/photos/13149220/pexels-photo-13149220.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      />
    </>
  );
}

export default App;
