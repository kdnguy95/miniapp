const express = require('express');
const  knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
))

app.use(express.json());

app.get('/', (req, res) => {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err => {
      res.status(404).json({
        message:'Not Found'
      })
    })
})

app.post('/', (req,res) => {
  let movie = req.body
  console.log('movie:\n', movie)

  knex.insert(movie)
    .into("movies")
    .then(data => res.status(200).json({message: `Successfully added ${movie.title}`}))
    .catch(err => {
      console.log('error:\n', err)
      res.status(404).json(err)
    })
})

app.listen(port, () => console.log(`Movie server listening at http://localhost:${port}`))