import React from 'react';
import './App.css';
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { initializeTopRated, initializeGenres } from "./store/reducers"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Loader from "./components/Loader"
import Titles from "./components/Titles"
import NoMatch from "./components/NoMatch"
import Header from "./components/Header"
import NavMenu from "./components/NavMenu"
import SingleTitle from './components/SingleTitle';


function App() {
  const topRated = useSelector( (state:any) => state.topRated)
  const genres = useSelector( (state:any) => state.genres)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(initializeTopRated())
    dispatch(initializeGenres())
  }, [dispatch])

  console.log( "TR", topRated)
  console.log( "G", genres)

  if(!topRated || !genres) {
    return (
      <Loader />
    )
  }

  return (
    <div className="App">
      
      <Header />

      <Router>

        <NavMenu />

        <Routes>
          <Route  path="/" element={ <Navigate to="/top-shows" /> } />
          <Route  path="/top-shows" element={ <Titles titles={topRated.topShows} genres={genres.movieGenres} currentPath="/top-shows" /> } />
          <Route  path="/top-movies" element={ <Titles titles={topRated.topMovies} genres={genres.showGenres} currentPath="/top-movies" /> } />
          <Route  path="/top-shows/:id" element={ <SingleTitle  type={"tv"} /> } />
          <Route  path="/top-movies/:id" element={ <SingleTitle type={"movie"} /> } />

          <Route path="*" element={ <NoMatch /> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
