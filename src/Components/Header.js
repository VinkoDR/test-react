import logo from '../logo.svg';
import troll from "../images/troll-face.png"
import React from "react";
import '../App.css';



export default function Header() {
    return (
    
      <header className="header">
        <div className='container'>
            <img 
                src={troll}
                className="header--image"
                alt="img"
            />
            <h2 className="header--title">Meme Generator</h2>
            <img src={logo} className="App-logo" alt="logo" />

        </div>
        </header>
    );
  }
  
  
