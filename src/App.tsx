import React from 'react';
import './App.css';
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { initializeTopRated } from "./store/reducers"
import Loader from "./components/Loader"
import Titles from "./components/Titles"
import NoMatch from "./components/NoMatch"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

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

      <Router>
        <Routes>
          <Route  path="/" element={ <Navigate to="/top-shows" /> } />
          <Route  path="/top-shows" element={ <Titles titles={topRated.topShows} /> } />
          <Route  path="/top-movies" element={ <Titles titles={topRated.topMovies} /> } />

          <Route path="*" element={ <NoMatch /> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
