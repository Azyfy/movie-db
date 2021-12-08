import React from 'react';
import './App.css';
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { initializeTopRated } from "./store/reducers"
import Loader from "./components/Loader"
import Titles from "./components/Titles"

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

      <Titles titles={topRated.topMovies} />
      <Titles titles={topRated.topShows} />
      

    </div>
  );
}

export default App;
