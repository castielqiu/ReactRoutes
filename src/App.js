import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Repos from "./Repos";
import User from "./User";

function App() {
  return (
    <Routes>
      <Route exact path="/about" element={<About />}></Route>
      <Route path="users/:username/repos" element={<Repos />}></Route>
      <Route path="users/:username" element={<User />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
