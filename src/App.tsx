import React from 'react';
import './App.css';
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { initializeTopRated } from "./store/reducers"
import Loader from "./components/Loader"

function App() {
  const topRated = useSelector( (state:any) => state.topRated)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(initializeTopRated())
  }, [dispatch])

  console.log(topRated)

  if(!topRated) {
    return (
      <Loader />
    )
  }

  return (
    <div className="App">
      <h1> Movie and TV shows DB </h1>
    </div>
  );
}

export default App;
