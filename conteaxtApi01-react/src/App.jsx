import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Context Api in React</h1>
      <br></br>
      <br></br>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
