import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext } from './App';
import { Container, Row, Col } from 'react-bootstrap';

function Movies() {
  const { movies, setMovies, search, setSearch } = useContext(MoviesContext)
  const [displayedMovies, setDisplayedMovies] = useState(movies);
  const [movieTitle, setMovieTitle] = useState("");

  useEffect(() => {
    setDisplayedMovies(movies);
  }, [movies]);

  useEffect(() => {
    const searchedMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayedMovies(searchedMovies);
  }, [search, movies]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("handling submit...")
    fetch('http://localhost:8080', {
      method: "POST",
      body: JSON.stringify({
        title: movieTitle
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("fetch post response data:\n", data)
      })
  }

  const handleDelete = (movieID) => {
    console.log('movieID:\n', movieID)
  }

  return (
    <>
      <Row>
        <Container>
          <form className="newMovie" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="movie_title">Movie Title: </label>
              <input type="text" id="movie_title" className="form-control" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} />
              <button type="submit" className="btn btn-primary btn-block mb4">Add Movie</button>
            </div>
          </form>
        </Container>
      </Row>
      <br></br>
      <Row>
        <div className="input-group rounded">
          <input type="search" className="form-control rounded" onChange={(e) => setSearch(e.target.value)} placeholder="Search movies" />
        </div>
      </Row>
      <br></br>
      <Row>
        <Col style={{ width: '50%' }}>
          <span>Full List of Movies</span>
          <ul>
            {displayedMovies.map((movie, index) => (
              <li key={movie.id}>
                <span>
                  {movie.id + '. ' + movie.title}
                  <form onSubmit={() => handleDelete(movie.id)} style={{ display: 'inline' }}>
                    <button type="submit" style={{ marginLeft: '10px' }}>Delete</button>
                  </form>
                </span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  )
}

export default Movies;