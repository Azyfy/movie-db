import React from 'react';
import './App.css';
import { useEffect } from "react"
import { getTopRated } from "./services/moviedb"

function App() {
  
  useEffect( () => {
    console.log(getTopRated())
  }, [])

  return (
    <div className="App">
      <h1> Movie and TV shows DB </h1>
    </div>
  );
}

export default App;
