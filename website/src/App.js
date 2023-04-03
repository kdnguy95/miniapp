import React, { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Movies from './Movies.js'

export const MoviesContext = createContext();
export const SearchContext = createContext();

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(response => response.json())
      .then(data => {
        console.log('data:\n', data)
        setMovies(data)
      })
  }, [])

  console.log('movies5:\n', movies)

  return (
    <>
      <MoviesContext.Provider value={{ movies, setMovies, search, setSearch }}>
        <Container>
          <Movies />
        </Container>
      </MoviesContext.Provider>
    </>
  )
}

export default App;
