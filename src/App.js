
import './App.css';
import React from "react"
import Header from "./Components/Header"
import Meme from './Components/Meme';
import Form from "./Components/Form"


function App() {
  return (
    <div className="App">
        <Header />
        <Meme />
        <Form />
    </div>
  );
}

export default App;
