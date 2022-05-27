import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { NewTask } from "./components/NewTask";
import { Edit } from "./components/Edit";
import { Summary } from "./components/Summary";
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./components/Navbar"
function App() {
  return (
    <div className="App">
      
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/new" element={<NewTask/>}></Route>
        <Route path="/edit" element={<Edit/>}></Route>
        <Route path="/summary" element={<Summary/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
